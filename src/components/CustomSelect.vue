<template>
  <div  >
     <CFormSelect :class="customClass" :feedbackInvalid="feedbackInvalid"  :required="required" :label="label" :name="name" :id="id" v-model="selected">
      <option selected="" disabled="" value="">{{disabledOption}}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
      </option>
    </CFormSelect>
  </div>
</template>
<script setup lang="js">
import { defineProps,watch,defineEmits,ref } from 'vue';
import { CFormSelect } from '@coreui/vue';

const props = defineProps({
  modelValue: {
      type: [String, Number, Object, null],
      required: true,
  },
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

const emits = defineEmits(['update:modelValue']);

const selected = ref(props.modelValue);

watch(selected, (newValue) => {
  emits('update:modelValue', newValue);
});

watch(() => props.modelValue, (newValue) => {
  selected.value = newValue;
});

</script>

<style scoped></style>