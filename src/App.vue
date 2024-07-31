<template>
    <div class="layout">
        <section class="content-header mb-4">
            <div class="container-fluid">
                <div class="row mb-2">
                  <PageHeader />
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <div class="content-container">
            <router-view />
        </div>
      <PageFooter />
    </div>
</template>

<script setup lang="js">
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";

</script>

<style>
  .content-header {
  padding: 20px;
  background-color: #f8f9fa;
}

.content {
  flex: 1;
  padding: 20px;
}

</style>
