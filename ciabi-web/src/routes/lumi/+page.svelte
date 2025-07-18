<script>
	import UrlButton from '$components/inputs-and-buttons/URLButton.svelte';
	import Markdown from '$components/Markdown.svelte';
    const source = `# welcome to lumi
## what is lumi
made by wheatwhole

lumi is a simple discord bot that allows servers to track the online/offline status of roblox players. it cannot track the specific game a roblox player is playing, and renown and clan for each player must be set manually
Lumi is currently private since I made it for a clan, though it's fully ready for public use if needed

## terms and privacy
lumi completely complies with roblox TOS. lumi uses Roblox's public APIs to fetch user data, and does not store any personal information about users. lumi is not affiliated with Roblox in any way.
lumi is not responsible for any actions taken by it's users

### for Arcane Odyssey Staff
Please contact me if you have any issues with the bot/want it taken down
### why lumi is 100% allowed for Arcane Odyssey clans

<img src="https://i.imgur.com/iMNMEBX.jpeg" alt="rulebook editor waffle has confirmed that rule 2.8 (the rule that disallowed witch-hunting) no longer exists with the ability to turn your joins off."/>

`;

</script>

<div class="page-wrapper">
    <div class="main">
            <Markdown source={source} />
            <p> if you find lumi useful, please consider supporting me by donating or checking out my projects. It adds new features and helps me keep the bot running. </p>

            <div class="links">
                <a href="https://ko-fi.com/wheatwhole" target="_blank">
                    <img src="/support_me_on_kofi.png" alt = "support me on kofi" width="100rem" >
                </a>
                <UrlButton name="contact and projects" url="https://wheatwhole.github.io/" img="/wheatwhole.webp" urlshort = "my profile" />
                <UrlButton name = "the code" url = "https://github.com/wheatwhole/lumi" urlshort = "github.com/wheatwhole/lumi" />
            </div>
    </div>
</div>

<style>
    .page-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row; /* has to be row so we can horizontally center */
        justify-content: center;
        flex-wrap: wrap;
        min-height: max-content;
        height: 100%;
        gap: 1.25rem;
        overscroll-behavior: none;
        padding: calc(var(--padding) + .9375rem);
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
    }

    a {
        text-decoration: none;
        width: fit-content;
        padding: 10px;
    }

    .main {
        max-width: 700px;
    }

    @media only screen and (max-height: 25rem) {
        .page-wrapper {
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: max-content;
        }
    }
</style>