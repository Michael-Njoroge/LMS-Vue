<template>
  <CCardFooter class="d-flex justify-content-center align-items-center gap-4 bg-transparent">
    <i @click="onWishlist" class="far fa-heart mx-2" style="cursor: pointer;"></i>
    <i @click="onView" class="fas fa-eye mx-2" style="cursor: pointer;"></i> 
  </CCardFooter>
</template>

<script setup lang="js">
import { defineEmits } from 'vue';
import { CCardFooter } from '@coreui/vue';

const emit = defineEmits(['view', 'wish']);

const onView = () => emit('view');
const onWishlist = () => emit('wish');
</script>

<style scoped>
.card-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.card-footer .fa {
  font-size: 1.5rem; /* Adjust the size as needed */
  color: #007bff;
}

.card-footer i {
  margin: 0 1rem; /* Horizontal spacing between icons */
}
</style>
