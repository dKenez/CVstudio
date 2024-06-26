<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';
	import Skills from '$lib/components/Skills.svelte';
	// import html2pdf from 'html2pdf.js';

	let content;

	// function generatePDF() {
	// 	const element = content; // The HTML element you want to convert to PDF
	// 	const opt = {
	// 		margin: 1,
	// 		filename: 'mydocument.pdf',
	// 		image: { type: 'jpeg', quality: 0.98 },
	// 		html2canvas: { scale: 2 },
	// 		jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
	// 	};

	// 	html2pdf().set(opt).from(element).save();
	// }
</script>

<div class="bg-slate-600 min-h-screen min-w-screen p-10 flex justify-center backdrop">
	<!-- <button on:click={generatePDF}>Generate PDF</button> -->
	<div class="page-wrapper">
		<div class="pages">
			<div class="page bg-white px-12 py-12 mb-12" id="page-1" bind:this={content}>
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
		transform-origin: top;
		height: fit-content;
		height: fit-content;
	}

	.page-wrapper {
        display: flex;
		justify-content: center;
		align-items: center;
        width: 100%;
		height: fit-content;
		/* height: 100vh; */
		/* overflow: hidden; */
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
	}
</style>
