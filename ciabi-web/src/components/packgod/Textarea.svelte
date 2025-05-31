<script>
	let isFocused = $state(false);
	import { packgod } from '$lib/shared.svelte.js'
	let { placeholder } = $props()
</script>

<div class:focused={isFocused} class="textarea-wrapper">
	<textarea bind:value={packgod.inputText} class="input" oninput={() => (isFocused = true)} onfocus={() => (isFocused = true)}  onblur={() => (isFocused = false)}  placeholder={placeholder}
	></textarea>
</div>

<style>
	.textarea-wrapper {
		max-width: var(--width);
		max-height: var(--height);
		width: 100%;
		height: 100%;
		box-shadow: var(--shadow-main);
    	border-radius: var(--border-radius);
	}

	.input {
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

	.textarea-wrapper.focused {
		box-shadow: var(--shadow-deep);
	}
</style>
