<template>
  <div id="helloVuex">
    <h2>{{ $store.state.counter }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  props: {

  }
}
</script>

<style scoped>

</style>