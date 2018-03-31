import Vue from 'vue'
import Router from './router/router'
import Header from './components/header.vue'

new Vue({
  router: Router,
  el: '#task',
  components: {
    'navbar': Header,
  }
})