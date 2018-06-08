<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p By {{ name }} with 😎  by 🦁
</template>
<script>
export default {
  name: 'PmFooter',
  data () {
    return {
      name: 'Hello'
    }
  },
  beforeCreate () {
    console.log('before Created Footer Component')
  },
  created () {
    console.log('created Footer Component')
  },
  mounted () {
    console.log('Component mounted')
  }

}
</script>




