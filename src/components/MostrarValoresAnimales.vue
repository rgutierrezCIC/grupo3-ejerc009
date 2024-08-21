<template>
    <div class="mostrar-valores-animales">
      <h2>Valores del Formulario de Animales</h2>
      <p>Nombre: {{ valores.nombre }}</p>
      <p>Color: {{ valores.color }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    valores: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .mostrar-valores-animales {
    text-align: left;
    margin-top: 50px;
  }
  </style>