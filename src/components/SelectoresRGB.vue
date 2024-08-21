<template>
    <div class="rgb-selector">
      <div>
        <label for="red">Rojo: {{ red }}</label>
        <input type="range" id="red" v-model="localRed" min="0" max="255" @input="updateColor" />
      </div>
      <div>
        <label for="green">Verde: {{ green }}</label>
        <input type="range" id="green" v-model="localGreen" min="0" max="255" @input="updateColor" />
      </div>
      <div>
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
    display: flex;
    flex-direction: column;
  }
  </style>
  