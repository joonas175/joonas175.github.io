<script lang="ts">
  const goBack = () => {
    history.back();
  }
</script>
<div class="project-display-container">
  <a href={"#"} on:click|preventDefault={goBack}>Back</a>
  <div class="project-display-content">
    <slot></slot>
  </div>
  <a href={"#"} on:click|preventDefault={goBack}>Back</a>
</div>

<style lang="scss">
.project-display-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-display-content {
  width: 100%;
}
</style>