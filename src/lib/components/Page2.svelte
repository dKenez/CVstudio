<script lang="ts">
	import ExperienceContinued from './ExperienceContinued.svelte';
	import Education from './Education.svelte';
	import ProjectsAndAchievements from './ProjectsAndAchievements.svelte';

	// `preview` adds the on-screen paper shadow + spacing used by the index page.
	// The standalone print routes render without it.
	export let preview = false;
</script>

<div class="page bg-white px-8 py-8" class:preview id="page-2">
	<ExperienceContinued />
	<Education />
	<ProjectsAndAchievements />
</div>

<style>
	.page {
		width: 210mm;
		height: 297mm;
		display: flex;
		flex-direction: column;
		/* A sheet is a hard boundary. Without this the trailing margin below the last
		   section counts as overflow and Chrome emits an extra blank sheet when printing. */
		overflow: hidden;
	}

	.page.preview {
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		margin-bottom: 3rem;
	}
</style>
