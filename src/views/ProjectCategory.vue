<template>
  <section class="">
    <div class="container-fluid">
      <div class="row">
        <CustomButton @click="openModal('add')" shape="rounded-1" class="mb-2 text-white fw-bold mx-3" text="New Category" color="success"></CustomButton>

        <CustomModal
          :visible="visibleModal"
          @update:visible="visibleModal = $event"
          @save="handleSave"
          :modalTitle="modalTitle"
          colorCancel="secondary"
          colorSave="success text-white w-100"
          buttonText="Submit"
          type="submit"
          :disabled="isFormInvalid"
        >
          <CForm novalidate :validated="validatedCustom01" @submit.prevent="handleSave" class="row g-3 needs-validation">
            <CustomInput
              v-model="data.title"
              customClass="my-3"
              icon="grid_on"
              feedbackInvalid="Category name is required"
              placeholder="Category Name"
              type="text"
              required
            />
          </CForm>
        </CustomModal>

        <CustomTable
          class="mt-2"
          captionTop="List of project Categories"
          :columns="columns"
          :items="items"
        >
          <template #actions="{ item }">
            <div class="d-flex gap-4 align-items-center justify-content-center">
              <a
                @click="openModal('edit', item)"
                style="cursor: pointer;"
                href="javascript:void(0)"
              >
                <span class="material-icons text-primary">edit</span>
              </a>
              <a
                @click="confirmDelete(item)"
                href="javascript:void(0)"
              >
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
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CustomTable from '@/components/CustomTable.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import CustomModal from '@/components/CustomModal.vue';
import { CForm } from '@coreui/vue';
import swal from 'sweetalert';
import { useToast } from 'vue-toastification';

const store = useStore();
const toast = useToast();

const columns = ref([
  { key: 'title', label: 'Title' },
  { key: 'slug', label: 'Slug' },
  { key: 'created_at', label: 'Created At' },
  { key: 'action', label: 'Actions' },
]);

const visibleModal = ref(false);
const validatedCustom01 = ref(false);
const modalTitle = ref('Add New Category');
const editMode = ref(false);
const currentCategory = ref(null);

const openModal = (mode, category = null) => {
  editMode.value = mode === 'edit';
  modalTitle.value = editMode.value ? 'Edit Category' : 'Add New Category';
  if (editMode.value && category) {
    data.value.title = category.title;
    currentCategory.value = category;
  } else {
    data.value.title = '';
    currentCategory.value = null;
  }
  visibleModal.value = true;
};

const data = ref({
  title: ''
});

const isFormInvalid = computed(() => data.value.title === '');
const items = computed(() => store.getters['projectCategories/getProjectCats']);

const handleSave = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      if (editMode.value) {
        await store.dispatch('projectCategories/updateProjectCat', { id: currentCategory.value.id, ...data.value });
      } else {
        await store.dispatch('projectCategories/addProjectCat', data.value);
      }
      visibleModal.value = false;
      data.value.title = '';
      await store.dispatch('projectCategories/getProjectCats');
    } catch (error) {
      console.error('Save category failed:', error);
    }
  }
  validatedCustom01.value = true;
};

onMounted(async () => {
  try {
    await store.dispatch('projectCategories/getProjectCats');
  } catch (error) {
    console.error("Failed to fetch project categories:", error);
  }
});

const confirmDelete = (category) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this category!",
    icon: "warning",
    buttons: ["No, Cancel", "Yes, delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDeleteCategory(category?.id);
    } else {
      toast.success("Category is safe!");
    }
  });
};

const handleDeleteCategory = (id) => {
  store.dispatch('projectCategories/deleteProjectCat', id);
  setTimeout(() => {
    store.dispatch('projectCategories/getProjectCats');
  }, 100);
};

</script>

<style>
.no-arrow::after {
  display: none!important;
}
.dropdown-menu {
  position: absolute!important;
  z-index: 1050!important;  
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
  box-shadow: none!important; 
  border: none!important; 
  outline: none!important; 
}

.btn-close:focus {
  box-shadow: none!important;
  outline: none!important;
}
</style>
