<template>
  <div id="app" class="test" :style="applyTheme">
    <pre>theme: {{ theme }}</pre>
    <pre>applyTheme: {{ applyTheme }}</pre>
    <p>Primary color</p>
    <em>Secondary color</em>
  </div>
</template>

<script>
export default {
  name: "test"
};
</script>

<style scoped>
p {
  color: var(--primaryColor, blue);
}

em {
  color: var(--secondaryColor, red);
}
</style>