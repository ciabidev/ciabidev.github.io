<script>
	import ProjectCard from '$components/ProjectCard.svelte';
	import ProjectCardMini from '$components/ProjectCardMini.svelte';
</script>

<div class="projects-page-wrapper">
	<main class="header">
		<h1>projects</h1>
		<p>all of our projects can be found here</p>
	</main>
	<div class="projects">
		<ProjectCard
			url="https://github.com/wheatwhole/Award-Winning-Game"
			urlshort="the repository"
			name="award winning game"
			img="/icons/awg.png"
			description="the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. "
			banner="/icons/awg.png"
		/>

		
	</div>
</div>

<style>
	.projects-page-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row; /* has to be row so we can horizontally center */
		justify-content: center;
		flex-wrap: wrap;
		min-height: max-content;
		height: 100%;
		gap: 20px;
		overscroll-behavior: none;
		padding: calc(var(--padding) + 15px);
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 20px;
	}

	.projects {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 15px;
		display: flex;
		max-width: 500px;
	}

	@media only screen and (max-height: 400px) {
		.projects-page-wrapper {
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			height: max-content;
		}
	}
</style>
