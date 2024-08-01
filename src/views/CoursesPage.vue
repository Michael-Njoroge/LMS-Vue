<template>
 <section class="py-5">
    <div class="container-fluid">
    <div class="row">
      <div class="col-4 mx-auto ">
       <CustomCard cardTitle="Card Title" buttonText="Click Me" customClass="mb-3" cardContent="Some quick example text to build on the card title and make up the bulk of the card's content" />
      </div>
    </div>
  </div>
 </section>
</template>
<script setup>
  import CustomCard from '@/components/CustomCard.vue';
</script>
<style scoped></style>
