<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import ProfirentLogo from '$lib/assets/profirent-logo.svg';
</script>

<div class="flex flex-col gap-4 mb-6">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Experience (cont.)</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex flex-col gap-4">
		<ExperienceElement
			position="Junior Software Engineer"
			company="Profirent Kft."
			startDate={2020}
			endDate={2021}
			logo={ProfirentLogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Automated rental management workflows with VBScript',
				'Built a Python computer vision pipeline to process years of document backlogs, eliminating ~300 hours of manual work'
			]}
			stack={['Python', 'PyTorch', 'Google Tesseract', 'VBScript']}
		/>
	</div>
</div>
