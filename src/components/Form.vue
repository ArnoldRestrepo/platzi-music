<template lang="pug">
  form(method="POST", action="")#Registro.Registro
    img(src="../assets/platzi-satelite.jpg", alt="Registro Saletlite").Registro__img
    h2.Registro__title
      | Registro estación Platzi
    .Registro__controls
      label(for="nombre").Registro__label Nombre
      input(type="text", name="nombre", id="nombre").Registro__input
    .Registro__controls
      label(for="apellido").Registro__label Apellido
      input(type="text", name="apellido", id="apellido").Registro__input
    .Registro__controls
      label(for="cargo").Registro__label Cargo
      input(type="text", name="cargo", id="cargo").Registro__input
    button(type="submit").Registro__submit Enviar

</template>
<script>
export default {
  name: 'form',
  data: {
    msg: 'Hola'
  }
}
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  // Variables
  $blue: #00BFD6;
  $lightBlue: A3ECF3;
  $orange: #FF9300;
  $black: #212121;

  .Registro{
    width: 320px;
    height: 409px;
    padding: 1rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    box-shadow:  0px 0px 5px 0.8px rgba($black, .2);

    &__img{
      margin-bottom: 1.5rem;
    }
    &__title{
      color: $blue;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }
    &__controls{
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__label{
      color:$orange;
      font-size: .8rem;
    }
    &__input{
      width: 100%;
      border-width: 0px 0px 1px 0px;
      margin-bottom: 1rem;
      border-color: $orange;
    }
    &__submit{
      background: $blue;
      color: #FFF;
      padding: .5rem 2rem;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      color: #FFF;
      border: none;
      box-shadow: 0px 0px 3px 1px rgba($black, .3);
      align-self: flex-end;
      cursor: pointer;
      &:hover{
        box-shadow: none;
      }
    }

  }

</style>


