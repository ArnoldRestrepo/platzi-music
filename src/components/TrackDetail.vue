<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-left
        figure.media-left
          p.image
            img(v-bind:src="track.album.images[0].url")
          button.button.is-primary.is-large(@click="selectTrack") Play ►
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(v, k) in track")
                    li
                      strong {{ k }}:&nbsp;
                      span {{ v }}
              nav.level
                .level-left
                  a.level-left
                .level-right
</template>
<script>
// import TrackService from '@/services/track'
// Mixins
import trackMixin from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'Vuex'

export default {
  mixins: [
    trackMixin
  ],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id
    if (!this.track || !this.track || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track Loaded')
        })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>
<style lang="scss" scoped>
.columns{
  margin: 1rem 0 !important;
}
.button{
 margin-top: 1rem;
}
</style>


