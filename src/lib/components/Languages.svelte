<script lang="ts">
	const languages: { name: string; level: string }[] = [
		{ name: 'Hungarian', level: 'Native' },
		{ name: 'English', level: 'Fluent' },
		{ name: 'Danish', level: 'PD3' },
		{ name: 'German, Spanish, Latin', level: 'Passionate conversationalist' }
	];
</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-between gap-4">
		<div class="border-b-2 border-slate-200 flex-1"></div>
		<h2 class="font-bold">Languages</h2>
		<div class="border-b-2 border-slate-200 flex-1"></div>
	</div>

	<div class="flex flex-col gap-2">
		{#each languages as language}
			<div>
				<!-- role/job-title typography from Experience -->
				<p class="font text-sm">{language.name}</p>
				<!-- location typography from Experience -->
				<p class="italic text-xs text-zinc-500">{language.level}</p>
			</div>
		{/each}
	</div>
</div>
