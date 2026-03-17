<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';
</script>

<div class="page bg-white px-12 py-12" id="page-3">
	<ProjectsAndAchievements />
	<Contact />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		display: flex;
		flex-direction: column;
	}
</style>
