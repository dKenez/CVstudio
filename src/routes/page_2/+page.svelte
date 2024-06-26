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

<div class="page bg-white px-12 py-12" id="page-2">
    <Education />
    <ProjectsAndAchievements />
    <Contact />
</div>


<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		/* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); */
		display: flex;
		flex-direction: column;
	}
</style>
