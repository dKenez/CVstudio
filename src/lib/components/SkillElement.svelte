<script lang="ts">
	// Add your script logic here
	export let title: string;
	export let icon: string;
	export let description: string[];
</script>

<div class="text-center">
	<h3 class="font-bold">{title}</h3>
	<img src={icon} alt={title} class="h-[40px] m-auto text-red-200" />
	<ul class="text-xs font-thin">
		{#each description as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>
