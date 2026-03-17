<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="page bg-white px-12 py-12" id="page-1">
	<Header />
	<div class="mt-6">
		<About />
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
