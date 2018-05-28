<template lang="pug">
  #app
    //img(src="./assets/logo.png")


    //Directivas
    p(v-show="showValue") {{ value }}

    // Expresiones
    // -
      p {{ 1 + 1 }}
      p {{ 'Hola' + 'Mundo' }}
      p {{ person.name }}
      p {{ person.name.toUpperCase() }}
      p {{ JSON.stringify(person) }}
      p {{ !true ? 'true' : 'false' }}
    //


    //Form
</template>

<script>
import Form from './components/Form.vue'
export default {
  name: 'app',
  google: 'https://google.com',
  googleName: 'Google Es',
  data () {
    return {

      /* Directives */
      showValue: true

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
