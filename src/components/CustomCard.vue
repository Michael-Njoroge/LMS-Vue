<template>
  <CCard :style="style" :class="customClass">
    <CCardImage orientation="top" :src="imageSrc" />
    <CCardBody>
      <CCardTitle>{{cardTitle}}</CCardTitle>
      <CCardText>{{cardContent}}</CCardText>
      <CButton :color="color" :href="href">{{buttonText}}</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup lang="js">
import { defineProps } from 'vue';
import { CCard, CCardImage, CCardBody, CCardTitle, CButton, CCardText} from '@coreui/vue';

defineProps({
  cardTitle: {
    type: String,
    required: true
  },
  cardContent: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: null
  },
  customClass: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  }
});

</script>

<style scoped></style>
