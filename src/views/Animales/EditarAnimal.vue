<template>
    <div v-if="animal">
      <h2>Edición del Animal</h2>
      <form @submit.prevent="guardarCambios">
        <label for="nombre">Nombre:</label>
        <input v-model="animal.nombre" id="nombre" type="text" required />
        <label for="color">Color:</label>
        <input v-model="animal.color" id="color" type="text" required />
        <button type="submit">Guardar</button>
        <button @click="cancelarEdicion">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useRoute, useRouter } from 'vue-router'
  
  const animal = ref(null)
  const route = useRoute()
  const router = useRouter()
  
  onMounted(() => {
    axios.get(`/api/animals/${route.params.id}`)
      .then(response => {
        animal.value = response.data
      })
      .catch(error => {
        console.error('Error al obtener el animal:', error)
      })
  })
  
  function guardarCambios() {
    axios.put(`/api/animals/${animal.value.id}`, animal.value)
      .then(() => {
        router.push('/listar-animales')
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error)
      })
  }
  
  function cancelarEdicion() {
    router.push('/listar-animales')
  }
  </script>