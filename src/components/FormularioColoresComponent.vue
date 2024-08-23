<template>
  <div class="form-component">
    <h2>Formulario de Datos</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="age">Edad:</label>
        <input type="number" id="age" v-model="formData.age" required />
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['updateData'])

const formData = ref({
  name: '',
  age: ''
})

const submitForm = () => {
  console.log('Datos enviados desde el formulario:', formData.value) // Verifica los datos que se envían
  emit('updateData', { ...formData.value })
}
</script>

<style scoped>
.form-component {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 1.1em;
  color: #555;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
