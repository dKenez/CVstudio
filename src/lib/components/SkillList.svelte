<script lang="ts">
	// Add your script logic Header

	export let skills: string[];
</script>

<div>
	<ul class="flex justify-around">
		{#each skills as skill}
			<li class="item font-bold text-sm">{skill}</li>
		{/each}
	</ul>
</div>

<style>
	/* Add your component styles here */

	.item::before {
        content: '🔹';
	}
</style>
