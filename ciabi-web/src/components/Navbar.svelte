<script lang="ts">
  // @ts-ignore
  import InfoIcon from "~icons/basil/info-rect-outline"; /* using Unplugin icons we can load icons at meowbalt speeds! */
  // @ts-ignore
  import StarIcon from "~icons/basil/star-outline"; /* using Unplugin icons we can load icons at meowbalt speeds! */

  import NavTab from "./NavTab.svelte";

</script>

<div class="navbar-container">
  <nav class="navbar">
    <div class="logo" aria-label="ciabi.dev logo">
      <img class="ciabi-logo" src="/logo.png" alt="ciabi-logo" />
    </div>
    <nav class="navbar-tabs">
      <NavTab name={"about?"} Icon={InfoIcon} href={"/"} />
      <NavTab name={"me!"} Icon={StarIcon} href={"/wheatwhole"} />

    </nav>
  </nav>
</div>

<style>
  .navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    height: calc(var(--navbar-height));
    bottom: 0;
    width: 100%;
    z-index: 1005;
  }

  .navbar {
    height: 100%;
    width: fit-content;
    z-index: 100;
    order: 3;
    display: flex;
    overflow-x: auto;
    flex-direction: row;
    border-radius: 0rem;
    width: 100%;
    overflow-y: hidden;
    align-items: center;
    justify-content: center;
    background-color: var(--nav-bg);
  }

  .navbar-tabs {
    display: flex;
    padding: var(--navbar-inner-padding);
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    height: 100%;
    overflow-y: none;
    z-index: 1005;
    vertical-align: center;
    justify-content: space-evenly;
  }

  .navbar > * {
    z-index: 1505;
  }
  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: safe center;
    color: var(--navbar-highlight);
    font-size: 13px;
    padding: 13px 3px;
    opacity: 1;
    min-width: fit-content;
    min-height: 40px;
    text-decoration: none;
  }

  .ciabi-logo {
    border-radius: 20px;
    width: 60px;
    object-fit: cover;
    height: 60px;
  }
    /* cozy navbar */
    .navbar-container:before {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      height: 40px;
      width: 40px;
      border-bottom-left-radius: 50%;
      box-shadow: 0 20px 0 0 var(--nav-bg, #000000);
      z-index: 10;
    }

    .navbar-container:after {
      content: "";
      position: absolute;
      top: -40px;
      right: 0;
      height: 40px;
      width: 40px;
      border-bottom-right-radius: 50%;
      box-shadow: 0 20px 0 0 var(--nav-bg, #000000);
      z-index: 10;
    }

    @media screen and (max-width: 600px) {
      .navbar-container {
        height: var(--mobile-navbar-height);
      }
    }
  
    @media screen and (max-height: 400px) {
      .navbar-container {
        height: var(--mobile-navbar-height);
      }
    }
</style>
