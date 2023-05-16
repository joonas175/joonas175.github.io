<script lang="ts">
  export let title: string;
  export let page: string | undefined = '';

  let pointerVisible = true;

  setInterval(() => {
    pointerVisible = !pointerVisible;
  }, 500);


</script>
<h1>
  { title }&gt; { page } { pointerVisible ? '|' : '' }
</h1>

<style lang="scss">
h1 {
  font-family: var(--header-font);
  margin: 5px;
}
</style>