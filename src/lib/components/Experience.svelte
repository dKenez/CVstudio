<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import NumeratorLogo from '$lib/assets/numerator-logo.svg';
	import MetriksLogo from '$lib/assets/metriks-logo.svg';
	import KauzaLogo from '$lib/assets/kauza-logo.svg';
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
			position="Machine Learning Engineer"
			company="Numerator"
			startDate={2026}
			endDate="Present"
			logo={NumeratorLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Continued FMCG market analytics post-acquisition in a larger team',
				'Expanding focus into CI/CD Cloud Engineering at scale'
			]}
			stack={['Python', 'AWS', 'Terraform', 'Kubernetes', 'GitHub Actions']}
		/>
		<ExperienceElement
			position="Machine Learning Engineer"
			company="Kauza ApS"
			startDate={2024}
			endDate={2026}
			logo={KauzaLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Developing advanced language models to drive industry-leading FMCG data products',
				'Operating at scale with robust data governance'
			]}
			stack={['Python', 'GCP', 'Terraform', 'Docker']}
		/>
		<ExperienceElement
			position="Lead Frontend Engineer"
			company="Metriks ApS"
			startDate={2022}
			endDate={2024}
			logo={MetriksLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Redesigned and built a modern webapp with sleek and responsive UI/UX',
				'Stepped into backend and DevOps to keep things running fast and smooth'
			]}
			stack={['React', 'Redux', 'Next.js', 'FastAPI', 'Redis', 'Docker', 'TypeScript', 'Python']}
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
