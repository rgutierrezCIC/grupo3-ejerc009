<template>
  <body>
    <div class="page3-view">
      <!-- Muestra un mensaje si la variable mensaje tiene un valor -->
      <h1 v-if="mensaje">{{ mensaje }}</h1>

      <!-- Botón que cambia el mensaje y su propio estado al hacer clic -->
      <button @click="cambiarMensaje" :class="{ clicked: estaClicado }">{{ textoBoton }}</button>
      <br><br><br>

      <!-- Botón para mostrar/ocultar la lista de animales -->
      <button @click="toggleLista">{{ mostrarLista ? 'Ocultar lista de animales' : 'Ver lista de animales' }}</button>
      <br><br><br>

      <!-- Lista de animales -->
      <ul v-if="mostrarLista">
        <li v-for="(animal, indice) in animales" :key="indice" :style="{ color: animal.color }" @mouseover="cambiarColor(indice, true)" @mouseleave="cambiarColor(indice, false)">
          {{ indice + 1 }}. {{ animal.nombre }}
        </li>
      </ul>
    </div>
  </body>
</template>

<script setup>
import { ref, computed } from 'vue'

const mensaje = ref('Estamos en la página 3')
const estaClicado = ref(false)
const mostrarLista = ref(false)

// Lista de animales con colores iniciales
const animales = ref([
  { nombre: 'Perro', color: 'black', hoverColor: 'red' },
  { nombre: 'Gato', color: 'black', hoverColor: 'green' },
  { nombre: 'Burro', color: 'black', hoverColor: 'blue' },
  { nombre: 'Caballo', color: 'black', hoverColor: 'purple' }
])

function cambiarMensaje() {
  mensaje.value = mensaje.value ? '' : 'Estamos en la página 3'
  estaClicado.value = !estaClicado.value
}

const textoBoton = computed(() => estaClicado.value ? 'Ocultar' : 'Mostrar')

function toggleLista() {
  mostrarLista.value = !mostrarLista.value
}

// Función para cambiar el color del animal al pasar el cursor
function cambiarColor(indice, hover) {
  animales.value[indice].color = hover ? animales.value[indice].hoverColor : 'black'
}
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
  cursor: pointer;
}
</style>