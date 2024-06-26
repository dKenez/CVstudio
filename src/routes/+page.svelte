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
	<div class="flex flex-col gap-12">
		<!-- <button on:click={generatePDF}>Generate PDF</button> -->
		<div class="page bg-white px-12 py-12" id="page-1" bind:this={content}>
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

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		display: flex;
		flex-direction: column;
	}

	.backdrop {
		background-color: #475569;
		background-image: radial-gradient(#94a3b8, 1px, transparent 1px);
		background-size: 40px 40px;
		background-attachment: fixed;
	}
</style>
