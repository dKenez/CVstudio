<script lang="ts">
	import Education from '$lib/components/Education.svelte';
	import ExperienceContinued from '$lib/components/ExperienceContinued.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';
</script>

<div class="page bg-white px-10 py-8" id="page-2">
	<ExperienceContinued />
	<Education />
	<ProjectsAndAchievements />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		display: flex;
		flex-direction: column;
	}
</style>
