<template>
    <div class="color-display" :style="{ backgroundColor: rgbColor }">
      <p>{{ rgbColor }}</p>
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
    margin-top: 20px;
  }
  </style>