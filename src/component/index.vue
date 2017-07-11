<template>
  <div id="app">
    <navBar></navBar>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import navBar from './navBar.vue'

export default {
  data () {
    return {
    }
  },
  components:{navBar},
  mounted () {
    this.$socket.emit('join', sessionStorage.userId);
  }
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
