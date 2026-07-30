<script lang="ts">
	import { summary } from '$lib/data/summaries';
</script>

<div class="flex flex-col gap-4 mb-6">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">About</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<p class="text-sm leading-relaxed text-justify mt-2">
		{summary}
	</p>
</div>
