<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer

</template>

<script>

// Layout
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

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
