<script lang="ts">
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";
  import { onMount } from 'svelte';

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


<style src="C:\Users\LEGEND-PC\Documents\GitHub\ciabi.github.io\ciabi-web\static\shared.css"></style>
