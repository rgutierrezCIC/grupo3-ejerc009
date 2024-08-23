<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router' // Importa useRouter para la redirección

const route = useRoute()
const router = useRouter() // Usa useRouter para acceder al router
const personId = route.params.id

const persons = ref([
  { id: 1, name: 'Juan', age: 25, colorFav: 'blue' },
  { id: 2, name: 'Ana', age: 30, colorFav: 'green' },
  { id: 3, name: 'Carlos', age: 35, colorFav: 'red' }
])

const selectedPerson = ref(null)

onMounted(() => {
  selectedPerson.value = persons.value.find(person => person.id == personId)
})

const saveChanges = () => {
  // Aquí se realizaría la lógica para guardar los cambios
  console.log('Cambios guardados:', selectedPerson.value)
  
  // Redirige a Page2View después de guardar los cambios
  router.push({ name: 'page2' }) // 'page2' es el nombre de la ruta principal de Page2View
}
</script>

<template>
  <div>
    <h1>Editar Persona</h1>
    <div v-if="selectedPerson">
      <form @submit.prevent="saveChanges">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="selectedPerson.name" />
        </div>
        <div class="form-group">
          <label for="age">Edad:</label>
          <input type="number" id="age" v-model="selectedPerson.age" />
        </div>
        <div class="form-group">
          <label for="colorFav">Color Favorito:</label>
          <select id="colorFav" v-model="selectedPerson.colorFav">
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
            <option value="yellow">Amarillo</option>
            <option value="red">Rojo</option>
            <option value="purple">Morado</option>
            <option value="orange">Naranja</option>
          </select>
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
