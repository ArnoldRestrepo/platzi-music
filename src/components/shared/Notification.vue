<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(v-bind:class="{ 'is-success' : results,  'is-danger' : !results  }")
          slot(name="body") Algo anduvo mal
</template>
<script>
export default {
  props: {
    results: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 1rem 0;
}
</style>

