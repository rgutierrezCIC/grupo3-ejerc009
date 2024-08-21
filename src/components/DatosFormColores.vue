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
    border-radius: 4px;
  }
  </style>
  
  