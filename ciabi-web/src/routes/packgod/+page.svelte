<script>
    import Textarea from "$components/packgod/Textarea.svelte";
    import Package from '~icons/twemoji/package';
    import MainButton from "$components/buttons/MainButton.svelte";
    import Omnibox from "$components/packgod/Ominbox.svelte";
</script>

<div class="packgod-page-wrapper">
    <Omnibox />
</div>

<style>
    :root {
        width: initial;
        height: initial;
    }

    .packgod-page-wrapper {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		overscroll-behavior: none;
		padding: var(--padding);
		gap: 20px;
    }
</style>