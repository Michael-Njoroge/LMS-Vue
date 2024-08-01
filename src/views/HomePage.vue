<template>
 <section class="py-5">
    <div class="container-fluid">
    <div class="row">
      <div class="col-4 mx-auto ">
       <CustomCard cardTitle="Card Title" customClass="mb-3" cardContent="Some quick example text to build on the card title and make up the bulk of the card's content" />
      </div>
    </div>
  </div>
 </section>
</template>
<script setup>
  import CustomCard from '@/components/CustomCard.vue';
</script>
<style scoped></style>










<!-- <template>
  <div class="container mb-3">
    <CustomInput v-model="inputValue" text="Must be 8-20 characters long" label="Email address" placeholder="name@example.com" />

    <CustomSelect v-model="selectedValue" label="Selection" disabledOption="Select an Option" :options="selectOptions" customClass="m-3" />

    <CustomModal modalTitle="My Custom Modal" modalBody="This is the content of the modal." customStyle="mb-3"  ref="customModalRef" />

    <CustomCard cardTitle="Card Title" buttonText="Click Me" customClass="mb-3" cardContent="Some quick example text to build on the card title and make up the bulk of the card's content" />

  <CustomUpload dropzoneId="customDropzone" previewContainerId="customPreviews" :message="'Drag files here to upload or click to select'"/>

 <CustomTextarea v-model="text" id="custom-textarea" name="customTextarea" placeholder="Enter your text here..."
      label="Home Text Area"
      :customStyle="{ border: '2px solid #007bff' }"
    />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import CustomModal from '@/components/CustomModal.vue';
import CustomCard from '@/components/CustomCard.vue';
import CustomUpload from '@/components/CustomUpload.vue';
import CustomTextarea from '@/components/CustomTextarea.vue';

const inputValue = ref('');
const selectedValue = ref('');
const selectOptions = ref([
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' }
]);

</script>

<style scoped>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
