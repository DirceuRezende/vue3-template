<script setup lang="ts">
type TitleProps = {
  value: string;
};

defineProps<TitleProps>();
</script>
<template>
  <h1 class="text-3xl font-bold underline">{{ value }}</h1>
</template>
