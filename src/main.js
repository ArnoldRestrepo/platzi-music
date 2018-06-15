// Libreries
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import ChildComponent from '@/childComponent.vue'
// Routes
import routes from '@/routes'
// Plugins
import EventBus from '@/plugins/event-base'
// Filters
import msToMm from '@/filters/ms-to-mm'
// Directives
import Blur from '@/directives/blur'

// Use
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(Blur)

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
