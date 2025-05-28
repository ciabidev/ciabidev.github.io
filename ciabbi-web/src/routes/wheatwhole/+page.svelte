<script>
	import ProjectCard from '$components/ProjectCard.svelte';
	import Profile from '$components/Profile.svelte';
	import Tags from '$components/Tags.svelte';
	// @ts-ignore
	import StarIcon from '~icons/basil/star-outline'; /* using Unplugin icons we can load icons at meowbalt speeds! */
	let tags = [
		'Modded Minecraft (java)',
		'Avatar: The Last Airbender',
		'Arcane Odyssey by vetexgames',
		'Elemental Warzone',
		'Rush Hour',
		'Grace (game)',
		'Lilo and Stitch',
		'One Piece',
		'Naruto',
		'Dragon Ball',
		'Mario'
	];
</script>

<!--bottom navbar-->
<!--acts as a "body" excluding the navbar -->
<div class="body-content">
	<!-- wrapper of the current view -->
	<main class="wheatwhole">
		<div class="main-profile">
			<!--me card-->
			<Profile name={'wheatwhole'} />
			<section class="short-bio" id="short-bio">
				<p class="giantahhparagraph">
					hi. i'm a ghanaian programmer and game developer who has every single idea what they are
					doing. i also like messing around in blender. ✝️
				</p>
			</section>
		</div>
		<div class="likes-wrapper">
			<h3 class="tiny-title">likes</h3>
			<Tags names={tags} colorPreset={'likesPreset'} />
		</div>
	</main>
	<div class="projects">
		<ProjectCard
			href="https://wheatwhole.github.io/packgod"
			url="wheatwhole.github.io/packgod"
			projectName="packgod"
			img="/icons/Packgod.webp"
			description="we call it the packgod humbler 3000.  a scary accurate packgod roast generator made using pollinations.ai. will humble any fools in the vicinity.  practice caution when using. "
		/>
		<ProjectCard
			href="https://github.com/wheatwhole/Award-Winning-Game"
			url="the repository"
			projectName="award winning game"
			img="/icons/Packgod.webp"
			description="in this pixel platformer adventure, the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. cast out of your hometown for your passion for chemistry, you take up your tools and set off on a daring quest to undo the damage. the fate of the world rests in the hands of the one it once rejected. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. please excuse the unclear commit messages and 'monobranch' type management. "
		/>
	</div>
</div>

<style>
	.body-content {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		overflow-y: none;
		padding: 15px;
		gap: 20px;
	}

	.wheatwhole {
		display: flex;
		flex-direction: column;
		justify-content: safe center;
		align-items: center;
		max-width: 500px;
		width: 100%;
		height: fit-content;
		gap: 20px;
		overflow-y: none;
		transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
	}

	.likes-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.9375rem;
		margin-bottom: 1.25rem;
		z-index: 0;
	}

	.projects {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 15px;
		display: inline-flex;
		max-width: 500px;
	}

	@media only screen and (max-width: 800px) {
		.body-content {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}

		.projects {
			width: max-content;
		}
	}
</style>
