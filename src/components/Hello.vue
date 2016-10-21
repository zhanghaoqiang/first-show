<template>
  <div class="hello">
    <h1>{{ msg |uppercase}}</h1>
    <a v-link="{path:'/login'}">登录</a>
    <a v-link="{path:'/home2'}">注册</a>
    
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
