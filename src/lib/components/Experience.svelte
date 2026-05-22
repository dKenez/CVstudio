<script>
	import ExperienceElement from './ExperienceElement.svelte';

	import NumeratorLogo from '$lib/assets/numerator-logo.svg';
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
				'Continued FMCG market analytics post-acquisition in a larger team',
				'Expanding focus into CI/CD Cloud Engineering at scale'
			]}
			stack={['Python', 'AWS', 'Transformers', 'LLMs', 'Terraform', 'Kubernetes', 'GitHub Actions']}
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
			stack={['Python', 'GCP', 'Transformers', 'Terraform', 'Docker', 'PostgreSQL']}
		/>
</div>
</div>
