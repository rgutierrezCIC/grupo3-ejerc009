<template>
  <div class="page1-view">
    <div class="form-container">
      <h1>Formulario</h1>
      <form @submit.prevent="metodoSubmit">
        <label for="age">Introduce tu edad:</label>
        <input type="number" id="age" v-model="age" required />
        <button type="submit">Introducir</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>

    <div class="color-container">
      <RgbSlider :red="red" :green="green" :blue="blue" @update:color="updateColor" />
      <ColorDisplay :red="red" :green="green" :blue="blue" @guardar-color="agregarColor" />
    </div>

    <div class="list-container" v-if="colores.length > 0">
      <!-- Usamos ListaColoresRGB para mostrar y manejar los colores -->
      <ListaColoresRGB 
        :colores="colores" 
        @eliminar-color="eliminarColor" 
      />
    </div>

  </div>
</template>

<script>
import RgbSlider from '@/components/SelectoresRGB.vue';
import ColorDisplay from '@/components/MuestraRBG.vue';
import ListaColoresRGB from '@/components/ListaColoresRGB.vue';

export default {
  components: {
    RgbSlider,
    ColorDisplay,
    ListaColoresRGB
  },
  data() {
    return {
      age: '',
      message: '',
      red: 0,
      green: 0,
      blue: 0,
      colores: [] // Inicializa la lista de colores
    };
  },
  methods: {
    metodoSubmit() {
      const edad = parseInt(this.age, 10);
      if (edad < 18) {
        this.message = 'Eres menor de edad.';
      } else if (edad >= 18 && edad < 65) {
        this.message = 'Eres un adulto.';
      } else {
        this.message = 'Eres una persona mayor.';
      }
    },
    updateColor({ red, green, blue }) {
      this.red = red;
      this.green = green;
      this.blue = blue;
    },
    agregarColor(color) {
      this.colores.push(color); // Agrega el color a la lista
    },
    eliminarColor(index) {
      this.colores.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.page1-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #393939;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

label {
  margin-bottom: 10px;
  font-size: 18px;
}

input[type="number"] {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  width: 100%;
  max-width: 300px;
  background-color: #007bff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

p {
  font-size: 18px;
  margin-top: 20px;
}

.color-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #393939;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #393939;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
