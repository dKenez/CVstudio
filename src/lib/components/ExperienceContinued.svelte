<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import MaxwhereLogo from '$lib/assets/mw-logo.svg';
	import ProfirentLogo from '$lib/assets/profirent-logo.svg';
	import RobotizalunkLogo from '$lib/assets/robotizalunk-logo.svg';
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
			company="MaxWhere Solutions Ltd."
			startDate={2021}
			endDate={2022}
			logo={MaxwhereLogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Engineered custom digital twin platforms tailored to client needs',
				'Built real-time visualization tools for additive manufacturing workflows'
			]}
			stack={['React', 'Vue', 'Three.js', 'Electron', 'TypeScript', 'Python']}
		/>
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
		<ExperienceElement
			position="Engineering Intern"
			company="Robotizálunk Kft."
			startDate={2019}
			logo={RobotizalunkLogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Built computer vision pipelines for automation of warehouse inventory management workflows'
			]}
			stack={['Python', 'OpenCV', 'PyTorch', 'TorchVision', 'ROS']}
		/>
	</div>
</div>
