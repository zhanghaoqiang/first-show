import Vue from 'vue'
import App from './App'
//其实那啥..Vue和App就相当于变量名，可以随便起
var VueRouter=require("vue-router");
var VueResource=require("vue-resource");
/*var one=require("./one");
var two=require("./two");*/
var RouterConfig=require("./config");
Vue.use(VueRouter);//使用模块
Vue.use(VueResource)
var router=new VueRouter();


RouterConfig(router);

router.start(App,"#apps");
new Vue({
  el: 'body',
  components: { App }
})
