<template>
  <div id="app">
    <navBar></navBar>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import navBar from './component/navBar.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{navBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 860px;height: 575px;background-color: white;margin: 16px auto;
  overflow: hidden;
}


</style>
