<template>
  <CForm>
    <CFormTextarea
      :id="id"
      :label="label"
      :rows="rows"
      :text="text"
      :cols="cols"
      :name="name"
      :placeholder="placeholder"
    ></CFormTextarea>
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
});

</script>

<style scoped></style>

