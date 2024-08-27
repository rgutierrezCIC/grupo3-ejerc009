<template>
    <div v-if="colores.length > 0">
      <ul class="color-list">
        <li v-for="(color, index) in colores" :key="index" class="color-list-item">
          <div class="color-item" :style="{ backgroundColor: color }"></div>
          <span class="color-name">{{ color }}</span>
          <button @click="eliminarColor(index)" class="delete-button">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      colores: {
        type: Array,
        required: true
      }
    },
    methods: {
      eliminarColor(index) {
        this.$emit('eliminar-color', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .color-list {
    margin-top: 30px;
    list-style-type: none; /* Elimina los puntos de la lista */
    padding: 0; /* Elimina el padding predeterminado de la lista */
    width: 100%; /* Ocupa el ancho completo del contenedor */
  }
  
  .color-list-item {
    display: flex; /* Usa flex para alinear en fila */
    align-items: center; /* Centra verticalmente los elementos */
    justify-content: space-between; /* Espacio entre los elementos */
    padding: 10px 0; /* Espacio entre las filas */
  }
  
  .color-item {
    width: 30px; /* Tamaño más grande para visualizar mejor */
    height: 30px; /* Tamaño más grande para visualizar mejor */
    margin-right: 20px; /* Espacio entre el color y el texto */
    border: 1px solid #000; /* Borde para resaltar el color */
  }
  
  .color-name {
    flex-grow: 1; /* Toma el espacio restante entre el color y el botón */
    font-size: 18px; /* Tamaño de fuente más grande para legibilidad */
  }
  
  .delete-button {
    padding: 8px 16px;
    margin-left: 20px;
    background-color: #222222; /* Color rojo para destacar el botón */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; /* Transición suave al pasar el ratón */
  }
  
  .delete-button:hover {
    background-color: rgb(53, 143, 87); /* Color verde al pasar el ratón */
  }
  </style>
  