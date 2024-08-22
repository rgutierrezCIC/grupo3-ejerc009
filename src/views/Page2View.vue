<script setup>
import { ref, watch } from 'vue'
import FormulaColoresComponent from '@/components/FormularioColoresComponent.vue'
import DatosFormColores from '@/components/DatosFormColores.vue';

const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'orange']
const colorIndex = ref(0)
const boxColor = ref(colors[colorIndex.value])

const changeColor = () => {
  colorIndex.value = (colorIndex.value + 1) % colors.length // Cambia al siguiente color
  boxColor.value = colors[colorIndex.value]
  selectedColor1.value = boxColor.value 
}

const selectedColor1 = ref('')

watch(selectedColor1, (newColor) => {
  boxColor.value = newColor
})

const formData = ref({
  name: '',
  age: ''
})

const handleUpdateData = (data) => {
  console.log('Datos recibidos en el componente padre:', data) // Verifica los datos recibidos
  formData.value = data
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
      <label style="color: blue">
        <input type="radio" value="blue" v-model="selectedColor1" />
        Azul
      </label>
      <label style="color: green">
        <input type="radio" value="green" v-model="selectedColor1" />
        Verde
      </label>
      <label style="color: yellow">
        <input type="radio" value="yellow" v-model="selectedColor1" />
        Amarillo
      </label>
      <label style="color: red">
        <input type="radio" value="red" v-model="selectedColor1" />
        Rojo
      </label>
      <label style="color: blueviolet">
        <input type="radio" value="purple" v-model="selectedColor1" />
        Morado
      </label>
      <label style="color: orange">
        <input type="radio" value="orange" v-model="selectedColor1" />
        Naranja
      </label>
    </div>

    <div class="formulario">
      <FormulaColoresComponent @updateData="handleUpdateData" />
      <DatosFormColores :data="formData" />

    </div>
  
  </div>
</template>

<style scoped>


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



</style>
