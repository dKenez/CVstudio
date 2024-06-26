<script>
	// Add your script logic here

	import SkillElement from './SkillElement.svelte';
	import SkillList from './SkillList.svelte';

	import BudapestCitadella from '$lib/assets/budapest-citadella.svg';
	import Code from '$lib/assets/code.svg';
	import Construct from '$lib/assets/connected-ecosystem.svg';
	import GraphicDesign from '$lib/assets/graphic-design.svg';
	import DesignLeadership from '$lib/assets/design-leadership.svg';
	import HeatMap from '$lib/assets/chart-quadrant-plot.svg';
</script>

<div class="flex flex-col gap-4 mb-8">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Skills</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex justify-between">
		<!-- <BudapestCitadella /> -->
		<SkillElement
			title="Programming"
			icon={Code}
			description={['Python', 'Typescript', 'Kotlin', 'Elixir']}
		/>
		<SkillElement
			title="Development"
			icon={Construct}
			description={['GCP', 'Docker & Kubernetes', 'DevOps', 'Linux Server']}
		/>
		<SkillElement
			title="Analysis"
			icon={HeatMap}
			description={['Big Data', 'Deep Learning', 'Computer Vision', 'Data Visualization']}
		/>
		<SkillElement
			title="Jack of All Trades"
			icon={GraphicDesign}
			description={['Video Editing', 'Blender 3D', 'Photo Editing', 'Graphic Design']}
		/>
		<SkillElement
			title="Communication"
			icon={DesignLeadership}
			description={[
				'Client Management',
				'Clear and concise',
				'Teaching mindset',
				'Presentation Skills'
			]}
		/>
	</div>

	<SkillList skills={['Goal Oriented', 'Self Learning', 'Team Player']} />
</div>
