<script>
	import Markdown from '$components/Markdown.svelte';
    import UrlButton from '$components/inputs-and-buttons/URLButton.svelte';

    const source = `
# What is AO Challenger?

AO Challenger is an Arcane Odyssey Discord bot that allows you to **ping globally for PvP or find a 1v1**. [ALL of the code is fully free and open source](https://github.com/ciabidev/AO-Challenger).

## How to Use

### For Users
\`/invite\` — invite the bot to your server

\`/help\` — get a list of commands

\`/findpvp\` — find a 1v1

\`/globalpvp ping\` — ping an entire region for PvP

\`/upvote\` — upvote bot on top.gg to support it for FREE 💖 

### For Admins

To setup the bot for your server, simply use \`/setup\`  
\`/help\` — get a list of commands 

\`/globalpvp settings\` — view the current Global PVP settings and Enable/Disable.

\`/globalpvp blockuser\` — block a user from all Challenger-related interactions with your server. Can block users from other servers as well.

\`/globalpvp unblockuser\` — unblock a user from your server

\`/globalpvp listblocked\` — list all blocked users

\`/globalpvp assignregions\` — assign regions to channels and ping roles

\`/globalpvp addhostrole\` — add a role that can host pvp (everyone by default)

\`/globalpvp clearhostroles\` — remove all host roles

\`/invite\` — invite the bot to your server

\`/upvote\` — upvote bot on top.gg to support it for FREE 💖

## Terms and Privacy

[Terms, Ethics, Privacy](https://github.com/ciabidev/AO-Challenger/blob/main/TERMS.md)

If you find a player abusing the bot or breaking Discord TOS, please report them ASAP:

[Ban Appeals and Reports](https://tally.so/forms/3X6yqV/share)

## Support the bot
If you like the bot and want to support it for *free*, you can upvote it via \`/upvote\`.

## Why can't I add the bot / Why is it so slow?

Four possible reasons:
1. I accidentally made it private  
2. For the bot to scale larger and be in more servers, I need to verify my identity. Unfortunately, I'm not old enough to verify my identity on Discord (18+)
3. The Render free plan for the bot has expired
4. The bot is being rate-limited. This means someone is spamming the bot, or there's just a lot of activity.

In case any of these have happened, message @wheatwhole_ on Discord IMMEDIATELY.
`;

</script>

<!-- Page metadata for discord embed. This is a guide to AO Challenger and a list of all commands. The title is About AO Challenger-->
    <svelte:head>
        <title>AO Challenger</title>
        <meta name="title" content="About/Guide to AO Challenger">
        <meta name="description" content="Terms, about and a list of commands">
        <meta name="keywords" content="arcane odyssey, arcane odyssey bot, arcane odyssey discord bot, ao discord bot, ping, pvp, 1v1, find a 1v1, global pvp, global ping, discord bot, discord bot, arcane odyssey bot">
        <meta name="author" content="wheatwhole">
    </svelte:head>

<div class="page-wrapper">
    <div class="main">
        <Markdown source={source} />
        <div class="links">
            <a href="https://ko-fi.com/wheatwhole" target="_blank">
                <img src="/support_me_on_kofi.png" alt = "support me on kofi" width="100rem" >
            </a>
            <UrlButton name="contact and projects" url="https://wheatwhole.github.io/" img="/wheatwhole.webp" urlshort = "my profile" />
            <UrlButton name = "the code" url = "https://github.com/ciabidev/AO-Challenger" urlshort = "github.com/ciabidev/AO-Challenger" />
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