<template>
  <footer class="container">
    <div class="row">
      <div class="col-12">
        <h1>News Letter</h1>
      </div>
      <div class="col-3">
        <h5>Link</h5>
      </div>
       <div class="col-3">
        <h5>Link</h5>
      </div>
       <div class="col-3">
        <h5>Link</h5>
      </div>
       <div class="col-3">
        <h5>Link</h5>
      </div>
    </div>
    <!--  <p>&copy; {{currentYear}} <strong>Lms/Job-Portal.</strong> All rights reserved.</p>
      <p class="ms-2">
        <a href="https://www.linkedin.com/in/michael-njoroge-552a1a265/" target="_blank" class="text-dark"><strong>LinkedIn</strong></a>&nbsp; | &nbsp;
        <a href="https://github.com/Michael-Njoroge" target="_blank" class="text-dark"><strong>GitHub</strong></a>
      </p> -->
  </footer>
</template>

<script>
export default {
data() {
  return {
    currentYear: new Date().getFullYear() 
  };
},
methods: {
 
},
};
</script>

<style scoped>
</style>
