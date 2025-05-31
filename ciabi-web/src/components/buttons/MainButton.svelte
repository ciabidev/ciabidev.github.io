<script>
	let { Icon, content, href } = $props();
</script>

<button class="button">
	<Icon class="icon" style="flex-shrink: 0; font-size: 20px" />
	{content}
</button>

<style>
	.button {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: 5px;
		justify-content: center;
		padding: 8px 18px;
		border-radius: var(--border-radius);
		border: none;
		margin: 0;
		width: auto;
		overflow: visible;
		color: inherit;
		font: inherit;
		line-height: normal;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
		-webkit-appearance: none;
		appearance: none;
		cursor: pointer;
		/* background: var(--color-allgood); */
		box-shadow: var(--shadow-button);
		background: var(--button-bg);
	}

	@media not all and (hover: none) {
		.button:hover {
			/* background: var(--button-bg-inverted);
			color: var(--button-color-inverted); */
			background: var(--button-bg-hover)
		}
	}
</style>
