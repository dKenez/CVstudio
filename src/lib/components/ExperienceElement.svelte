<script lang="ts">
	import StackPill from './StackPill.svelte';

	export let company: string;
	export let position: string;
	export let startDate: number;
	export let endDate: number | 'Present' | undefined = undefined;
	export let logo: string;
	export let city: string;
	export let country: string;
	export let description: string[];
	export let stack: string[] = [];
</script>

<div class="flex gap-12 items-center">
	<img src={logo} alt={`${position} - ${company}`} class="aspect-square h-20" />
	<div>
		<div class="flex gap-4">
			<p class="font-bold text-xs text-zinc-500">{startDate}{endDate ? ` - ${endDate}` : ''}</p>
			<p class="italic text-xs text-zinc-500">{city}, {country}</p>
		</div>
		<p class="font-bold text-xl">{company}</p>
		<p class="font">{position}</p>

		<ul>
			{#each description as item}
				<li class="item text-sm">{item}</li>
			{/each}
		</ul>

		{#if stack.length > 0}
			<div class="flex flex-wrap gap-1 mt-1">
				{#each stack as label}
					<StackPill {label} />
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.item {
		padding-left: 1.25em;
		text-indent: -1.25em;
	}
	.item::before {
		content: '🔹';
	}
</style>
