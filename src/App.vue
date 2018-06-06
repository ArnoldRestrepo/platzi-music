<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control
              a.button.is-danger.is-large &times;
            .control
              input(
                type="text",
                placeholder="Buscar Canciones:",
                v-model="searchQuery"
                ).input.is-large
            .control
              a(@click="search").button.is-info.is-large Buscar
          p
            small {{ searchMessage }}
      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name  }} - {{ t.artist }}


</template>

<script>
import trackService from './services/track'
console.log(trackService)
const tracks = [
  {
    name: 'Chandelier',
    artist: 'SIA'
  },
  {
    name: 'El prestamo',
    artist: 'Maluma'
  },
  {
    name: 'Amen',
    artist: 'Halestorm'
  },
  {
    name: 'Hablame',
    artist: 'Beto Cuevas'
  }
]

console.log(tracks)

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length} resultados`
    }
  },
  watch: {

  },
  methods: {
    search () {
      this.tracks = tracks
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results{
  margin-top: 30px;
}

</style>
