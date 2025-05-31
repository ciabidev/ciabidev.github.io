<script>
    import Textarea from "$components/packgod/Textarea.svelte";
    import Output from "./Output.svelte";
    import Package from '~icons/twemoji/package';
    import MainButton from "$components/buttons/MainButton.svelte";
</script>

<div class="omni-wrapper">
    <Textarea --width="40rem" --height="10rem" placeholder="describe your opponent" />
    <MainButton content="start" href="#" Icon={Package}/>
    <Output --width="40rem" --height="10rem"/>
</div>

<style>
    :root {
        width: initial;
        height: initial;
    }

    .omni-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		overscroll-behavior: none;
		gap: 10px;
    }
    
    @media screen and (max-width: 440px) {
        :global(.button) {
            min-width: 100%;
        }
    }
</style>