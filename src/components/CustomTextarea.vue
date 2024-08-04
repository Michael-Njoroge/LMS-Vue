<template>
  <CForm>
    <CFormTextarea
      :id="id"
      :label="label"
      :rows="rows"
      :cols="cols"
      :name="name"
      :placeholder="placeholder"
      :class="customClass"
      :feedbackInvalid="feedbackInvalid"
      :required="required"
    ><slot></slot></CFormTextarea>
  </CForm>
</template>
<script setup>
import { defineProps } from 'vue';
import { CFormTextarea, CForm } from '@coreui/vue';

defineProps({
  id: String,
  name: String,
  rows: {
    type: Number,
    default: 3
  },
  cols: {
    type: Number,
    default: 30
  },
  label: String,
  placeholder: {
    type: String,
    default: 'Enter your text here...'
  },
  customClass: {
    type: String,
    default: ''
  },
  feedbackInvalid: {
    type: String,
    default: 'Please provide a valid input.',
  },
  required: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped></style>

