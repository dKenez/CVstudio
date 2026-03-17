<script lang="ts">
	import Education from '$lib/components/Education.svelte';
	import ExperienceContinued from '$lib/components/ExperienceContinued.svelte';
</script>

<div class="page bg-white px-12 py-12" id="page-2">
	<ExperienceContinued />
	<Education />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		display: flex;
		flex-direction: column;
	}
</style>
