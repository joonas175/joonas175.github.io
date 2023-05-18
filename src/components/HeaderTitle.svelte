<script lang="ts">
  export let title: string;
  export let commandParts: string[] = [];
  let command = ''

  const addCommands = (str: string | undefined, remaining: string[]) => {
    if (str) {

      setTimeout(() => {
        command += str.at(0);
        addCommands(str.slice(1, str.length), remaining);
      }, 50)
    } else if (remaining.length > 0) {
      if (typeof str === 'string') {
        command += " ";
      }
      setTimeout(() => {
        addCommands(remaining.shift(), remaining);
      }, 250);
    }
  }

  addCommands(undefined, commandParts);

  let pointerVisible = true;

  setInterval(() => {
    pointerVisible = !pointerVisible;
  }, 500);


</script>
<h1 class:long="{ commandParts.join("").length > 7 }">
  { title }&gt; { command }{ pointerVisible ? '|' : '' }
</h1>

<style lang="scss">
h1 {
  line-height: 1em;
  font-size: 2em;
  font-family: var(--header-font);
  color: var(--title-text-color);
  margin: 0 0 10px 0;
  @media screen and (max-width: 430px) {
    &.long {
      min-height: 2em;
    }
  }
}
</style>