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

	import Icon from '@iconify/svelte';
	import SkillTag from './SkillTag.svelte';
</script>

<div class="flex flex-col gap-4 mb-8">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Skills</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex justify-between flex-wrap gap-1">
		<!-- <BudapestCitadella /> -->

		<SkillTag title="Python" icon="simple-icons:python" />
		<SkillTag title="Typescript" icon="simple-icons:typescript" />
		<SkillTag title="Javascript" icon="simple-icons:javascript" />
		<SkillTag title="Kotlin" icon="simple-icons:kotlin" />
		<SkillTag title="Elixir" icon="simple-icons:elixir" />
		<SkillTag title="Unity" icon="simple-icons:unity" />
		<SkillTag title="Google Cloud Platform" icon="simple-icons:googlecloud" />
		<SkillTag title="Next.js" icon="simple-icons:nextdotjs" />
		<SkillTag title="React" icon="simple-icons:react" />
		<SkillTag title="React Query" icon="simple-icons:reactquery" />
		<SkillTag title="Svelte" icon="simple-icons:svelte" />
		<SkillTag title="Axios" icon="simple-icons:axios" />
		<SkillTag title="Material UI" icon="simple-icons:materialdesign" />
		<SkillTag title="Ktor" icon="simple-icons:ktor" />
		<SkillTag title="Phoenix" icon="simple-icons:phoenixframework" />
		<SkillTag title="Pandas" icon="simple-icons:pandas" />
		<SkillTag title="Polars" icon="simple-icons:polars" />
		<SkillTag title="PyTorch" icon="simple-icons:pytorch" />
		<SkillTag title="NumPy" icon="simple-icons:numpy" />
		<SkillTag title="fastAPI" icon="simple-icons:fastapi" />
		<SkillTag title="RabbitMQ" icon="simple-icons:rabbitmq" />
		<SkillTag title="openCV" icon="simple-icons:opencv" />
		<SkillTag title="Deep Learning" icon="hugeicons:ai-brain-02" />
		<SkillTag title="LLM" icon="simple-icons:openai" />
		<SkillTag title="Docker" icon="simple-icons:docker" />
		<SkillTag title="Kubernetes" icon="simple-icons:kubernetes" />
		<SkillTag title="Linux" icon="simple-icons:linux" />
		<SkillTag title="Android Studio" icon="simple-icons:androidstudio" />
		<SkillTag title="Digital Ocean" icon="simple-icons:digitalocean" />
		<SkillTag title="Blender" icon="simple-icons:blender" />
		<SkillTag title="Adobe suite" icon="simple-icons:adobe" />
		<SkillTag title="PostgreSQL" icon="simple-icons:postgresql" />
		<SkillTag title="Test Driven Development" icon="simple-icons:jest" />
	</div>
</div>
