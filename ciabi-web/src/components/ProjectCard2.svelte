<script>
	let { url, href, projectName, description, img } = $props();
	// @ts-ignore
	import LinkIcon from '~icons/tabler/external-link';
</script>

<div class="card">
	<!--<a class="project-button" target="_blank" {href}>
    <img src={img} alt={projectName} class="project-icon icon" />
    <div class="project-info">
      <div class="project-name">{projectName}</div>
      <span class="project-url sub-text" data-sveltekit-replacestate><LinkIcon style="min-width: 1rem; min-height: 1rem; flex-shrink: 0;" class="icon" />{url}</span>
    </div>
  </a>
  <div class="sub-text description">
    {description}
  </div> -->
	<div class="project-header">
		<h2 class="project-name">{projectName}</h2>
		<div class="sub-text description">{description}</div>
		
	</div>
</div>

<style>
	/* i know all these random flex styles are a bandaid solution but for some reason items just wouldn't stay in the flexbox so i had to use this */

	.card {
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: relative;
		padding: 12px 22px 22px 12px;
		align-items: flex-start;
		flex-shrink: 0;
		min-height: 250px;
		transition: 0.3s var(--actions-and-stuff-ahh-transition);
		max-width: 500px;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: var(--text-color);
		position: relative;
		gap: 0.5rem;
	}

	.project-name {
		display: flex;
		font-weight: 600;
	}

	.description {
		font-size: 1rem;
	}

	/* @media only screen and (max-width: 600px) {
     .card {
      width: 100%;
      padding: 14px 18px 18px 6px;
  }
  } */
</style>
