<script>
	import CVPhoto from '$lib/assets/CVPhotoSMOL.webp';
</script>

<div class="flex justify-between items-center">
	<div class="border-slate-600 aspect-square rounded-full border-2 flex p-1">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CVPhoto} class="bg-slate-400 aspect-square rounded-full h-[152px]" alt="CV photo" />
	</div>
	<div class="text-right flex flex-col">
		<p class="text-2xl">Kristof <b>Drexler</b></p>
		<p class="text-lg">MSc. Autonomous Systems</p>
		<a class="text-sm font-thin" href="mailto:k.k.drexler@gmail.com">k.k.drexler@gmail.com</a>
		<a class="text-sm font-thin" href="tel:+4591101679">+45 31 49 36 71</a>
	</div>
</div>
