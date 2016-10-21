<template>
  <div class="hello">
    <a v-link="{path:'/home/one1'}">aa</a>
    <a v-link="{path:'/home/two2'}">bb</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
