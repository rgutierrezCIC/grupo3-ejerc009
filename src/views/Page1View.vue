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
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      age: '',
      message: ''
    };
  },
  methods: {
    metodoSubmit() {
      const edad = parseInt(this.edad, 10);
      if (edad < 18) {
        this.message = 'Eres menor de edad.';
      } else if (edad >= 18 && edad < 65) {
        this.message = 'Eres un adulto.';
      } else {
        this.message = 'Eres mayor de edad.';
      }
    }
  }
};
</script>

<style>
.page1-view {
  padding: 20px;
}

form {
  margin-top: 20px;
}

label {
  margin-right: 10px;
}

input {
  margin-right: 10px;
}

button {
  margin-top: 10px;
}

p {
  margin-top: 20px;
  font-weight: bold;
}
</style>
