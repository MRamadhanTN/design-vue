<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <a href="#" class="hover:text-blue-400 transition duration-200">{{
    title
  }}</a>
</template>
