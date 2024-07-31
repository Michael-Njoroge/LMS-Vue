<template>
  <div :class="customStyle">
    <CButton :color="customColor" @click="() => { visibleLiveDemo = true }">{{openButton}}</CButton>
    <CModal 
      :visible="visibleLiveDemo"
      @close="() => { visibleLiveDemo = false }"
      aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">{{modalTitle}}</CModalTitle>
      </CModalHeader>
      <CModalBody>{{modalBody}}</CModalBody>
      <CModalFooter>
        <CButton :color ="colorCancel" @click="() => { visibleLiveDemo = false }">
          Close
        </CButton>
        <CButton :color ="colorSave" >{{buttonText}}</CButton>
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { CModal, CModalHeader, CModalBody, CModalTitle, CButton, CModalFooter} from '@coreui/vue';

defineProps({
  modalTitle: {
    type: String,
    default: 'Modal Title'
  },
  modalBody: {
    type: String,
    default: 'Modal Body'
  },
  colorCancel: {
    type: String,
    default: 'danger'
  },
  colorSave: {
    type: String,
    default: 'primary'
  },
  buttonText: {
    type: String,
    default: 'Button'
  },
  openButton: {
    type: String,
    default: 'Open Modal'
  },
  customColor: {
    type: String,
    default: 'primary'
  },
  customStyle: {
    type: String,
    default:''
  }
});

const visibleLiveDemo = ref(false)
</script>

<style scoped></style>
