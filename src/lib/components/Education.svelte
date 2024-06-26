<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import DTULogo from '$lib/assets/dtu-logo.svg';
	import BMELogo from '$lib/assets/bme-logo.svg';
</script>

<div class="flex flex-col gap-4 mb-6">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Education</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex flex-col gap-4">
		<ExperienceElement
			position="MSc. Autonomous Systems"
			company="Technical University of Denmark"
			startDate={2022}
			endDate={2024}
			logo={DTULogo}
			country="Denmark"
			city="Lyngby"
			description={[
				"Master's education focusing on Robotics, Control, AI, and Human-Computer Interaction",
				'Specialized in Computer Vision and Deep Learning for Autonomous Systems',
				'Thesis project: Global Localization of Earthly Images powered by Deep Learning'
			]}
		/>

		<ExperienceElement
			position="BSc. Mechatronical Engineering"
			company="Budapest University of Technology and Economics"
			startDate={2018}
			endDate={2022}
			logo={BMELogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Bachelors education focusing on Mechanical, Electrical, and Control Engineering',
				'Specialized in Cyberphysical Systems and Robotics',
				'Thesis project: Implementing Additive Manufacturing Processes in Digital Twin Systems'
			]}
		/>
	</div>
</div>
