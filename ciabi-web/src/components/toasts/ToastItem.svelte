<script>
    let { content } = $props();
</script>

<div class="toast">
    {content}
</div>

<style>
    .toast {
        background-color: var(--bg-color); 
        padding: 8px 30px;
        box-shadow: var(--toast-shadow);
        border-radius: 0.5rem;
        width: fit-content;
        height: fit-content;
        transition: var(--actions-and-stuff-ahh-transition)
    }
</style>
