<template lang="pug">
  #app
    child
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
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns
          .column(v-for="t in tracks")
            | {{ t.name  }} - {{ t.artists[0].name }}


</template>

<script>
import trackService from './services/track'

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
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery).then((res) => {
        this.tracks = res.tracks.items
      })
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
