<template>
  <!--Formulario que incluye campos para el nombre y color del animal 
  y un botón para enviar.-->
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
/**
 * Usa ref para crear una referencia al estado del formulario.
 * Usa watch para observar y reaccionar a cambios en datos reactivas.
 * Utiliza defineProps para recibir props y defineEmits para emitir eventos.
 * Usa defineEmits para definir los eventos que el componente puede emitir.
 */
import { ref, watch, defineProps, defineEmits } from 'vue'

/**
 * defineProps:
 * modelValue: Prop que recibe el componente. Se espera que sea un objeto con las 
 * propiedades nombre y color. Este prop inicializa el estado del formulario.
 */
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

//Emite el evento update:modelValue cuando el formulario cambia o se envía.
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
  max-width: 800px;
  align-content:center;
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