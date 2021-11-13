<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <button
    class="
      bg-blue-600
      text-white
      py-4
      px-9
      rounded-full
      shadow-xl
      hover:bg-red-500
      transition
      duration-300
      ease-in-out
      transform
      hover:scale-110
    "
  >
    {{ title }}
  </button>
</template>
