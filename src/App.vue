<template lang="pug">
  #app
    pm-header
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-bind:class="{ 'is-active': t.id === selectedTrack }",
              v-bind:track="t",
              v-on:select="setSelectedTrack"
            )
    pm-footer

</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

import PmTrack from '@/components/Track'
import PmLoader from '@/components/shared/Loader'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
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
      this.isLoading = true
      trackService.search(this.searchQuery).then((res) => {
        this.isLoading = false
        this.tracks = res.tracks.items
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.results{
  margin-top: 30px;
}

.is-active {
  border: 3px #23d160 solid;
}

</style>
