<template>
    <div>
      <h2>Crear Animal</h2>
      <form @submit.prevent="crearAnimal">
        <label for="nombre">Nombre:</label>
        <input v-model="animal.nombre" id="nombre" type="text" required />
        <label for="color">Color:</label>
        <input v-model="animal.color" id="color" type="text" required />
        <button type="submit">Crear</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const animal = ref({
    nombre: '',
    color: ''
  })
  
  const router = useRouter()
  
  function crearAnimal() {
    axios.post('/api/animals', animal.value)
      .then(() => {
        router.push('/listar-animales')
      })
      .catch(error => {
        console.error('Error al crear el animal:', error)
      })
  }
  </script>