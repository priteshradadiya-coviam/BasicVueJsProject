import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
});

// Vue.directive('rainbow',{
//   bind: function(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//     'vnode keys: ' + Object.keys(vnode).join(', ')
//   }
// });

// Vue.directive('theme',{
//   bind(el,binding,vnode){
//     if(binding.value==='wide'){
//       el.style.maxWidth="1200px";
//     }
//     if(binding.args==='column'){
//       el.style.background = '#ddd';
//       el.style.padding = '20px';
//     }
//     'vnode keys: ' + Object.keys(vnode).join(', ') 

//   }
// });

// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// })

// Vue.filter('snippet',function(value){
//   return value.slice(0,80);
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
