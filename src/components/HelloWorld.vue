<template>
  <div class="hello">
    <pre>theme: {{ theme }}</pre>
    <pre>applyTheme: {{ applyTheme }}</pre>
    <p>Primary color</p>
    <em>Secondary color</em>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: var(--primaryColor, blue);
}

em {
  color: var(--secondaryColor, red);
}
</style>
