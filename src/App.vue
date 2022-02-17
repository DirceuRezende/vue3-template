<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Home from "@/views/Home.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Home msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@use "@/styles/global.scss";
</style>
