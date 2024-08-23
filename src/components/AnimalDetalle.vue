<template>
  <div>
    <h2>Detalle del Animal</h2>
    <div v-if="animal">
      <input type="hidden" v-model="animal.id" />
      <p>Nombre: <input v-model="animal.nombre" /></p>
      <p>Color: <input v-model="animal.color" /></p>
      <button @click="guardarCambios">Guardar Cambios</button>
      <router-link to="/page3">Volver al Listado</router-link>
    </div>
    <div v-else>
      <p>Animal no encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const animal = ref(null)

const animales = [
  { id: 1, nombre: 'Perro', color: 'Negro' },
  { id: 2, nombre: 'Gato', color: 'Blanco' },
  { id: 3, nombre: 'Burro', color: 'Gris' },
  { id: 4, nombre: 'Caballo', color: 'Marrón' }
]

onMounted(() => {
  const id = parseInt(route.params.id)
  animal.value = animales.find(a => a.id === id)
})

function guardarCambios() {
  const index = animales.findIndex(a => a.id === animal.value.id)
  if (index !== -1) {
    animales[index] = { ...animal.value }
    router.push('/page3')
  }
}
</script>

<style scoped>
p {
  font-size: 18px;
  margin: 10px 0;
}
</style>