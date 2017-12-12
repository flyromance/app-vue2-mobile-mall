// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  beforeCreate() {
    console.log(0, 'beforeCreate')
  },
  created() {
    // debugger
    console.log(0, 'created')
  },
  beforeMount() {
    // debugger
    console.log(0, 'beforeMount')
  },
  mounted() {
    // debugger
    console.log(0, 'mounted')
  }
})
