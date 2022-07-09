<script setup lang="ts">
interface Props {
  msg?: string;
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello'
});
</script>

<template>Feat</template>

<style lang="scss" scoped>
@use 'Feat';
</style>
