<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';
	import Skills from '$lib/components/Skills.svelte';

	let pageWrapper: HTMLDivElement;
	let pages: HTMLDivElement;

	function updateWrapperHeight() {
		const scale = getComputedStyle(pages).getPropertyValue('transform');
		const matrix = new DOMMatrixReadOnly(scale);
		const scaledHeight = pages.offsetHeight * matrix.a; // matrix.a is the scale factor
		pageWrapper.style.height = `${scaledHeight}px`;
	}

	function downloadPDF() {
		const pdfUrl = '/KKD_CV_2024jun27.pdf'; // Path to your PDF file in the public directory
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'resume.pdf'; // Name for the downloaded file
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	onMount(() => {
		updateWrapperHeight();
		window.addEventListener('resize', updateWrapperHeight);

		return () => {
			window.removeEventListener('resize', updateWrapperHeight);
		};
	});
</script>

<div class="bg-slate-600 min-h-screen min-w-screen p-10 flex justify-center backdrop">
	<div class="page-wrapper" bind:this={pageWrapper}>
		<div class="pages" bind:this={pages}>
			<div class="page bg-white px-12 py-12 mb-12" id="page-1">
				<Header />
				<Skills />
				<Experience />
			</div>
			<div class="page bg-white px-12 py-12 mb-10" id="page-2">
				<Education />
				<ProjectsAndAchievements />
				<Contact />
			</div>
		</div>
	</div>
	<!-- Floating Buttons -->
	<div class="floating-buttons fixed flex gap-4">
		<button
			class="rounded-lg bg-stone-200 px-4 py-2 shadow-md shadow-slate-800/50 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-600 hover:shadow-xl hover:ring-blue-400 transition ease-in-out duration-300"
			><a href="https://www.dkenez.dk">Return to <span class="text-blue-500">www.dkenez.dk</span></a
			></button
		>
		<button
			on:click={downloadPDF}
			class="rounded-lg bg-stone-200 px-4 py-2 shadow-md shadow-slate-800/50 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-600 hover:shadow-xl hover:ring-blue-400 transition ease-in-out duration-300"
			>Download PDF</button
		>
	</div>
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
	}

	.pages {
		transform-origin: center;
	}

	.page-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: fit-content;
	}

	@media (min-width: 1301px) {
		.floating-buttons {
			position: fixed;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			flex-direction: column;
		}
	}
	@media (max-width: 1300px) {
		.floating-buttons {
			position: fixed;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			flex-direction: row;
		}
	}

	.download-button {
		background-color: #1d4ed8;
		color: white;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s;
	}

	.download-button:hover {
		background-color: #2563eb;
	}

	/* Smaller devices */
	@media (max-width: 599px) {
		.pages {
			transform: scale(0.5);
		}
	}

	/* Medium devices */
	@media (min-width: 600px) and (max-width: 767px) {
		.pages {
			transform: scale(0.7);
		}
	}

	/* Tablets */
	@media (min-width: 768px) and (max-width: 991px) {
		.pages {
			transform: scale(0.85);
		}
	}

	/* Desktops */
	@media (min-width: 992px) {
		.pages {
			transform: scale(1);
		}
	}

	.backdrop {
		background-color: #475569;
		background-image: radial-gradient(#94a3b8, 1px, transparent 1px);
		background-size: 40px 40px;
		background-attachment: fixed;
		width: 100vw;
		height: 100vh;
		overflow: scroll;
	}
</style>
