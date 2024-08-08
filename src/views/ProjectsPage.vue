<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <CustomButton
          @click="openModal('add')"
          shape="rounded-1"
          class="mb-1 text-white fw-bold mx-3"
          text="New Project"
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
              feedbackInvalid="Project name is required"
              placeholder="Enter project name"
              type="text"
              required
            />
            <CustomInput
              v-model="data.price"
              icon="attach_money"
              customClass="mb-3 mt-1"
              id="validationServer02"
              placeholder="Enter price"
              min="1"
              type="number"
            />
            <CustomSelect
              v-model="data.category_id"
              customClass="my-3"
              :options="categoryOptions"
              feedbackInvalid="Category is required"
              disabledOption="Select project category"
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
  { key: 'title', label: 'Project Name' },
  { key: 'price', label: 'Price' },
  { key: 'description', label: 'Description' },
  { key: 'author', label: 'Author' },
  { key: 'created_at', label: 'Created At' },
  { key: 'action', label: 'Actions' },
]);

const visibleModal = ref(false);
const validatedCustom01 = ref(false);
const modalTitle = ref('Add New Project');
const editMode = ref(false);
const currentTutorial = ref(null);

const data = ref({
  title: '',
  price: '',
  category_id: '',
  keywords: [],
  description: '',
});

const categoryOptions = computed(() => {
  return store.getters['projectCategories/getProjectCats'].map(cat => ({
    value: cat.id,
    text: cat.title,
  }));
});

const isFormInvalid = computed(() => data.value.title === '');
const items = computed(() => store.getters['projects/getProjects']);

// Ref for storing Quill editor contents
const keywordsContent = ref('');
const description = ref('');

const openModal = async (mode, tutorial = null) => {
  editMode.value = mode === 'edit';
  modalTitle.value = editMode.value ? 'Edit Project' : 'Add New Project';
  await nextTick();

  if (editMode.value && tutorial) {
    data.value.title = tutorial.title;
    data.value.price = tutorial.price;
    data.value.category_id = tutorial?.category?.id;
    keywordsContent.value = tutorial.keywords;
    description.value = tutorial.description;
    currentTutorial.value = tutorial;
  } else {
    data.value.title = '';
    data.value.price = '';
    data.value.category_id = '';
    keywordsContent.value = '';
    description.value = '';
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
      // Convert keywords description to array
      const keywordsText = keywordsContent.value;
      data.value.keywords = keywordsText.split(',').map(keyword => keyword.trim());

      // Assign description directly
      data.value.description = description.value;

      if (editMode.value) {
        // alert(JSON.stringify(data.value))
        await store.dispatch('projects/updateProject', { id: currentTutorial.value.id, ...data.value });
      } else {
        await store.dispatch('projects/addProject', data.value);
        // alert(JSON.stringify(data.value))
      }
      visibleModal.value = false;
      data.value.title = '';
      await store.dispatch('projects/getProjects');
    } catch (error) {
      console.error('Save project failed:', error);
    }
  }
  validatedCustom01.value = true;
};

onMounted(async () => {
  try {
    await store.dispatch('projectCategories/getProjectCats');
    await store.dispatch('projects/getProjects');
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }
});

const confirmDelete = (project) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this project!",
    icon: "warning",
    buttons: ["No, Cancel", "Yes, delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDeleteProject(project.id);
    } else {
      toast.success("Project is safe!");
    }
  });
};

const handleDeleteProject = async (id) => {
  await store.dispatch('projects/deleteProject', id);
  setTimeout(() => {
    store.dispatch('projects/getProjects');
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
