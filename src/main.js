import Vue from 'vue'
import App from '@/App.vue'
import ChildComponent from '@/childComponent.vue'

// Plugins
import EventBus from '@/plugins/event-base'

Vue.use(EventBus)

Vue.component('child', ChildComponent)

new Vue({
  el: '#app',
  render: h => h(App)
})
