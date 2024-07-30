<template>
  <div class="custom-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      :id="id"
      :name="name"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="form-control"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script setup lang="js">
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: {
    type: String,
    required: true
  },
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
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.custom-select {
  margin-bottom: 1rem;
}

.custom-select label {
  margin-bottom: 0.5rem;
  display: block;
}

.custom-select .form-control {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>