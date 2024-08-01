<template>
     <CButton :color="color" :shape="shape" :type="type" :class="customClass" :variant="variant" :style="inlineStyles">{{ text }}</CButton>
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
    type: {
        type: String,
        default: 'button'
    },
    customClass: {
        type: String,
        default: ''
    },
    variant:String
});

const inlineStyles = computed(() => ({
    width: 'fit-content',
    display: 'inline-block',
    textTransform: 'initial'


}));
</script>

