<template>
  <div id="app">
    <find-main></find-main>
    <find-footer></find-footer>
  </div>
</template>

<script>
import FindFooter from './components/FindFooter.vue'
import FindMain from './components/FindMain.vue'

export default {
  name: 'App',
  components: {
    FindMain,
    FindFooter
  }
}
</script>

<style>
#app {
    margin: 0 auto;
}
</style>