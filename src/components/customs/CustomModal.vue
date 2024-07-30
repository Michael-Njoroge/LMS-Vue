<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true" ref="modalElement">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="customModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
          <button type="button" class="btn btn-primary" @click="handleConfirm">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import { Modal } from 'bootstrap';

defineProps({
  title: {
    type: String,
    default: 'Modal Title'
  }
});

const emit = defineEmits(['confirm']);

const modalElement = ref(null);
let modalInstance = null;

const hideModal = () => {
  if (modalInstance) {
    modalInstance.hide();
  }
};

const handleConfirm = () => {
  emit('confirm');
  hideModal();
};

onMounted(() => {
  modalInstance = new Modal(modalElement.value);
});

onUnmounted(() => {
  if (modalInstance) {
    modalInstance.dispose();
  }
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
