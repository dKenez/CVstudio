<script lang="ts">
	export let company: string;
	export let position: string;
	export let startDate: number;
	export let endDate: number | 'Present' | undefined = undefined;
	export let logo: string;
	export let city: string;
	export let country: string;
	export let description: string[];
</script>

<div class="flex gap-12 items-center">
	<img src={logo} alt={`${position} - ${company}`} class="aspect-square h-20" />
	<div>
		<div class="flex gap-4">
			<p class="font-bold text-xs">{startDate}{endDate ? ` - ${endDate}` : ''}</p>
			<p class="italic text-xs">{city}, {country}</p>
		</div>
		<p class="font-bold text-xl">{company}</p>
		<p class="font">{position}</p>

		<ul>
			{#each description as item}
				<li class="item text-sm">{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.item::before {
		content: '🔹';
	}
</style>
