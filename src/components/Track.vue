<template lang="pug">
  .card(v-if="track && track.album")
    .card-image
      figure.figure.ir-1by1
        img(v-bind:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-45x48
            img(v-bind:src="track.album.images[2].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}
      .content
        small {{ track.duration_ms }}
    .card-footer
      .card-footer-item
        button.button.is-success(@click="selectTrack") Play ►
      .card-footer-item
        button.button.is-dark(@click="goToTrack(track.id)") Ir a la 💿
</template>
<script>
export default {
  name: 'PmTrack',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

