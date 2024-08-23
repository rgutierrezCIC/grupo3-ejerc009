<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import FormulaColoresComponent from '@/components/FormularioColoresComponent.vue'
import DatosFormColores from '@/components/DatosFormColores.vue'

// Lista de colores para el fondo de la caja
const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'orange']
const colorIndex = ref(0)
const boxColor = ref(colors[colorIndex.value])

const changeColor = () => {
  colorIndex.value = (colorIndex.value + 1) % colors.length
  boxColor.value = colors[colorIndex.value]
  selectedColor1.value = boxColor.value 
}

const selectedColor1 = ref('')

watch(selectedColor1, (newColor) => {
  boxColor.value = newColor
})

// Datos del formulario de colores
const formData = ref({
  name: '',
  age: ''
})

const handleUpdateData = (data) => {
  console.log('Datos recibidos en el componente padre:', data)
  formData.value = data
}

// Lista de personas
const persons = ref([
  { id: 1, name: 'Juan', age: 25, colorFav: 'blue' },
  { id: 2, name: 'Ana', age: 30, colorFav: 'green' },
  { id: 3, name: 'Carlos', age: 35, colorFav: 'red' }
])

// Configurar la navegación
const router = useRouter()

const goToEditPerson = (personId) => {
  router.push({ name: 'EditPersonaColores', params: { id: personId } })
}

const goToRickAndMorty = () => {
  router.push({ name: 'RickAndMorty' })
}

</script>

<template>
  <div class="app">
    <h1 class="title">Formulario de Colores</h1>

    <div class="box-wrapper">
      <div class="box" :style="{ backgroundColor: boxColor }"></div>
      <button @click="changeColor">Cambiar Color</button>
    </div>

    <p class="question-title">¿Cuál es tu color favorito?</p>
    <div class="question">
      <!-- Opciones de colores favoritos -->
      <label v-for="color in colors" :key="color" :style="{ color }">
        <input type="radio" :value="color" v-model="selectedColor1" />
        {{ color.charAt(0).toUpperCase() + color.slice(1) }}
      </label>
    </div>
    <button style="background-color: blueviolet;" @click="goToRickAndMorty">Ver Personajes de Rick and Morty</button>

    <div class="formulario">
      <div class="person-list">
      <h2>Lista de Personas</h2>
      <ul>
        <li v-for="person in persons" :key="person.id">
          <span>{{ person.name }} </span>
          <button @click="goToEditPerson(person.id)">Editar</button>
        </li>
      </ul>
    </div>

      <FormulaColoresComponent @updateData="handleUpdateData" />
      <DatosFormColores :data="formData" />
    </div>

  </div>
    
</template>

<style scoped>
/* Estilos de la aplicación */
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.box-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.formulario {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.box {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

button {
  margin-top: 15px;
  padding: 10px 25px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.question-title {
  font-size: 1.5em;
  color: #444;
  margin: 20px 0;
}

.question {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-direction: row;
}

.question label {
  display: flex;
  margin-right: 10px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1em;
  cursor: pointer;
}

.question input {
  margin-right: 10px;
}

.person-list {
  margin-top: 20px;
}

.person-list ul {
  list-style: none;
  padding: 0;
}

.person-list li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
