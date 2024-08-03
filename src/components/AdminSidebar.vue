<template>
  <sidebar-menu :menu="menu" />
</template>

<script setup lang="js">
import { defineProps } from 'vue';

 defineProps({
  menu: {
    type: Array,
    required: true,
  }
});
</script>
<style scoped>
.v-sidebar-menu {
  max-width: 200px !important;
}
</style>