<script lang="ts">
	import { onMount } from 'svelte';
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

	onMount(() => {
		updateWrapperHeight();
		window.addEventListener('resize', updateWrapperHeight);
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
			<div class="page bg-white px-12 py-12" id="page-2">
				<Education />
				<ProjectsAndAchievements />
				<Contact />
			</div>
		</div>
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
