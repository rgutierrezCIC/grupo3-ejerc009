<template>
  <div class="rgb-selector">
    <div class="color-row">
      <label for="red">Rojo: {{ red }}</label>
      <input type="range" id="red" v-model="localRed" min="0" max="255" @input="updateColor" />
    </div>
    <div class="color-row">
      <label for="green">Verde: {{ green }}</label>
      <input type="range" id="green" v-model="localGreen" min="0" max="255" @input="updateColor" />
    </div>
    <div class="color-row">
      <label for="blue">Azul: {{ blue }}</label>
      <input type="range" id="blue" v-model="localBlue" min="0" max="255" @input="updateColor" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
      red: { type: Number, required: true },
      green: { type: Number, required: true },
      blue: { type: Number, required: true }
  },
  data() {
      return {
          localRed: this.red,
          localGreen: this.green,
          localBlue: this.blue
      };
  },
  methods: {
      updateColor() {
          this.$emit('update:color', {
              red: this.localRed,
              green: this.localGreen,
              blue: this.localBlue
          });
      }
  }
};
</script>

<style scoped>
.rgb-selector {
    display: grid;
    grid-template-columns: 150px 300px; /* Define dos columnas: una para nombres y otra para selectores con ancho fijo para los selectores */
    column-gap: 20px; /* Espacio entre las columnas */
    row-gap: 10px; /* Espacio entre las filas */
    margin: 0 auto; /* Centra el contenedor horizontalmente */
}

.color-row {
    display: contents; /* Permite que los elementos hijos ocupen el espacio de la cuadrícula sin crear un contenedor adicional */
}

label {
    grid-column: 1; /* Coloca los labels en la primera columna */
    text-align: left; /* Alinea el texto a la izquierda */
}

input[type="range"] {
    grid-column: 2; /* Coloca los inputs en la segunda columna */
    width: 100%; /* Asegura que los selectores ocupen el ancho completo disponible dentro de su columna */
}
</style>
