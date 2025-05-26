<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="page bg-white px-12 py-12 mb-12" id="page-1">
	<Header />
	<Experience />
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
