<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <h4 class="text-3xl font-semibold tracking-wide">{{ title }}</h4>
</template>
