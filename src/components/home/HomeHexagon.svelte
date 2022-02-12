<!-- SCRIPTS -->

<script>
  import Hexagon from 'components/common/Hexagon.svelte'

  $: borderColor = '#5B4C00'
  $: borderWidth = '1px'

  function handleMouseEnter() {
    borderColor = 'white'
    borderWidth = '2px'
  }
  function handleMouseLeave() {
    borderColor = '#5B4C00'
    borderWidth = '1px'
  }
</script>

<!-- RENDERING -->

<Hexagon
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  borderColor={borderColor}
  borderWidth={borderWidth}
>
  <div class='content'>
    <slot />
  </div>
</Hexagon>

<!-- STYLE -->

<style>
  .content {
    height: 100%;
    width: 100%;
    background: #FDDD62;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 40px;
    box-sizing: border-box;
    padding-bottom:2%;
    transition: background 0.35s ease-in-out, color 0.15s ease-in;
    cursor: pointer;
  }
  .content:hover {
    background: #6BA3C2;
    color: white;
  }
  /*
  .content:after {
    content: '';
    position: absolute;
    top: -30%;
    right: -50%;
    width: 50%;
    height: 200%;
    opacity: 0;
    transform: rotate(0deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient( to right, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.13) 77%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.0) 100%);
    transition: opacity 0s, right 0s;
  }
  .content:hover:after {
    opacity: 1;
    right: 150%;
    transition: opacity 1s ease-out, right 1s ease-out;
  }
  */

</style>