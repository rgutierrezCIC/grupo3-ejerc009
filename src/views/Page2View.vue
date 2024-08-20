<script setup>
import { ref } from 'vue'

const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'orange']
const colorIndex = ref(0)
const boxColor = ref(colors[colorIndex.value])

const changeColor = () => {
  colorIndex.value = (colorIndex.value + 1) % colors.length // Cambia al siguiente color
  boxColor.value = colors[colorIndex.value]
}

const selectedColor1 = ref('')
</script>


<template>

  <body>

    <div class="app">
      <h1 class="title">Formulario de colores</h1>

      <div class="wrapper">
        <div
          class="box"
          :style="{ backgroundColor: boxColor, width: '200px', height: '200px' }"
        ></div>
        <button @click="changeColor">Cambiar Color</button>
      </div>

      <div class="question">
        <p>¿Cuál es tu color favorito?</p>
        <label style="color: blue">
          <input type="radio" value="Azul" v-model="selectedColor1" />
          Azul
        </label>
        <label style="color: green">
          <input type="radio" value="Verde" v-model="selectedColor1" />
          Verde
        </label>
        <label style="color: yellow">
          <input type="radio" value="Amarillo" v-model="selectedColor1" />
          Amarillo
        </label>
        <label style="color: red">
          <input type="radio" value="Rojo" v-model="selectedColor1" />
          Rojo
        </label>
        <label style="color: blueviolet">
          <input type="radio" value="Morado" v-model="selectedColor1" />
          Morado
        </label>
        <label style="color: orange">
          <input type="radio" value="Naranja" v-model="selectedColor1" />
          Naranja
        </label>
      </div>
    </div>
  </body>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.container {
  padding: 20px;
}

.question {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

p {
  font-size: 18px;
}
</style>


