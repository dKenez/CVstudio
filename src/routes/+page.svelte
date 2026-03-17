<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Education from '$lib/components/Education.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import ExperienceContinued from '$lib/components/ExperienceContinued.svelte';
	import Header from '$lib/components/Header.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';

	let pageWrapper: HTMLDivElement;
	let pages: HTMLDivElement;

	function updateWrapperHeight() {
		const scale = getComputedStyle(pages).getPropertyValue('transform');
		const matrix = new DOMMatrixReadOnly(scale);
		const scaledHeight = pages.offsetHeight * matrix.a; // matrix.a is the scale factor
		pageWrapper.style.height = `${scaledHeight}px`;
	}

	function downloadPDF() {
		const pdfUrl = '/KKD_CV_2025may26.pdf'; // Path to your PDF file in the public directory
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
				<div class="mt-6">
					<About />
				</div>
				<Experience />
			</div>
			<div class="page bg-white px-12 py-12 mb-12" id="page-2">
				<ExperienceContinued />
				<Education />
			</div>
			<div class="page bg-white px-12 py-12 mb-12" id="page-3">
				<ProjectsAndAchievements />
				<Contact />
			</div>
		</div>
	</div>
	<!-- Floating Buttons -->
	<button
		on:click={downloadPDF}
		class="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-stone-200 shadow-md shadow-slate-800/50 ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-600 hover:shadow-xl hover:ring-blue-400 transition ease-in-out duration-300 flex items-center justify-center"
		aria-label="Download PDF"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
		</svg>
	</button>
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


	/* Smaller devices */
	@media (max-width: 419px) {
		.pages {
			transform: scale(0.4);
		}
	}

	/* Smaller devices */
	@media (min-width: 420px) and (max-width: 599px) {
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
		background-color: #1e3a5f;
		background-image: radial-gradient(#2d5a8e, 1px, transparent 1px);
		background-size: 40px 40px;
		background-attachment: fixed;
		width: 100vw;
		height: 100vh;
		overflow: scroll;
	}
</style>
