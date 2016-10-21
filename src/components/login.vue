<template>
  <div class="login">
    <p>用户名：<input type="text" v-model="username"><br><br>密码：<input type="password" v-model="password"></p>
    <button @click="login">确认</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:"",
      password:"",
      info:""
    }
  },
  events:{
    "aaa":function(msg){
      //alert(msg)
    }
  },
  methods:{
    login:function(){
      //this.$dispatch("childev","child message");
      this.$http.get("static/aa.json").then(function(res){
        var user=res.body.user;
        var pass=res.body.pass;
        if(this.username==user && this.password==pass){
          this.$router.go("/home")
        }
      })
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
