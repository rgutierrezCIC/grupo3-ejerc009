<template>
    <!--Muestra los valores del formulario pasados como prop.-->
    <div class="mostrar-valores-animales">
      <h2>Valores del Formulario de Animales</h2>
      <p>Nombre: {{ valores.nombre }}</p>
      <p>Color: {{ valores.color }}</p>
    </div>
  </template>
  
  <script setup>
  //Usa defineProps para recibir props.
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