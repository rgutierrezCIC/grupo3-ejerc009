<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="top-bar" >
      <nav>
        <RouterLink to="/page1">Ramiro</RouterLink>
        <RouterLink to="/page2">Diego</RouterLink>
        <RouterLink to="/page3">Ana</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

header {
  width: 100%;
  background-color: rgb(44, 44, 44);
  color: var(--color-text);
  
}

.top-bar {
  background-color: rgb(44, 44, 44);
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.3);
}

nav {
  width: 100%;
  font-size: 40px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
