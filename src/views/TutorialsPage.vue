<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <CustomButton
          @click="openModal('add')"
          shape="rounded-1"
          class="mb-1 text-white fw-bold mx-3"
          text="New Tutorial"
          color="success"
        ></CustomButton>

        <CustomModal
          :visible="visibleModal"
          @update:visible="visibleModal = $event"
          @save="handleSave"
          :modalTitle="modalTitle"
          colorCancel="secondary"
          colorSave="success text-white w-100"
          :disabled="isFormInvalid"
          buttonText="Submit"
          type="submit"
          width="700px"
        >
          <CForm
            novalidate
            :validated="validatedCustom01"
            @submit.prevent="handleSave"
            class="row needs-validation"
          >
            <CustomInput
              v-model="data.title"
              icon="grid_on"
              id="validationServer01"
              feedbackInvalid="Tutorial name is required"
              placeholder="Enter tutorial name"
              type="text"
              required
            />
            <CustomInput
              v-model="data.topic_name"
              customClass="mb-3 mt-1"
              id="validationServer02"
              feedbackInvalid="Topic name is required"
              placeholder="Enter topic name"
              type="text"
              required
            />
            <CustomSelect
              v-model="data.category"
              customClass="my-3"
              :options="categoryOptions"
              feedbackInvalid="Category is required"
              disabledOption="Select category"
              required
            />
            <div class="d-flex flex-column gap-5">
              <div class="my-3">
              <CustomQuill v-model="keywordsContent" placeholder="Enter keywords separated by commas" />
            </div>
            <div class="my-3">
              <CustomQuill v-model="content" placeholder="Enter tutorial content" />
            </div>
            </div>
          </CForm>
        </CustomModal>

        <CustomTable
          class="mt-3"
          captionTop="List of Tutorials"
          :columns="columns"
          :items="items"
        >
          <template #actions="{ item }">
            <div class="d-flex gap-4 align-items-center justify-content-center">
              <a @click="openModal('edit', item)" style="cursor: pointer;" href="javascript:void(0)">
                <span class="material-icons text-primary">edit</span>
              </a>
              <a @click="confirmDelete(item)" href="javascript:void(0)">
                <span class="material-icons text-danger">delete</span>
              </a>
            </div>
          </template>
        </CustomTable>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useStore } from 'vuex';
import CustomTable from '@/components/CustomTable.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import CustomModal from '@/components/CustomModal.vue';
import CustomQuill from '@/components/CustomQuill.vue';
import { CForm } from '@coreui/vue';
import swal from 'sweetalert';
import { useToast } from 'vue-toastification';

const store = useStore();
const toast = useToast();

const columns = ref([
  { key: 'title', label: 'Title' },
  { key: 'topic_name', label: 'Topic Name' },
  { key: 'content', label: 'Content' },
  { key: 'created_at', label: 'Created At' },
  { key: 'action', label: 'Actions' },
]);

const visibleModal = ref(false);
const validatedCustom01 = ref(false);
const modalTitle = ref('Add New Tutorial');
const editMode = ref(false);
const currentTutorial = ref(null);

const data = ref({
  title: '',
  topic_name: '',
  category: '',
  keywords: [],
  content: '',
});

const categoryOptions = computed(() => {
  return store.getters['tutorialCategories/getTutCats'].map(cat => ({
    value: cat.id,
    text: cat.title,
  }));
});

const isFormInvalid = computed(() => data.value.title === '');
const items = computed(() => store.getters['tutorials/getTutorials']);

// Ref for storing Quill editor contents
const keywordsContent = ref('');
const content = ref('');

const openModal = async (mode, tutorial = null) => {
  editMode.value = mode === 'edit';
  modalTitle.value = editMode.value ? 'Edit Tutorial' : 'Add New Tutorial';
  await nextTick();

  if (editMode.value && tutorial) {
    data.value.title = tutorial.title;
    data.value.topic_name = tutorial.topic_name;
    data.value.category = tutorial?.category?.id;
    keywordsContent.value = tutorial.keywords;
    content.value = tutorial.content;
    currentTutorial.value = tutorial;
  } else {
    data.value.title = '';
    data.value.topic_name = '';
    data.value.category = '';
    keywordsContent.value = '';
    content.value = '';
    currentTutorial.value = null;
  }
  visibleModal.value = true;
};

const handleSave = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      // Convert keywords content to array
      const keywordsText = keywordsContent.value;
      data.value.keywords = keywordsText.split(',').map(keyword => keyword.trim());

      // Assign content directly
      data.value.content = content.value;

      if (editMode.value) {
        // alert(JSON.stringify(data.value))
        await store.dispatch('tutorials/updateTutorial', { id: currentTutorial.value.id, ...data.value });
      } else {
        await store.dispatch('tutorials/addTutorial', data.value);
        // alert(JSON.stringify(data.value))
      }
      visibleModal.value = false;
      data.value.title = '';
      await store.dispatch('tutorials/getTutorials');
    } catch (error) {
      console.error('Save tutorial failed:', error);
    }
  }
  validatedCustom01.value = true;
};

onMounted(async () => {
  try {
    await store.dispatch('tutorialCategories/getTutCats');
    await store.dispatch('tutorials/getTutorials');
  } catch (error) {
    console.error("Failed to fetch tutorials:", error);
  }
});

const confirmDelete = (tutorial) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this tutorial!",
    icon: "warning",
    buttons: ["No, Cancel", "Yes, delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDeleteTutorial(tutorial.id);
    } else {
      toast.success("Tutorial is safe!");
    }
  });
};

const handleDeleteTutorial = async (id) => {
  await store.dispatch('tutorials/deleteTutorial', id);
  setTimeout(() => {
    store.dispatch('tutorials/getTutorials');
  }, 100);
};
</script>

<style>
.no-arrow::after {
  display: none !important;
}
.dropdown-menu {
  position: absolute !important;
  z-index: 1050 !important;  
  top: 100%; 
  left: 0; 
  line-height: 8px;
  cursor: pointer;
}
.container-fluid,
.row {
  overflow: visible !important;
}

.btn-close {
  box-shadow: none !important; 
  border: none !important; 
  outline: none !important; 
}

.btn-close:focus {
  box-shadow: none !important;
  outline: none !important;
}
</style>
