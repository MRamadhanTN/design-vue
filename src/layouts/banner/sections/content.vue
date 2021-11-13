<script setup>
import Button from "../components/button.vue";
import TitleBanner from "../components/titleBanner.vue";
import Sub from "../components/subtitle.vue";
</script>

<template>
  <div class="space-y-7">
    <TitleBanner title="Time to Relax" />

    <Sub title="for better mind" />

    <!-- Line -->
    <hr class="w-16 border-blue-500 border-t-2" />

    <!-- content -->
    <div class="space-y-16">
      <p class="text-sm text-gray-500 font-bold mt-9">
        Don't make things too complicated.<br />
        Try to relax, enjoy every moment,<br />
        get used to everything.
      </p>
      <!-- button -->
      <Button title="Get started" />
    </div>
  </div>
</template>
