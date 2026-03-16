<script>
	import ExperienceElement from './ExperienceElement.svelte';

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
			position="ML ninja"
			company="Kauza ApS"
			startDate={2024}
			endDate="Present"
			logo={KauzaLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Developing advanced language models to drive industry-leading consumer data products',
				'Operating at scale with robust data governance',
				'Tech stack: Python, GCP, and all the blazing-fast Rust libraries 🔥'
			]}
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
				'Redesigned and built a new and modern webapp frontend with sleek, responsive UI/UX',
				'Stepped into backend and DevOps to keep things running fast and smooth',
				'Tech stack: React, Redux, Next.js, FastAPI, Redis, Docker, TypeScript, Python'
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
				'Engineered custom digital twin platforms tailored to client needs',
				'Built real-time visualization tools for additive manufacturing workflows',
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
				'Empowered the sales team with scripting, automation, and custom tools',
				'Delivered AI-powered archiving solution, eliminating ~300 hours of manual work',
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
				'Built drone-powered automation systems for warehouse inventory management',
				'Developed image recognition software for both onboard and server-side processing',
				'Tech stack: Python, OpenCV, PyTorch, TorchVision, ROS'
			]}
		/>
	</div>
</div>
