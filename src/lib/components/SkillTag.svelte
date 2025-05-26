<script lang="ts">
	import type { IconifyIcon } from '@iconify/types';
	import Icon from '@iconify/svelte';

	export let title: string;
	export let icon: string | IconifyIcon;
</script>

<div
	class="flex items-center gap-2 border-zinc-100 border-2 py-1 px-2 h-fit justify-center rounded-full"
>
	<Icon {icon} />
	<p class="text-xs">{title}</p>
</div>
