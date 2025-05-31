<script>
	let { Icon, href } = $props();
</script>

<a class="contact" {href} target="_blank">
	<Icon />
</a>

<style>
	.contact {
		display: flex;
		justify-content: center;
		align-items: center;
		vertical-align: center;
		flex-direction: row;
		padding: 7px;
		border-radius: 8px;
		text-decoration: none;
		color: var(--text-color);
		box-shadow: var(--shadow-main);
	}

	.contact:hover {
		background: var(--hover-bg);
	}
</style>
