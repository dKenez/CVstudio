<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
	import Languages from '$lib/components/Languages.svelte';
</script>

<div class="page bg-white px-10 py-8" id="page-1">
	<Header />
	<div class="mt-6 flex gap-8 items-start">
		<div class="flex-1">
			<About />
		</div>
		<div class="w-56 shrink-0">
			<Languages />
		</div>
	</div>
	<Experience />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		display: flex;
		flex-direction: column;
	}
</style>
