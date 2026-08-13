<script lang="ts">
	import Header from './Header.svelte';
	import About from './About.svelte';
	import Languages from './Languages.svelte';
	import Experience from './Experience.svelte';

	// `preview` adds the on-screen paper shadow + spacing used by the index page.
	// The standalone print routes render without it.
	export let preview = false;
</script>

<div class="page bg-white px-10 py-8" class:preview id="page-1">
	<Header />
	<div class="mt-4 flex gap-8 items-start">
		<div class="flex-1">
			<About />
		</div>
		<div class="w-40 shrink-0">
			<Languages />
		</div>
	</div>
	<div class="">
		<Experience />
	</div>
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
