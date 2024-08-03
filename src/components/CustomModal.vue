<template>
  <div :class="customStyle">
    <CModal 
      :visible="visible"
      @close="closeModal"
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">{{modalTitle}}</CModalTitle>
      </CModalHeader>
      <CModalBody><slot></slot></CModalBody>
      <CModalFooter>
<!--         <CButton style="text-transform:initial ;" :color ="colorCancel" @click="closeModal">
          Close
        </CButton> -->
        <CButton :disabled="disabled" style="text-transform:initial ;" :type="type" :color ="colorSave" @click="saveChanges">{{buttonText}}</CButton>
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { CModal, CModalHeader, CModalBody, CModalTitle, CButton, CModalFooter} from '@coreui/vue';

defineProps({
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
  }
});

const emit = defineEmits(['update:visible', 'save']);

const closeModal = () => {
  emit('update:visible', false);
};

const saveChanges = (event) => {
  emit('save', event);
};
</script>

<style scoped>

</style>
