<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1 class="text-6xl font-bold tracking-wide">{{ title }}</h1>
</template>
