<script lang="ts">
import feather from 'feather-icons';
export let author: string;
let formattedAuthor = author
  .replaceAll('ä', 'a')
  .replaceAll('ö', 'o')
  .replaceAll('å', 'a')
  .replaceAll(' ', '.')
  .toLocaleLowerCase();
</script>

<div id="terminal-container">
  <div id="top-bar-container">
    <div class="bar">guest@portfolio: /home/{formattedAuthor}</div>
    <div class="close-button">
      {@html feather.icons.x.toSvg({
        width: '25px',
        "stroke-width": '3px',
        height: '25px'
      }) }
    </div>
  </div>
  <slot></slot>
</div>

<style lang="scss">
#terminal-container {
  min-width: min(var(--content-max-width), 90%);
  max-width: var(--content-max-width);
  margin: 5px 20px;
  border: 2px solid rgba(0, 255, 34, 0.534);
}

#top-bar-container {
  display: flex;
  flex-direction: row;
  margin: 0;

  background: rgb(0,255,38);
  background: linear-gradient(90deg, rgb(0, 196, 29) 24%, rgb(46, 146, 0) 100%);

  border: 1px solid rgb(0, 80, 11);

  .bar {
    flex-grow: 1;
    color: var(--default-text-color);
    font-size: small;
    display: flex;
    align-items: center;
    padding-left: 5px;
    font-family: monospace;
  }

  .close-button {
    height: 25px;
    width: 25px;
    color: var(--default-text-color);
  }
}
</style>