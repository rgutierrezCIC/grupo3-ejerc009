<template>
    <div class="form-component">
      <h2>Formulario de Datos</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required />
  
        <label for="age">Edad:</label>
        <input type="number" id="age" v-model="formData.age" required />
  
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  
  <script setup>
  import { ref, defineEmits } from 'vue'
  
  const emit = defineEmits(['updateData'])
  
  const formData = ref({
    name: '',
    age: ''
  })
  
  const submitForm = () => {
    console.log('Datos enviados desde el formulario:', formData.value) // Verifica los datos que se envían
    emit('updateData', { ...formData.value })
  }
  </script>
  
  <style scoped>
  .form-component {
    margin: 20px;
  }
  </style>
  