<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import NumeratorLogo from '$lib/assets/numerator-logo.svg';
	import MetriksLogo from '$lib/assets/metriks-logo.svg';
	import KauzaLogo from '$lib/assets/kauza-logo.svg';
	import MaxwhereLogo from '$lib/assets/mw-logo.svg';
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
				'Build and operate production LLM pipelines for FMCG market analytics — owning model deployment, CI/CD, and post-deployment monitoring on AWS',
				'Manage ML services on Kubernetes, IaC with Terraform, and CI/CD via GitHub Actions',
				'Built a receipt-dewarping module that fits a homography from OCR word-box geometry to correct perspective ahead of LLM extraction — improving downstream extraction reliability'
			]}
			stack={[
				'Python',
				'SQL',
				'AWS',
				'Transformers',
				'LLMs',
				'RAG',
				'Terraform',
				'Kubernetes',
				'CI/CD'
			]}
		/>
		<ExperienceElement
			position="Machine Learning Engineer"
			company="Kauza ApS"
			note="acquired by Numerator, 2026"
			startDate={2024}
			endDate={2026}
			logo={KauzaLogo}
			country="Denmark"
			city="Copenhagen"
			description={[
				'Developed transformer-based extraction / classification for industry-leading FMCG products',
				'Built data pipelines and cloud deployment infrastructure on GCP using Terraform and Docker'
			]}
			stack={[
				'Python',
				'Rust',
				'GCP',
				'BigQuery',
				'Transformers',
				'Terraform',
				'Docker',
				'PostgreSQL'
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
	</div>
</div>
