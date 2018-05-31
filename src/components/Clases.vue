<template lang="pug">
  #app
    img(src="./assets/logo.png")

    //- Computed Properties
    input(v-model="name")
    button(v-on:click="format") format

    p {{ formatName }}


    //- Edad de Nacimiento
    //- label(for="nacimiento") Ingresa tu fecha de nacimiento
    //- input(type="date" v-model="date")

    p Tu nombre es: {{ name }}


    //- Data Binding
      input(v-model="name")
      p {{ name }}

      a(v-bind:href="url", target="_blank") link

    //- Directivas
      p(v-show="showValue") {{ value }}
      p(v-if="showValue") {{ value }}
      p(v-else="showValue") {{ 'Algo Más' }}

      ul
      li(:key="item" v-for="item in items") {{ item }}

    //- Expresiones
      p {{ 1 + 1 }}
      p {{ 'Hola' + 'Mundo' }}
      p {{ person.name }}
      p {{ person.name.toUpperCase() }}
      p {{ JSON.stringify(person) }}
      p {{ !true ? 'true' : 'false' }}

</template>

<script>
export default {
  name: 'clases',
  data () {
    return {
      name: '',
      formatName: '',
      date: new Date().toISOString().slice(0, 10)

      // Data Binding
      // name: '',
      // url: 'https://github.com',

      /* Directives */
      // value: 'Hello',
      // showValue: false,
      // items: [1, 2, 3, 4]

      // Computed Properties
      // name: '',
      // lastName: ''
    }
  },
  computed: {
    fullName () {
      console.log('Hello')
      return `${this.name} ${this.lastName}`
      // return this.name + ' ' + this.lastName
    },
    age () {
      let today = new Date().toISOString()
      let month = parseInt(today.slice(5, 7))
      let years = parseInt(today.slice(0, 4) - parseInt(this.date.slice(0, 4)))
      let birth = month < parseInt(this.date.slice(5, 7))

      return birth ? years - 1 : years
    }
  },
  watch: {
    name (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  methods: {
    format () {
      this.formatName = this.name.split(' ').join('-')
    }
  },
  components: {
    Form
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
img{
  display: block;
  margin: 0 auto;
}
label{
  display: block;
}
</style>
