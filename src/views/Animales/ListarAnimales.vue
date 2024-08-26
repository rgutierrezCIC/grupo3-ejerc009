<template>
    <div>
      <h2>Listado de Animales</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Color</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in animales" :key="animal.id">
            <td>{{ animal.nombre }}</td>
            <td>{{ animal.color }}</td>
            <td>
              <router-link :to="{ name: 'EditarAnimal', params: { id: animal.id } }">Ver Detalle</router-link>
              <button @click="borrarAnimal(animal.id)">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/crear-animal">Crear Animal</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const animales = ref([])
  const router = useRouter()
  
  onMounted(() => {
    axios.get('/api/animals')
      .then(response => {
        animales.value = response.data
      })
      .catch(error => {
        console.error('Error al obtener los animales:', error)
      })
  })
  
  function borrarAnimal(id) {
    axios.delete(`/api/animals/${id}`)
      .then(() => {
        animales.value = animales.value.filter(animal => animal.id !== id)
      })
      .catch(error => {
        console.error('Error al borrar el animal:', error)
      })
  }
  </script>