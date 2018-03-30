import Vue from 'vue'
import Router from './router'
import Header from './components/header.vue'

var app = new Vue({
  router: Router,
  el: '#task',
  components: {
    'navbar': Header,
  }
})