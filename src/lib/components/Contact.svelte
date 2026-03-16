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

		<div>
			<div class="flex justify-around">
				<div class="flex items-center gap-2">
					<EnvelopeSolid class="h-8 aspect-square text-[#2094f1]" />
					<a href="mailto:k.k.drexler@gmail.com" class="text-sm">k.k.drexler@gmail.com</a>
				</div>
				<div class="flex items-center gap-2">
					<PhoneSolid class="h-8 aspect-square text-[#2094f1]" />
					<a href="tel:+4531493671" class="text-sm">+45 31 49 36 71</a>
				</div>
			</div>
			<div class="flex justify-around">
				<div class="flex items-center gap-2">
					<LinkedinSolid class="h-8 aspect-square text-[#2094f1]" />
					<a href="https://www.linkedin.com/in/kkdrexler" class="text-sm">/in/kkdrexler</a>
				</div>
				<div class="flex items-center gap-2">
					<GithubSolid class="h-8 aspect-square text-[#2094f1]" />
					<a href="https://www.github.com/dKenez" class="text-sm">/dKenez</a>
				</div>
				<div class="flex items-center gap-2">
					<DribbbleSolid class="h-8 aspect-square text-[#2094f1]" />
					<a href="https://www.dkenez.dk" class="text-sm">www.dkenez.dk</a>
				</div>
			</div>
		</div>
	</div>
</div>
