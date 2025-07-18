<script>
	import Markdown from '$components/Markdown.svelte';
    import UrlButton from '$components/inputs-and-buttons/URLButton.svelte';
    const source = `
# What is AO Challenger?

AO Challenger is an Arcane Odyssey Discord bot that allows you to **ping globally for PvP or find a 1v1**. [ALL of the code is fully free and open source](https://github.com/ciabidev/AO-Challenger).

## How to Use

### For Users

\`/help\` — get a list of commands

\`/findpvp\` — join the queue for a 1v1  

\`/globalpvp ping\` — ping an entire region for PvP

\`/invite\` — invite the bot to your server

\`/upvote\` — upvote bot on top.gg to support it for FREE 💖 

### For Admins

To setup the bot for your server, simply use \`/setup\`  
\`/help\` — get a list of commands 

\`/globalpvp settings\` — manage the globalpvp settings  

\`/globalpvp muteuser\` — block a user from pinging your server  

\`/globalpvp unmuteuser\` — unblock a user from pinging your server  

\`/globalpvp setchannel\` — set the channel where global PvP pings will be sent  

\`/globalpvp setregionalroles\` — assign roles to regions to be pinged

\`/globalpvp sethostrole\` — choose the role that's allowed to use /globalpvp ping (@everyone by default)

\`/invite\` — invite the bot to your server

\`/upvote\` — upvote bot on top.gg to support it for FREE 💖

## Terms and Privacy

We do not store any data about you or your pings. Your data is your business and your business only (this is the statement on all of our projects).  
We are not responsible for rules broken using this bot.  
This bot is not affiliated with Arcane Odyssey or any of its subsidiaries.

## Why can't I add the bot / Why is it so slow?

Two possible reasons:
1. I accidentally made it private  
2. For the bot to scale larger and be in more servers, I need to verify my identity. Unfortunately, I'm not old enough to verify my identity on Discord (18+)
`;

</script>

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