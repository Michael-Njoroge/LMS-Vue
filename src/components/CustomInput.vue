<template>
  <div :class="customClass">
    <CFormLabel for="validationCustomUsername">{{ label }}</CFormLabel>
    <CInputGroup class="has-validation">
      <CInputGroupText id="inputGroupPrepend">
        <span class="material-icons fs-6">{{ icon }}</span>
      </CInputGroupText>
      <CFormInput
        v-model="inputValue"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :name="name"
        :valid="isValid"
        :invalid="isInvalid"
        @blur="validateInput"
        :required="required"
        :aria-describedby="`${id}-addon`"
        :feedbackInvalid="feedbackInvalid"
      />
    </CInputGroup>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { CFormInput, CInputGroup, CInputGroupText, CFormLabel } from '@coreui/vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'person',
  },
  required: {
    type: Boolean,
    default: false,
  },
  customClass: String,
  feedbackInvalid: {
    type: String,
    default: 'Please provide a valid input.',
  },
});

const emits = defineEmits(['update:modelValue']);
const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emits('update:modelValue', newValue);
});
</script>

<style scoped></style>
