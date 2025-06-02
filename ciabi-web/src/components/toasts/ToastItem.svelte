<script>
	let { content } = $props();
</script>

<div class="toast">
	{content}
</div>

<style>
	@keyframes toastdone {
  0%   {transform: scale(0)}
  25%   {transform: scale(0.9)}
  50%  {transform: scale(1.1)}
  100% {transform: scale(1.0)}
}
	.toast {
		background-color: var(--bg-color);
		padding: 8px 30px;
		box-shadow: var(--toast-shadow);
		border-radius: 0.5rem;
		width: fit-content;
		height: fit-content;
		transition: var(--actions-and-stuff-ahh-transition);
		transform: scale(0);
		animation: toastdone 300ms forwards;
	}
</style>
