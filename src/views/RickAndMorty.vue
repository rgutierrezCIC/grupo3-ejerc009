<!-- src/views/RickAndMortyView.vue -->
<template>
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <ul>
        <li v-for="character in characters" :key="character.id" class="character-item">
          <img :src="character.image" alt="Character Image" class="character-image" />
          <span>{{ character.name }} - {{ character.species }}</span>
        </li>
      </ul>
      <button @click="loadMore">Cargar Más</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const characters = ref([])
  const page = ref(1)
  const apiUrl = 'https://rickandmortyapi.com/api/character'
  
  const fetchCharacters = async (pageNumber) => {
    try {
      const response = await axios.get(`${apiUrl}?page=${pageNumber}`)
      characters.value = response.data.results
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  
  const loadMore = () => {
    page.value += 1
    fetchCharacters(page.value)
  }
  
  onMounted(() => {
    fetchCharacters(page.value)
  })
  </script>
  
  <style scoped>
  .character-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .character-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  