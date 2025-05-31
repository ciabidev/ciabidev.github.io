<script lang="ts">
  import type { LayoutData } from "./$types";

  import LoveNote from "$components/LoveNote.svelte";
  import Navbar from "$components/Navbar.svelte";
  let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="basket">
  <!-- acts as a second "body"-->
  <div class="loaf">
    <!-- main content of the page -->
    {@render children()}
  </div>

    <Navbar />
</div>

