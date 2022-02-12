<!-- SCRIPTS -->

<script>
  import Home from 'components/home/Home.svelte'
</script>

<!-- RENDERING -->

<div class='app'>
  <Home />
</div>

<!-- STYLE -->

<style>
  .app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;

    background: black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>