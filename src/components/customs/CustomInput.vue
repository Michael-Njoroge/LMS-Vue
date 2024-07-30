<template>
  <div class="custom-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      class="form-control"
    />
  </div>
</template>

<script setup lang="js">
import { defineProps } from 'vue';

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
  placeholder: {
    type: String,
    default: ''
  }
})

</script>

<style scoped>
.custom-input {
  margin-bottom: 1rem;
}

.custom-input label {
  margin-bottom: 0.5rem;
  display: block;
}

.custom-input .form-control {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
