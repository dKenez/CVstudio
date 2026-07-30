<script>
	import CVPhoto from '$lib/assets/CVPhotoSMOL.webp';
</script>

<div class="flex justify-between items-center">
	<div class="border-slate-600 aspect-square rounded-full border-2 flex p-1">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CVPhoto} class="bg-slate-400 aspect-square rounded-full h-[152px]" alt="CV photo" />
	</div>
	<div class="text-right flex flex-col gap-0.5">
		<p class="text-2xl">Kristof <b>Drexler</b></p>
		<p class="text-lg">Machine Learning Engineer | MLOps</p>
		<p class="text-sm font-thin mt-1">
			<a href="mailto:k.k.drexler@gmail.com">k.k.drexler@gmail.com</a>
			<span class="text-zinc-400"> · </span>
			<a href="tel:+4531493671">+45 31 49 36 71</a>
			<span class="text-zinc-400"> · </span>
			<span>Copenhagen, Denmark</span>
		</p>
		<p class="text-sm font-thin">
			<a href="https://www.linkedin.com/in/kkdrexler">/in/kkdrexler</a>
			<span class="text-zinc-400"> · </span>
			<a href="https://www.github.com/dKenez">/dKenez</a>
			<span class="text-zinc-400"> · </span>
			<a href="https://www.dkenez.dk">www.dkenez.dk</a>
		</p>
	</div>
</div>
