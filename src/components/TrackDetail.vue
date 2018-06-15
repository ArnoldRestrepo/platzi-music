<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(v-bind:src="track.album.images[0].url")
          button.button.is-primary.is-large(@click="selectTrack") ►
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ track.name }}
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
import TrackService from '@/services/track'
// Mixins
import trackMixin from '@/mixins/track'

export default {
  data () {
    return {
      track: {}
    }
  },
  mixins: [
    trackMixin
  ],
  created () {
    const id = this.$route.params.id
    TrackService.getById(id).then(res => {
      this.track = res
    })
  }
}
</script>
<style lang="scss">
.columns{
  margin: 1rem 0 !important;
}
</style>


