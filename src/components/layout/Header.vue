<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 Platzi Music
            .nav-item
          //     strong {{ person }}
          // .nav-right.nav-menu
          //   .nav-item
          //     button(v-on:click="addProp") Añadir Propiedad
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan en Vue
        pm-player
</template>
<script>
// Player
import PmPlayer from '@/components/Player'
console.log(PmPlayer)
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

