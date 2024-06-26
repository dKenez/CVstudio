<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import MetriksLogo from '$lib/assets/metriks-logo.svg';
    import MaxwhereLogo from '$lib/assets/mw-logo.svg';
    import ProfirentLogo from '$lib/assets/profirent-logo.svg';
    import RobotizalunkLogo from '$lib/assets/robotizalunk-logo.svg';
</script>

<div class="flex flex-col gap-4 mb-6">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Experience</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex flex-col gap-4">
		<ExperienceElement
			position="Lead Frontend Engineer"
			company="Metriks ApS"
			startDate={2022}
			endDate="Present"
			logo={MetriksLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Responsible for designing and developing webapp frontend from the ground up',
				'Later took up responsibilities in the backend development and DevOps',
				'Tech stack: React, Redux, Next.js, fastAPI, Redis, Docker, TypeScript, Python',
			]}

		/>
		<ExperienceElement
			position="Junior Software Engineer"
			company="MaxWhere Solutions Ltd."
			startDate={2021}
			endDate={2022}
			logo={MaxwhereLogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Part of the team developing bespoke digital twin solutions for clients',
				'Implemented system for real-time visualization of additive manufacturing processes',
				'Tech stack: React, Vue, Three.js, Electron, TypeScript, Python'
			]}
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
				'Supported sales team with scripting and automation',
				'Developed AI solution to automate archiving, saving ~300 hours of manual data entry',
				'Tech stack: Python, PyTorch, Google Tesseract'
			]}
		/>
		<ExperienceElement
			position="Engineering Intern"
			company="Robotizálunk Kft."
			startDate={2019}
			logo={RobotizalunkLogo}
			country="Hungary"
			city="Budapest"
			description={[
				'Worked on automating inventory management of warehouses using drones',
				'Responsible for developing image recognition software on drone and server-side',
				'Tech stack:  Python, OpenCV, PyTorch, TorchVision, ROS'
			]}
		/>
	</div>
</div>