<template lang="pug">
  section.hero.is-success
    .hero-head
      header
        .container
          nav.navbar-menu
            .navbar-start
              .navbar-item
                strong 📻 Platzi Music
            .navbar-end
              router-link.navbar-item(to="home") Home
              router-link.navbar-item(:to="{ name: 'search' }") Search
              router-link.navbar-item(to="about") About
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan en Vue
        pm-player
</template>
<script>
// Player
import PmPlayer from '@/components/Player'

export default {
  name: 'PmHeader',
  data () {
    return {
      person: {
        name: 'Arnold'
      }
    }
  },
  methods: {
    addProp () {
      // this.person.lastName = 'Restrepo'
      // this.$set(this.person, 'lastName', 'Restrepo')
      this.person = Object.assign({}, this.person, { 'lastName': 'Restrepo', 'fullName': 'Hernández' })
    }
  },
  components: {
    PmPlayer
  }
}
</script>
<style lang="scss">

</style>

