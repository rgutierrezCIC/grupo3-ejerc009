<template>
  <div class="display-component">
    <h2>Datos Ingresados</h2>
    <p><strong>Nombre:</strong> {{ data.name }}</p>
    <p><strong>Edad:</strong> {{ data.age }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.display-component {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1.2em;
  color: #555;
  margin: 5px 0;
}

strong {
  color: #000;
}
</style>
