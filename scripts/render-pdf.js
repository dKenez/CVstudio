/**
 * Renders the CV to a print-ready PDF via headless Chrome.
 *
 * Boots a throwaway Vite dev server, prints the standalone /page_1 and /page_2
 * routes (the ones that render without the on-screen `preview` chrome), and
 * merges them into a single file under static/.
 *
 * Usage:
 *   npm run pdf                       -> static/KKD_CV_<yyyymmmdd>.pdf
 *   npm run pdf -- --out foo.pdf      -> custom path
 *   npm run pdf -- --port 5199
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { PDFDocument } from 'pdf-lib';
import puppeteer from 'puppeteer';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROUTES = ['/page_1', '/page_2'];

function parseArgs(argv) {
	const args = { port: 5199, out: null };
	for (let i = 0; i < argv.length; i++) {
		if (argv[i] === '--port') args.port = Number(argv[++i]);
		else if (argv[i] === '--out') args.out = argv[++i];
		else throw new Error(`Unknown argument: ${argv[i]}`);
	}
	if (!Number.isInteger(args.port)) throw new Error('--port must be an integer');
	return args;
}

function defaultOutPath() {
	const now = new Date();
	const month = now.toLocaleString('en-US', { month: 'short' }).toLowerCase();
	const day = String(now.getDate()).padStart(2, '0');
	return resolve(root, `static/KKD_CV_${now.getFullYear()}${month}${day}.pdf`);
}

async function startDevServer(port) {
	const server = spawn('npx', ['vite', 'dev', '--port', String(port), '--strictPort'], {
		cwd: root,
		stdio: ['ignore', 'pipe', 'pipe']
	});

	let log = '';
	server.stdout.on('data', (d) => (log += d));
	server.stderr.on('data', (d) => (log += d));

	const exited = new Promise((_, reject) =>
		server.once('exit', (code) => reject(new Error(`Dev server exited early (${code}):\n${log}`)))
	);

	const url = `http://localhost:${port}`;
	const ready = (async () => {
		const deadline = Date.now() + 60_000;
		while (Date.now() < deadline) {
			try {
				const res = await fetch(url, { signal: AbortSignal.timeout(1000) });
				if (res.ok) return;
			} catch {
				// not listening yet
			}
			await new Promise((r) => setTimeout(r, 200));
		}
		throw new Error(`Dev server did not become ready on ${url}:\n${log}`);
	})();

	await Promise.race([ready, exited]);
	return { server, url };
}

async function renderRoute(browser, url) {
	const page = await browser.newPage();
	try {
		await page.goto(url, { waitUntil: 'networkidle0' });
		// Match what the browser print dialog does, so the @media print rules in
		// app.css (notably the ligature fix that keeps the text layer copyable) apply.
		await page.emulateMediaType('print');
		await page.evaluate(() => document.fonts.ready);
		return await page.pdf({
			printBackground: true,
			// app.css declares `@page { size: A4 }` to match the 210mm x 297mm .page
			// box; honour it rather than letting Chrome fall back to Letter, which is
			// shorter and pushes each page onto a second sheet.
			format: 'A4',
			preferCSSPageSize: true,
			margin: { top: 0, right: 0, bottom: 0, left: 0 }
		});
	} finally {
		await page.close();
	}
}

async function main() {
	const { port, out } = parseArgs(process.argv.slice(2));
	const outPath = out ? resolve(process.cwd(), out) : defaultOutPath();

	const { server, url } = await startDevServer(port);
	let browser;
	try {
		browser = await puppeteer.launch({ headless: true });

		const parts = [];
		for (const route of ROUTES) {
			process.stdout.write(`  rendering ${route}\n`);
			parts.push(await renderRoute(browser, url + route));
		}

		const merged = await PDFDocument.create();
		for (const part of parts) {
			const doc = await PDFDocument.load(part);
			const pages = await merged.copyPages(doc, doc.getPageIndices());
			for (const page of pages) merged.addPage(page);
		}

		await mkdir(dirname(outPath), { recursive: true });
		await writeFile(outPath, await merged.save());
		process.stdout.write(`\n  wrote ${outPath} (${merged.getPageCount()} pages)\n`);
	} finally {
		await browser?.close();
		server.kill();
	}
}

main().catch((err) => {
	console.error(err.message ?? err);
	process.exit(1);
});
