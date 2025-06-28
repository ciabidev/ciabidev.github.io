<div class="logo" aria-label="ciabi.dev logo">
	<img class="ciabi-logo" src="/logo/logo-white-outline.png" alt="ciabi-logo" />
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: safe center;
		color: var(--navbar-highlight);
		font-size: 13px;
		padding: 13px 3px;
		opacity: 1;
		min-width: fit-content;
		min-height: 40px;
		text-decoration: none;
	}

	.ciabi-logo {
		width: 60px;
		object-fit: cover;
		height: 60px;
		 user-select: none;
  -webkit-user-select: none;  /* Safari / iOS */
  -ms-user-select: none; 
	}
	@media screen and (max-width: 600px) {
		.logo {
			display: none;
		}
	}
</style>
