<template lang="pug">
  main
    pm-notification(v-show="showNotification", v-bind:results="hasResults")
      p(slot="body") {{ hasResults ? searchMessage : 'No se han econtraron resultados' }}
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
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-bind:class="{ 'is-active': t.id === selectedTrack }",
              v-bind:track="t",
              v-on:select="setSelectedTrack"
            )
</template>

<script>
// Tracks Services
import trackService from '@/services/track'
import PmTrack from '@/components/Track'

// Shared
import PmLoader from '@/components/shared/Loader'
import PmNotification from '@/components/shared/Notification'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontramos: ${this.tracks.length} resultados`
    },
    hasResults () {
      return this.tracks.length > 0
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery).then((res) => {
        this.showNotification = true
        this.isLoading = false
        this.tracks = res.tracks.items
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  }
}
</script>

<style lang="scss">
body{
  padding: 0;
}

.results{
  margin-top: 30px;
}

.is-active {
  border: 3px #23d160 solid;
}

</style>
