<script>
	import { packgod } from '$lib/shared.svelte.js'
</script>

<div class="output-wrapper">
	<div class="output" 
	>{packgod.outputText}</div>
</div>

<style>
	.output-wrapper {
		max-width: var(--width);
		max-height: var(--height);
		width: 100%;
		height: 100%;
		box-shadow: var(--shadow-main);
    	border-radius: var(--border-radius);
	}

	.output {
		font-size: 16px;
		border: none;
		overflow: auto;
		width: 100%;
		height: 100%;
		background: none;
		outline: none;
		resize: none;
		padding: 30px;
	}
</style>
