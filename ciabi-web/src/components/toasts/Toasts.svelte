<script>
	import ToastItem from "./ToastItem.svelte";
	import { toasts } from '$lib/shared.svelte.js'
</script>

<div class="toaster">
    {#each toasts as toastItem}
    <ToastItem content={toastItem.content} />
    {/each}
</div>

<style>
    .toaster {
        padding-top: 15px;
        gap: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        height: fit-content;
    }
</style>