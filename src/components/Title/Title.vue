<script setup lang="ts">
type TitleProps = {
  value: string;
};

defineProps<TitleProps>();
</script>
<template>
  <h1>{{ value }}</h1>
</template>
