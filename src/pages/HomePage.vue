<template>
  <div>
    <CustomInput v-model="inputValue" label="Name" placeholder="Type here..." />
    <CustomSelect v-model="selectedValue" label="Select an Option" :options="selectOptions" />

      <button type="button" class="btn btn-primary" @click="showModal">
      Open Modal
    </button>

    <CustomModal title="My Custom Modal" @confirm="handleModalConfirm" ref="customModalRef">
      <p>This is the content of the modal.</p>
    </CustomModal>


    <CustomCard
      title="Card Title"
      buttonText="Click Me"
      customClass="my-custom-class"
      @buttonClick="handleCardButtonClick"
    >
      This is the content of the card.
    </CustomCard>
    <CustomUpload />

  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import CustomInput from '@/components/customs/CustomInput.vue';
import CustomSelect from '@/components/customs/CustomSelect.vue';
import CustomModal from '@/components/customs/CustomModal.vue';
import CustomCard from '@/components/customs/CustomCard.vue';
import CustomUpload from '@/components/customs/CustomUpload.vue';
import { Modal } from 'bootstrap';

const inputValue = ref('');
const selectedValue = ref('');
const selectOptions = ref([
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' }
]);

const customModalRef = ref(null);

const showModal = () => {
  if (customModalRef.value) {
    const modalElement = customModalRef.value.$refs.modalElement;
    const modalInstance = new Modal(modalElement);
    modalInstance.show();
  }
};

const handleModalConfirm = () => {
  alert('Modal confirmed!');
};

const handleCardButtonClick = () => {
  alert('Card button clicked!');
};

</script>

<style scoped></style>
