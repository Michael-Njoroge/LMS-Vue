<template>
    <CModal 
      :visible="visible"
      @close="closeModal"
      aria-labelledby="LiveDemoExampleLabel"
      :style="modalStyle"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">{{modalTitle}}</CModalTitle>
      </CModalHeader>
      <CModalBody><slot></slot></CModalBody>
      <CModalFooter class="mt-3">
<!--         <CButton style="text-transform:initial ;" :color ="colorCancel" @click="closeModal">
          Close
        </CButton> -->
        <CButton :disabled="disabled" style="text-transform:initial ;" :type="type" :color ="colorSave" @click="saveChanges">{{buttonText}}</CButton>
      </CModalFooter>
    </CModal>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import { CModal, CModalHeader, CModalBody, CModalTitle, CButton, CModalFooter} from '@coreui/vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  modalTitle: {
    type: String,
    default: 'Modal Title',
  },
  colorCancel: {
    type: String,
    default: 'danger',
  },
  colorSave: {
    type: String,
    default: 'primary',
  },
  buttonText: {
    type: String,
    default: 'Save changes',
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: String,
    default: 'false',
  },
  width: {
    type: String,
    default: '500px', // Default width of the modal
  },
});

const emit = defineEmits(['update:visible', 'save']);

const closeModal = () => {
  emit('update:visible', false);
};

const saveChanges = (event) => {
  emit('save', event);
};

const modalStyle = computed(() => ({
  '--cui-modal-width': props.width,
}));
</script>

<style scoped>

</style>
