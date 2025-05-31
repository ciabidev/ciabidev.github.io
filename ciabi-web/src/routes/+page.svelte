<script>
	import LoveNote from '$components/LoveNote.svelte';
</script>

<div class="welcome-container">
	<div class="welcome">
		<h1>👋 welcome to the bakery</h1>
		<br />
		<section id="what">
			<h3>what is the bakery?</h3>
			<p class="giantahhparagraph">
				an open-source bakery featuring all of your favorite bakes and toppings (projects and
				utilities), free for anyone to use. we are heavily inspired by imput and their projects, you
				can check them out <a href="https://imput.net" target="_blank">here</a>
			</p>
		</section>
    <section id="why">
		<h3>why ciabi</h3>
		<p>ciabatta</p>
    </section>
    <section id="whatprojects??">
		<h3>what projects</h3>
		<p>as of now, there are no projects but im working on it every day! <a target="_blank" href="https://github.com/ciabi/ciabi.github.io
">our repositor</a></p>
    </section>
		<p class="giantahhparagraph"><b>pick any menu item below ⏬</b></p>
	</div>
</div>

<style>
	.welcome-container {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: safe center;
		align-items: center;
		padding: calc(var(--padding) + 15px);
		overflow-y: auto;
	}
	.welcome {
		max-width: 600px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	@media screen and (max-height: 600px) {
		.welcome-container {
			height: max-content;
		}
	}
</style>
