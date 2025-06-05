<script>
	import { toast } from 'react-hot-toast';

	import Input from '$components/inputs/Input.svelte';
	import Package from '~icons/twemoji/package';
	import Clipboard from '~icons/twemoji/clipboard';
	import Write from '~icons/basil/edit-alt-outline';

	import Result from '$components/packgod/Result.svelte';
	import MainButton from '$components/inputs/MainButton.svelte';

	import { generate } from '$lib/packgod/generation.js';
	import { writable } from 'svelte/store';
	import { packgod } from '$lib/shared.svelte.js';
	import { newToast, toasts } from '$lib/toasts/toasts.svelte.js'

	let copyButtonContent = $state('copy');

	async function generateRoast() {
		packgod.resultText = "nkow"
		packgod.status = 'generating...';
		packgod.resultText = await generate(packgod.inputText);
		packgod.status = 'start';
	}

	const copyRoast = () => {
		copy(packgod.resultText);
		newToast("hi","copied!");
		copyButtonContent = 'copied!';
		setTimeout(() => {
			copyButtonContent = 'copy';
		}, 3000);
	}
</script>

<div class="packgod-page-wrapper">
	<h1>packgod humbler 3000</h1>

	<div class="ze-machine">
		<section class="warning">
			<p>
				we call it the packgod humbler 3000. a scary accurate packgod roast generator made using
				pollinations.ai. will humble any fools in the vicinity. practice caution when using.
			</p>
			<br />
			<p>pretty barebones rn, expect a redesign soon.</p>
		</section>
		<Input placeholder="describe your opponent" bind:value={packgod.inputText} Icon={Write} />
		<div class="action-buttons">
			<MainButton content={packgod.status} href="#" Icon={Package} onclick={generateRoast} />
			{#if packgod.resultText}
				<MainButton content={copyButtonContent} href="#" Icon={Clipboard} onclick={copyRoast} />
			{/if}
		</div>
		<Result />
	</div>
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
		flex-direction: column;
		justify-content: safe center;
		align-items: center;
		overscroll-behavior: none;
		padding: calc(var(--padding) + 15px);
		min-height: max-content;
		gap: 20px;
	}

	.ze-machine {
		max-width: 640px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
	}
	:root {
		width: initial;
		height: initial;
	}

	.action-buttons {
		display: flex;
		gap: 10px;
		flex-direction: row;
		justify-content: space-around;
	}

	@media only screen and (max-width: 600px) {
		:global(.button) {
			flex-grow: 1;
		}

		.action-buttons {
			width: 100%;
		}
	}
</style>
