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
	export let note: string = '';
	// When set, the logo is rendered white on a rounded tile of this color
	// (for monochrome icon logos) instead of as a plain image.
	export let logoBg: string = '';
</script>

<div class="flex gap-6 items-center">
	{#if logoBg}
		<div
			class="aspect-square h-14 rounded-md shrink-0 flex items-center justify-center"
			style="background-color: {logoBg};"
			role="img"
			aria-label={`${position} - ${company}`}
		>
			<div
				class="w-10 h-10"
				style="background-color: white; -webkit-mask: url({logo}) center / contain no-repeat; mask: url({logo}) center / contain no-repeat;"
			></div>
		</div>
	{:else}
		<img src={logo} alt={`${position} - ${company}`} class="aspect-square h-14" />
	{/if}
	<div>
		<div class="flex gap-4">
			<p class="font-bold text-xs text-zinc-500">{startDate}{endDate ? ` — ${endDate}` : ''}</p>
			<p class="italic text-xs text-zinc-500">{city}{country ? `, ${country}` : ''}</p>
		</div>
		<div class="flex items-baseline gap-2">
			<p class="font-bold text-xl">{company}</p>
			{#if note}<span class="font-bold text-sm text-zinc-500">{note}</span>{/if}
		</div>
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
