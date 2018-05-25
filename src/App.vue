<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    Form
</template>

<script>
import Form from './components/Form.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Mundo desde Vue.js'
    }
  },
  components: {
    Form
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
