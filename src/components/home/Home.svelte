<!-- SCRIPTS -->

<script>
  import HomeHexagon from 'components/home/HomeHexagon.svelte'
  import Hexagon from 'components/common/Hexagon.svelte'
</script>

<!-- RENDERING -->

<div
  class='home'
>
  <div class='row'>
    <div class='tile'>
        <HomeHexagon>
          <span style='padding-bottom:4px;'>a</span>
        </HomeHexagon>
    </div>
    <div class='tile'>
      <HomeHexagon>
      </HomeHexagon>
  </div>
  </div>
  <div class='row'>
    <div class='tile'>
      <HomeHexagon>
        <span>S</span>
      </HomeHexagon>
    </div>
    <div class='tile'>
      <Hexagon>
      </Hexagon>
    </div>
    <div class='tile'>
      <HomeHexagon>
      </HomeHexagon>
  </div>
  </div>
  <div class='row'>
    <div class='tile'>
      <HomeHexagon>
        <span>H</span>
      </HomeHexagon>
    </div>
    <div class='tile'>
      <HomeHexagon>
      </HomeHexagon>
    </div>
  </div>

</div>

<!-- STYLE -->

<style>
  .home {
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
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .tile {
    width: 20%;
  }
</style>