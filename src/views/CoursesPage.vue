<template>
 <section class="card-container" >
    <div class="container-fluid">
    <div class="row my-2 ">
      <div class="col-4 " v-for="(item, index) in items" :key="index">
       <CustomCard :cardTitle="item?.title" customClass="" :cardContent="item?.description" />
      </div>
    </div>
  </div>
 </section>
</template>
<script setup>
  import CustomCard from '@/components/CustomCard.vue';
  import { onMounted, ref } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore()
  const items = ref([]);

  onMounted(async () => {
  try {
    await store.dispatch('courses/getCourses');
    items.value = store.getters['courses/getCourses'];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }
});
</script>
<style scoped>
.container-fluid{
  margin-top: 3rem!important;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adjust as needed */
}

 
.col-md-4 {
  display: flex;
  justify-content: center;
}

 
</style>
