<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import LocusLogo from '$lib/assets/locus-logo.svg';
	import ValhacksLogo from '$lib/assets/valhacks-logo1.svg';
	import DTULogo from '$lib/assets/dtu-logo.svg';
</script>

<div class="flex flex-col gap-4 mb-6">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Projects and Achievements</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex flex-col gap-4">
		<ExperienceElement
			position="MSc. thesis project"
			company="LOCUS Image Geolocation Webapp "
			startDate={2024}
			logo={LocusLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Full stack Deep Learning project with webapp deployed on the cloud',
				'Implemented a novel method for global image localization using deep learning',
				'Developed using cuttintg edge technologies in MLOps, Webdev, and Deep Learning',
				'Tech stack: SvelteKit, TailwindCSS, TypeScript, PyTorch, Polars, PostgreSQL, Docker'
			]}
		/>
		<ExperienceElement
			position="Placed 3rd"
			company="BEST Copenhagen ValHacks hackathon"
			startDate={2024}
			logo={ValhacksLogo}
			country="Denmark"
			city="Lyngby"
			description={[
				'Developed a solution for processing audio signals for sleep monitoring of babies',
				'Created a bespoke webapp for integrating with client hardware',
				'Awarded for being only team to implement user-facing features with intuitive design'
			]}
		/>
		<ExperienceElement
			position="Machine Learning and Data Mining | Introduction to Programming"
			company="Teaching Assistant at Technical University of Denmark"
			startDate={2023}
			logo={DTULogo}
			country="Denmark"
			city="Lyngby"
			description={[
				'Assisted students in understanding complex topics in Machine Learning and Data Mining',
				'Developed communicating ideas clearly, transcending skill and language barriers',
				'Commended for ability to give clear and concise explanations and positive attitude'
			]}
		/>
	</div>
</div>
