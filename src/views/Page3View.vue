<template>
  <body>
    <div class="page3-view">
      <h1 v-if="message">{{ message }}</h1>
      <button @click="changeMessage" :class="{ clicked: isClicked }">{{ buttonText }}</button>
      <br><br><br>
      <ul>
        <li v-for="(animal, index) in visibleAnimals" :key="index" :style="{ color: colors[index] }">
          {{ index + 1 }}. {{ animal }}
          <button @click="deleteAnimal(index)">Borrar</button>
        </li>
      </ul>
      <p v-if="visibleAnimals.length === 0">La lista está vacía.</p>
      <button v-if="visibleAnimals.length < animals.length" @click="showNextAnimal">{{ nextButtonText }}</button>
      <button v-else @click="hideAnimals">Ocultar animales</button>
      <br><br>
      <form @submit.prevent="addAnimal">
        <input v-model="newAnimal" placeholder="Añadir nuevo animal" />
        <button type="submit">Añadir</button>
      </form>
    </div>
  </body>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const message = ref('Estamos en la página 3')
const animals = ref([])
const colors = ref([])
const visibleCount = ref(0)
const isClicked = ref(false)
const newAnimal = ref('')

function changeMessage() {
  message.value = message.value ? '' : 'Estamos en la página 3'
  isClicked.value = !isClicked.value
}

const buttonText = computed(() => isClicked.value ? 'Ocultar' : 'Mostrar')
const nextButtonText = computed(() => visibleCount.value < animals.value.length ? 'Mostrar siguiente animal' : 'Lista completa')

function showNextAnimal() {
  if (visibleCount.value < animals.value.length) {
    visibleCount.value++
  }
}

function hideAnimals() {
  visibleCount.value = 0
}

function addAnimal() {
  if (newAnimal.value.trim()) {
    animals.value.push(newAnimal.value)
    colors.value.push(getRandomColor())
    newAnimal.value = ''
    saveToLocalStorage()
  }
}

function deleteAnimal(index) {
  animals.value.splice(index, 1)
  colors.value.splice(index, 1)
  if (visibleCount.value > animals.value.length) {
    visibleCount.value = animals.value.length
  }
  saveToLocalStorage()
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function saveToLocalStorage() {
  localStorage.setItem('animals', JSON.stringify(animals.value))
  localStorage.setItem('colors', JSON.stringify(colors.value))
}

function loadFromLocalStorage() {
  const storedAnimals = localStorage.getItem('animals')
  const storedColors = localStorage.getItem('colors')
  if (storedAnimals) {
    animals.value = JSON.parse(storedAnimals)
  }
  if (storedColors) {
    colors.value = JSON.parse(storedColors)
  }
}

onMounted(() => {
  loadFromLocalStorage()
})

const visibleAnimals = computed(() => animals.value.slice(0, visibleCount.value))
</script>

<style scoped>
.page3-view {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

button.clicked {
  background-color: blue;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

li button {
  margin-left: 10px;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>