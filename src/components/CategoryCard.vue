<template>
  <div
    class="category-card w-1/4 p-6 border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer relative"
  >
    <img :src="icon" :alt="title" class="icon-top-left w-10 h-10 absolute" />
    <h3 class="text-xl font-bold text-gray-800 mt-12">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<style scoped>
.icon-top-left {
  top: 10px;
  left: 10px;
}
</style>
