<script>
  let { url, href, projectName, description, img } = $props();
  // @ts-ignore
  import LinkIcon from '~icons/tabler/external-link'; 
</script>

<div class="card">
  <a class="project-button" target="_blank" {href}>
    <img src={img} alt={projectName} class="project-icon icon" />
    <div class="project-info">
      <div class="project-name">{projectName}</div>
      <span class="project-url sub-text" data-sveltekit-replacestate><LinkIcon style="min-width: 1rem; min-height: 1rem; flex-shrink: 0;" class="icon" />{url}</span>
    </div>
  </a>
  <div class="sub-text description">
    {description}
  </div>
</div>

<style>
/* i know all these random flex styles are a bandaid solution but for some reason items just wouldn't stay in the flexbox so i had to use this */

  .card {
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-main-border);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
    padding: 12px 22px 22px 12px;
    align-items: flex-start;
    flex-shrink: 0;
    transition: 0.3s var(--actions-and-stuff-ahh-transition);
      max-width: 500px;

  }

  .project-button {
    user-select: none;
    flex-shrink: 0;
    display: flex;
    min-width: fit-content;
    flex-basis: content;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    position: relative;
    border-radius: var(--border-radius);
    padding: 7px 9px;
    width: max-content;

  }

  .project-button:hover {
    background: var(--hover-bg);
    	filter: brightness(1.1);

  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
  }

  .project-name {
    display: flex;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .project-url {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9rem;
    gap: 5px;
  }

  .project-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 12px;
  }

  .description {
    padding-left: 10px;
    font-size: 0.9rem;
  }



  /* @media only screen and (max-width: 600px) {
     .card {
      width: 100%;
      padding: 14px 18px 18px 6px;
  }
  } */

</style>
