<template lang="pug">
  #app
    //img(src="./assets/logo.png")


    //Directivas
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else="showValue") {{ 'Algo Más' }}

    ul
      li(:key="item" v-for="item in items") {{ item }}

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
      value: 'Hello',
      showValue: false,
      items: [1, 2, 3, 4]

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
