<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Education from '$lib/components/Education.svelte';
	import ProjectsAndAchievements from '$lib/components/ProjectsAndAchievements.svelte';
</script>

<div class="page bg-white px-12 py-12" id="page-2">
	<Education />
	<ProjectsAndAchievements />
	<Contact />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		/* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); */
		display: flex;
		flex-direction: column;
	}
</style>
