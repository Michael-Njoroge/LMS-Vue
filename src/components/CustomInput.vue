<template>
  <CForm>
    <CFormInput
      :type="type"
      :id="id"
      :label="label"
      :placeholder="placeholder"
      :text="text"
      :name="name"
      :modelValue="modelValue"
      aria-describedby="exampleFormControlInputHelpInline"
    />
  </CForm>
</template>

<script setup lang="js">
import { defineProps } from 'vue';
import { CFormInput, CForm } from '@coreui/vue';

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

</script>

<style scoped></style>
