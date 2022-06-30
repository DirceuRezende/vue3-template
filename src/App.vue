<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Home from "@/views/Home";
</script>

<template>
  <header>
    <div class="wrapper">
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
