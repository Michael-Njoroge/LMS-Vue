<template>
  <button
    :type="type"
    :class="buttonClasses"
    :style="inlineStyles"
    :disabled="isLoading"
  >
    <template v-if="isLoading">
      <div class="d-flex align-items-center text-center justify-content-center">
        <div class="spinner-border spinner-border-sm me-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span>{{ loadingText }}</span>
      </div>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  shape: {
    type: String,
    default: 'rounded-pill'
  },
  text: {
    type: String,
    default: 'button'
  },
  loadingText: {
    type: String,
    default: 'Submitting...'
  },
  type: {
    type: String,
    default: 'button'
  },
  customClass: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'filled'
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});

const buttonClasses = computed(() => {
  return [
    'btn',
    `btn-${props.variant === 'filled' ? props.color : 'outline-' + props.color}`,
    props.shape,
    props.customClass,
  ];
});

const inlineStyles = computed(() => ({
  width: 'fit-content',
  display: 'inline-block',
  textTransform: 'initial'
}));
</script>

<style scoped>
.spinner-border {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
