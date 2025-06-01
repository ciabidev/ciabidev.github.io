<script>
	let isFocused = $state(false);
	let { placeholder, value = $bindable(''), Icon } = $props();
</script>

<div class="input-wrapper" class:focused={isFocused} >
	
	<div class="icon">
		<Icon />
	</div> 
	<input
		bind:value={value}
		class="input"
		oninput={() => (isFocused = true)}
		onfocus={() => (isFocused = true)}
		onblur={() => (isFocused = false)}
		{placeholder}
	/>
</div>

<style>
	.input-wrapper {
		box-shadow: var(--shadow-main);
		border-radius: var(--border-radius);
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 5px;
		padding: 13px 15px;
		align-items: center;
		transition: all 300ms cubic-bezier(1, 0, 0, 1);
	}

	.input {
		font-size: 14px;
		width: 100%;
		border: none;
		overflow: auto;
		background: none;
		outline: none;
		resize: none;
	}

	.input-wrapper.focused {
		box-shadow: var(--shadow-deep);
	}
	
	.icon {
		opacity: 0.5;
		transition: all 300ms cubic-bezier(1, 0, 0, 1);
	}

	.input-wrapper.focused > .icon{
		opacity: 1;
	}

</style>
