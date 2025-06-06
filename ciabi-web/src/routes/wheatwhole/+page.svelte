<script>
	import ProjectCard from '$components/ProjectCard.svelte';
	import Profile from '$components/Profile.svelte';
	import Tags from '$components/Tags.svelte';
	import Contact from '$components/Contact.svelte';
	// @ts-ignore
	import StarIcon from '~icons/basil/star-outline';
	// @ts-ignore
	import RobloxIcon from '~icons/simple-icons/roblox'; /* using Unplugin icons we can load icons at meowbalt speeds! */
	// @ts-ignore
	import DiscordIcon from '~icons/pajamas/discord';	
	// @ts-ignore
	import GithubIcon from '~icons/tabler/brand-github-filled';

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
<div class="wheatwhole-page-wrapper">
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
		<div class="contact-wrapper">
			<Contact href="https://www.roblox.com/users/2342724391/profile" Icon={RobloxIcon} />
			<Contact href="https://discord.com/users/968622168302833735" Icon={DiscordIcon} />
			<Contact href="https://github.com/wheatwhole" Icon={GithubIcon} />
			
		</div>
		<div class="likes-wrapper">
			<h3 class="tiny-title">likes</h3>
			<Tags names={tags} colorPreset={'likesPreset'} />
		</div>
	</main>
	<div class="projects">
		<h3 class="tiny title">my games</h3>
		<ProjectCard
			href="https://github.com/wheatwhole/Award-Winning-Game"
			urlshort="the repository"
			name="award winning game"
			img="/icons/awg.png"
			description="in this pixel platformer adventure, the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. please excuse the unclear commit messages and 'monobranch' type management. "
		/>
	</div>
</div>

<style>
	.wheatwhole-page-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: safe center;
		flex-wrap: wrap;
		min-height: max-content;
		align-items: center;
		height: 100%;
		overscroll-behavior: none;
		padding: calc(var(--padding) + 15px);
		gap: 20px;
	}

	.wheatwhole {
		display: flex;
		overscroll-behavior: none;
		flex-direction: column;
		justify-content: safe center;
		align-items: center;
		max-width: 500px;
		width: 100%;
		position: relative;
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
		width: 100%;
		z-index: 0;
	}

	.projects {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 15px;
		display: flex;
		max-width: 500px;
	}

	.contact-wrapper {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: row;
		gap: 7px;
		justify-content: start;
		vertical-align: center;
		align-items: center;
	}

	@media only screen and (max-height: 400px) {
		.wheatwhole-page-wrapper {
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			height: max-content;
		}
	}
</style>
