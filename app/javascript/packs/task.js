import Vue from 'vue'
import Header from './components/header.vue'

var app = new Vue({
  el: '#task',
  components: {
    'navbar': Header,
  }
})