<script>
  import LoveNote from "$components/LoveNote.svelte";
</script>

<div class="welcome-container">
<div class="welcome">
  <h1>👋 welcome to the bakery</h1>
  <br>
  <h3>what is the bakery?</h3>
  <p class="giantahhparagraph">
    an open-source bakery featuring all of your favorite bakes and toppings (projects and utilities), free
    for anyone to use. we are heavily inspired by imput and their projects, you can check them out <a href="https://imput.net">here</a>
    <br><br>
    as of now, there are no projects but im working on it every day!
  </p>
  <p class="giantahhparagraph"><b>pick any menu item below ⏬</b></p>
</div>
</div>
<LoveNote />

<style>
  .welcome-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: safe center;
    align-items: center;
  }
  .welcome {
    max-width: 600px;
  }
</style>
