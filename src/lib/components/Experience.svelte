<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import NumeratorLogo from '$lib/assets/numerator-logo.svg';
	import MetriksLogo from '$lib/assets/metriks-logo.svg';
	import KauzaLogo from '$lib/assets/kauza-logo.svg';

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
				'Manage containerized ML services with Kubernetes and Docker, infrastructure-as-code with Terraform, and automated delivery via GitHub Actions',
				'Built a receipt-dewarping module that fits a homography from OCR word-box geometry to correct perspective ahead of LLM extraction, improving downstream extraction reliability'
			]}
			stack={['Python', 'AWS', 'Transformers', 'LLMs', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions']}
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
				'Developed LLM-based extraction and classification systems powering industry-leading FMCG data products',
				'Built data pipelines and cloud deployment infrastructure on GCP using Terraform and Docker'
			]}
			stack={['Python', 'GCP', 'Transformers', 'Terraform', 'Docker', 'PostgreSQL']}
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
</div>
</div>
