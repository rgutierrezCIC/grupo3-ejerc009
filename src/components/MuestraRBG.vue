<template>
  <div>
    <div class="color-display" :style="{ backgroundColor: rgbColor }">
      <p>{{ rgbColor }}</p>
    </div>
    <button @click="guardarColor">Guardar Color</button>
  </div>
</template>
  
  <script>
  export default {
    props: {
      red: { type: Number, required: true },
      green: { type: Number, required: true },
      blue: { type: Number, required: true }
    },
    computed: {
      rgbColor() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
      }
    },
    methods: {
    guardarColor() {
      this.$emit('guardar-color', this.rgbColor);
    }
  }
  };
  </script>
  
  <style scoped>
  .color-display {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    margin-top: 30px;
  }
  button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  width: 100%;
  max-width: 300px;
  background-color: #007bff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
  </style>