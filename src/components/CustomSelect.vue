<template>
  <div :class="customClass">
     <CFormSelect :label="label" :name="name" :id="id">
      <option disabled selected>{{disabledOption}}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
      </option>
    </CFormSelect>
  </div>
</template>
<script setup lang="js">
import { defineProps } from 'vue';
import { CFormSelect } from '@coreui/vue';

defineProps({
  disabledOption: String,
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
});

</script>

<style scoped></style>