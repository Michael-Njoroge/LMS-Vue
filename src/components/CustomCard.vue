<template>
  <CCard :style="style" :class="customClass">
    <CCardImage orientation="top" :src="imageSrc" />
    <CCardBody>
      <CCardTitle>{{ cardTitle }}</CCardTitle>
      <CCardText>{{ cardContent }}</CCardText>
    </CCardBody>
    <CardFooterIcons @view="handleView" @wishlist="handleWishlist" @settings="handleSettings" />
  </CCard>
</template>

<script setup lang="js">
import { defineProps } from 'vue';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue';
import CardFooterIcons from '@/components/CardFooterIcons.vue';

defineProps({
  cardTitle: {
    type: String,
    required: true
  },
  cardContent: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary'
  },
  imageSrc: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: '#'
  }
});

const handleView = () => {
  console.log('View action triggered');
};

const handleWishlist = () => {
  console.log('Wish-list action triggered');
};
const handleSettings = () => {
  console.log('Settings action triggered');
};
</script>

<style scoped>
/* Add your card styles here */
</style>
