<template lang="pug">
  .content(v-if="track && track.album")
    p.is-128x128
      img(v-bind:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms }}]
    p
      audio(controls, v-bind:src="track.preview_url")
</template>
<script>
export default {
  name: 'PmPlayer',
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>
<style lang="scss" scoped>
  img{
    width: 124px;
    border-radius: 50%;
  }
</style>


