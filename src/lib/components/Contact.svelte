<script>
	import { LinkedinSolid } from 'flowbite-svelte-icons';
	import { GithubSolid } from 'flowbite-svelte-icons';
	import { PhoneSolid } from 'flowbite-svelte-icons';
	import { EnvelopeSolid } from 'flowbite-svelte-icons';
	import { DribbbleSolid } from 'flowbite-svelte-icons';
</script>

<div class="grow align-bottom flex flex-col justify-end">
	<div class="flex flex-col gap-4 mb-6">
		<div class="flex justify-between gap-4">
			<div class="border-b-2 border-slate-200 flex-1"></div>
			<h2 class="font-bold">Contact</h2>
			<div class="border-b-2 border-slate-200 flex-1"></div>
		</div>

		<div >
			<div class="flex justify-around">
				<div class="flex items-center gap-2">
					<EnvelopeSolid class="h-8 aspect-square text-[#2094f1]" />
					<p class="text-sm">k.k.drexler@gmail.com</p>
				</div>
				<div class="flex items-center gap-2">
					<PhoneSolid class="h-8 aspect-square text-[#2094f1]" />
					<p class="text-sm">+45 911 01679</p>
				</div>
			</div>
			<div class="flex justify-around">
				<div class="flex items-center gap-2">
					<LinkedinSolid class="h-8 aspect-square text-[#2094f1]" />
					<p class="text-sm">linkedin.com/in/kkdrexler</p>
				</div>
				<div class="flex items-center gap-2">
					<GithubSolid class="h-8 aspect-square text-[#2094f1]" />
					<p class="text-sm">github.com/dKenez</p>
				</div>
				<!-- <div class="flex items-center gap-2">
					<DribbbleSolid class="h-8 aspect-square" />
					<p>k.k.drexler@gmail.com</p>
				</div> -->
			</div>
		</div>
	</div>
</div>
