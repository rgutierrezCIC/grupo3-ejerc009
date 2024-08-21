<template>
  <div class="formulario-animales">
    <h2>Formulario de Animales</h2>
    <form @submit.prevent="enviarFormulario">
      <label for="nombre">Nombre del animal:</label>
      <input type="text" id="nombre" v-model="formulario.nombre" />

      <label for="color">Color del animal:</label>
      <input type="text" id="color" v-model="formulario.color" />

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const formulario = ref({ ...props.modelValue })

watch(formulario, (nuevoValor) => {
  emit('update:modelValue', nuevoValor)
})

function enviarFormulario() {
  console.log('Formulario enviado:', formulario.value)
  emit('update:modelValue', formulario.value)
}

</script>

<style scoped>
.formulario-animales {
  text-align: left;
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  margin-top: 5px;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  margin-top: 20px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>