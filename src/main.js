import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import ChildComponent from '@/childComponent.vue'

// Routes
import routes from '@/routes'

// Plugins
import EventBus from '@/plugins/event-base'

Vue.use(VueRouter)
Vue.use(EventBus)

Vue.component('child', ChildComponent)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
