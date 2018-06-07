import Vue from 'vue'
import App from './App.vue'
import ChildComponent from './childComponent.vue'

Vue.component('child', ChildComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
