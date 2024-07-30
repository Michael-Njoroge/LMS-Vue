<template>
  <div class="custom-upload mt-3">
    <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
    <button type="button" class="btn btn-success " @click="triggerFileInput">Choose File</button>
    <span v-if="fileName">{{ fileName }}</span>
    <button type="button" class="btn btn-secondary" @click="clearFile" v-if="fileName">Clear</button>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const fileInput = ref(null);
const fileName = ref('');

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
  }
};

const clearFile = () => {
  fileInput.value.value = '';
  fileName.value = '';
};
</script>

<style scoped>
.custom-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
