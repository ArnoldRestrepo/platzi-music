<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body") Algo anduvo mal
</template>
<style lang="scss" scoped>
.notification {
  margin: 1rem 0;
}
</style>

