<script setup lang="ts">
import Title from '@/components/Title';

const o = ref({
  test: 'test'
});
</script>

<template>
  <Title :value="'You did it!'" />
  <p>{{ o }}</p>
</template>

<style scoped></style>
