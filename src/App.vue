<template>
  <div class="layout">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <PageHeader />
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container">
        <div class="row">
          <HomePage />
        </div>
      </div>
    </section>
   
    <PageFooter />
  </div>
</template>

<script setup lang="js">
import PageFooter from "@/components/footer/PageFooter.vue";
import PageHeader from "@/components/header/PageHeader.vue";
import HomePage from "@/pages/HomePage.vue";
</script>

<style scoped>
/* Ensure the content sections have some styles for visibility */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-header {
  padding: 20px;
  background-color: #f8f9fa;
}

.content {
  flex: 1;
  padding: 20px;
}

.content-container {
  padding: 20px;
  background-color: #e9ecef;
}
</style>
