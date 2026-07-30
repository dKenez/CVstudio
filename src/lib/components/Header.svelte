<script>
	import CVPhoto from '$lib/assets/CVPhotoSMOL.webp';
	import { LinkedinSolid, GithubSolid, DribbbleSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-between items-center">
	<div class="border-slate-600 aspect-square rounded-[20px] border flex p-1">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CVPhoto} class="bg-slate-400 aspect-square rounded-[16px] h-[152px]" alt="CV photo" />
	</div>
	<div class="text-right flex flex-col gap-0.5 ">
		<p class="text-2xl">Kristof <b>Drexler</b></p>
		<p class="text-lg">Machine Learning Engineer <span class="text-zinc-400"> | </span> MLOps</p>
		<p class="text-sm mt-1 text-zinc-500 font-light">Copenhagen, Denmark</p>
		<p class="text-sm text-zinc-500 font-light">
			<a href="mailto:k.k.drexler@gmail.com">k.k.drexler@gmail.com</a>
			<span class="text-zinc-400"> · </span>
			<a href="tel:+4531493671">+45 31 49 36 71</a>
		</p>
		<div class="text-sm text-zinc-500 font-light flex items-center justify-end gap-3">
			<span class="flex items-center gap-1.5">
				<LinkedinSolid class="w-4 h-4 text-slate-400" />
				<a href="https://www.linkedin.com/in/kkdrexler">/in/kkdrexler</a>
			</span>
			<span class="flex items-center gap-1.5">
				<GithubSolid class="w-4 h-4 text-slate-400" />
				<a href="https://www.github.com/dKenez">/dKenez</a>
			</span>
			<span class="flex items-center gap-1.5">
				<DribbbleSolid class="w-4 h-4 text-slate-400" />
				<a href="https://www.dkenez.dk">dkenez.dk</a>
			</span>
		</div>
	</div>
</div>
