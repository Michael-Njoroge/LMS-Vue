<template>
     <CButton :color="color" :shape="shape" :class="customClass" :style="inlineStyles">{{ text }}</CButton>
</template>

<script setup lang="js">
import { CButton } from '@coreui/vue';
import { defineProps, computed } from 'vue';

defineProps({
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
    customClass: {
        type: String,
        default: ''
    }
});

const inlineStyles = computed(() => ({
    width: 'fit-content',
    display: 'inline-block'
}));
</script>

