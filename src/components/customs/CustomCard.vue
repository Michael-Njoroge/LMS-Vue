<template>
  <div class="card mt-3 " :class="customClass">
    <img v-if="imageSrc" :src="imageSrc" class="card-img-top" :alt="imageAlt">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text"><slot></slot></p>
      <button v-if="buttonText" @click="handleButtonClick" class="btn btn-primary">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script setup lang="js">
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: null
  },
  customClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['buttonClick']);

const handleButtonClick = () => {
  emit('buttonClick');
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
