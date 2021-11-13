<script setup>
import Logo from "./sections/logo.vue";
import Nav from "./sections/nav.vue";
import Icon from "./sections/icon.vue";
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-x-16 items-center py-10">
      <Logo />

      <Nav />
    </div>

    <Icon />
  </div>
</template>
