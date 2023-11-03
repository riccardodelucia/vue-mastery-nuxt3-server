<script setup>
  const { data: pokemon, error } = await useFetch("/api/lugia");
</script>

<template>
  <h1>Home page</h1>
  <ul v-if="pokemon">
    <li><img :src="pokemon.sprite" alt="Pokemon picture" /></li>
    <li>{{ pokemon.id }}: {{ pokemon.name }}</li>
  </ul>
  <div v-else>
    <p>{{ error }}</p>
  </div>
</template>
