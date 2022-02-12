<script>
  export let width = ''
  export let borderWidth = '0px'
  export let borderColor = 'transparent'


  $: size = width ? CSSStyleValue.parse('width', width) : null

  $: style = '' +
    (size ? `width:${size.value}${size.unit}` : '') +
    `padding-bottom:85%;`

  $: styleBorder = '' +
    `background-color:${borderColor};`

  $: styleContent = '' +
    `top:${borderWidth};` +
    `bottom:${borderWidth};` +
    `left:${borderWidth};` +
    `right:${borderWidth};`

</script>

<div
  class='hexagon'
  style={style}
>
  <div
    on:mouseenter
    on:mouseleave
    on:click
    class='layer layer-border'
    style={styleBorder}
  >
    <div
      class='layer layer-content'
      style={styleContent}
    >
      <slot />
    </div>
  </div>
</div>

<style>
  .hexagon {
    display: flex;
    position: relative;
    user-select: none;
  }
  .layer {
    position: absolute;
	  top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    transition-property: top, bottom, left, right;
    transition-duration: 0.25s;
    transition-timing-function: ease-out;
  }
  .layer-border {
    display: inline-block;
    height: calc(100% * 4 / 3);
    box-sizing: border-box;
    transition: background-color 0.35s ease-out;
  }
  .layer-content {
    overflow: hidden;
  }
</style>