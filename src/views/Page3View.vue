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

      <br><br><br>
  
      <!-- Sección del formulario de animales y los valores mostrados -->
      <div class="formulario-section">
        <FormularioAnimales v-model="formularioDatos" />
        <MostrarValoresAnimales :valores="formularioDatos" />
      </div>
      
      <!-- Componente AnimalDetalle (comentado si no se usa en este contexto) -->
      <!-- <AnimalDetalle v-if="animalSeleccionado" :animal="animalSeleccionado" @guardar="guardarCambios" @cancelar="cancelarEdicion" /> -->
  </div>
  </body>
</template>

<script setup>
//Usa ref y computed para gestionar el estado y lógica del componente.
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
//Componentes hijos
import FormularioAnimales from '@/components/FormularioAnimales.vue';
import MostrarValoresAnimales from '@/components/MostrarValoresAnimales.vue';

import AnimalDetalle from '@/components/AnimalDetalle.vue'
import LlamadaServidor from '@/components/LlamadaServidor.vue'

const router = useRouter()

const mensaje = ref('Estamos en la página 3')
const estaClicado = ref(false)
const mostrarLista = ref(false)
const formularioDatos = ref({ nombre: '', color: '' }); // Define formularioDatos
const animalSeleccionado = ref(null);


// Lista de animales con colores iniciales
const animales = ref([
  { id: 1, nombre: 'Perro', color: 'Negro', hoverColor: 'red' },
  { id: 2, nombre: 'Gato', color: 'Blanco', hoverColor: 'green' },
  { id: 3, nombre: 'Burro', color: 'Gris', hoverColor: 'blue' },
  { id: 4, nombre: 'Caballo', color: 'Marrón', hoverColor: 'purple' }
])

// Datos del formulario
const formularioAnimales = ref({
  nombre: '',
  color: ''
})

function cambiarMensaje() {
  mensaje.value = mensaje.value ? '' : 'Estamos en la página 3'
  estaClicado.value = !estaClicado.value
}

const textoBoton = computed(() => estaClicado.value ? 'Mostrar' : 'Ocultar')

function toggleLista() {
  mostrarLista.value = !mostrarLista.value
}

// Función para cambiar el color del animal al pasar el cursor
function cambiarColor(indice, hover) {
  animales.value[indice].color = hover ? animales.value[indice].hoverColor : 'black'
}

// Función para editar un animal
function editarAnimal(id) {
  router.push({ name: 'DetalleAnimal', params: { id } })
}

// Función para borrar un animal
function borrarAnimal(id) {
  animales.value = animales.value.filter(animal => animal.id !== id)
}

// Función para guardar cambios
function guardarCambios(animalActualizado) {
  const index = animales.value.findIndex(animal => animal.id === animalActualizado.id)
  if (index !== -1) {
    animales.value[index] = { ...animalActualizado }
  }
  animalSeleccionado.value = null
}

// Función para cancelar la edición
function cancelarEdicion() {
  animalSeleccionado.value = null
}
</script>


<style scoped>
.page3-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px; /* Añade padding para separación del borde */
  background: linear-gradient(135deg, #beefec 0%, #fad0c4 100%);
  color: #333;/* Color del texto para contraste */
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

form {
  margin-bottom: 20px; /* Separación entre el formulario y otros elementos */
}

.formulario-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

.column-wrapper {
  display: flex;
  justify-content: space-between; /* Ajusta el espacio entre las columnas */
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* Ajusta el tamaño máximo del contenedor */
}

.formulario-animales,
.mostrar-valores-animales {
  background-color: #b3d4fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: left;
  flex: 1 1 300px; /* Permite que las columnas crezcan y se ajusten al espacio disponible, con un ancho mínimo de 300px */
  box-sizing: border-box;
}

.mostrar-valores-animales {
  background-color: #d0e7ff;
}

h1, h2 {
  color: #2c3e50;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

input {
  border: 1px solid #3498db;
  padding: 8px;
  border-radius: 5px;
  font-size: 14px;
  width: calc(100% - 20px);
  box-sizing: border-box;
}

label {
  font-weight: bold;
  color: #2c3e50;
  margin-top: 10px;
}

.listado, .detalle {
  flex: 1;
}

</style>

