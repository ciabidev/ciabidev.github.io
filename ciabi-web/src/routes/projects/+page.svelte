<script>
	import ProjectCard2 from '$components/ProjectCard2.svelte';
</script>

<div class="projects-page-wrapper">
	<div class="projects-page">
		<div class="header">
			<h1>projects</h1>
			<p class="sub-text">all of our projects can be found here</p>
		</div>
		<div class="projects-container">
			<div class="projects">
				<ProjectCard2
					url="https://github.com/wheatwhole/Award-Winning-Game"
					urlshort="the repository"
					projectName="award winning game"
					img="/icons/awg.png"
					description="in this pixel platformer adventure, the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. please excuse the unclear commit messages and 'monobranch' type management. "
					largeimg=""
					/>
			</div>
		</div>
	</div>
</div>

<style>
	.projects-page {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		gap: 1rem;
		padding: 15px;
		overflow-x: hidden;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 2rem;
		gap: 20px;
	}

	.projects {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		gap: var(--padding);
		max-width: 70%;
		justify-content: space-around;
	}
</style>
