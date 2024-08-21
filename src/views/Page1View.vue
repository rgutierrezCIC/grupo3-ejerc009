<template>

  <body>
    <div class="page1-view">
      <h1>Formulario</h1>
      <form @submit.prevent="metodoSubmit">
        <label for="age">Introduce tu edad:</label>
        <input type="number" id="age" v-model="age" required />
        <button type="submit">Intruducir</button>
      </form>
      <p v-if="message">{{ message }}</p>

      <RgbSlider :red="red" :green="green" :blue="blue" @update:color="updateColor" />
      <ColorDisplay :red="red" :green="green" :blue="blue" />
    </div>
  </body>
</template>

<script>
import RgbSlider from '@/components/SelectoresRGB.vue';
import ColorDisplay from '@/components/MuestraRBG.vue';

export default {
  components: {
    RgbSlider,
    ColorDisplay
  },
  data() {
    return {
      age: '',
      message: '',
      red: 0,
      green: 0,
      blue: 0
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
    }
  
  }
};
</script>


<style scoped>

.page1-view {
  display: grid;
  flex-direction: column;
  align-items: center;
  align-content: center;
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
  align-items: center;

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
