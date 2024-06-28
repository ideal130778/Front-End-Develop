<template>
  <div id="app">
    <singer-main></singer-main>
    <singer-footer></singer-footer>
  </div>
</template>

<script>
import SingerFooter from './components/SingerFooter.vue'
import SingerMain from './components/SingerMain.vue'

export default {
  name: 'App',
  components: {
    SingerMain,
    SingerFooter,
  }
}
</script>

<style>
#app {
    margin: 0 auto;
}
</style>
