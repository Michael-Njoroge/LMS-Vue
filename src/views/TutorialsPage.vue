<template>
  <section class="">
    <div class="container-fluid">
      <div class="row">
        <CustomButton @click="openModal('add')" shape="rounded-1" class="mb-1 text-white fw-bold mx-3" text="New Category" color="success"></CustomButton>

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
          <CForm novalidate :validated="validatedCustom01" @submit.prevent="handleSave" class="row  needs-validation">
            <CustomInput
              v-model="data.title"
              icon="grid_on"
              feedbackInvalid="Tutorial name is required"
              placeholder="Enter tutorial name"
              type="text"
              required
            />
            <CustomInput
              v-model="data.topic_name"
              customClass="mb-3 mt-1"
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
            <CustomSelect
              v-model="data.keywords"
              customClass="my-3"
              :options="keywordOptions"
              feedbackInvalid="Keyword is required"
              disabledOption="Select keyword"
              required
            />
             <CustomTextarea
              v-model="data.content"
              customClass="my-3"
              feedbackInvalid="Content is required"
              placeholder="Enter tutorial description content "
              type="text"
              required
            />
          </CForm>
        </CustomModal>

        <CustomTable
          class="mt-2"
          captionTop="List of Tutorial Categories"
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
import CustomSelect from '@/components/CustomSelect.vue';
import CustomTextarea from '@/components/CustomTextarea.vue';
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
const modalTitle = ref('Add New Tutorial');
const editMode = ref(false);
const currentCategory = ref(null);

const openModal = (mode, category = null) => {
  editMode.value = mode === 'edit';
  modalTitle.value = editMode.value ? 'Edit Category' : 'Add New Tutorial';
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
  title: '',
  topic_name: '',
  category: '',
  keywords: '',
  content: '',
});

const categoryOptions = computed(() => {
  return store.getters['tutorialCategories/getTutCats'].map(cat => ({
    value: cat.id,
    text: cat.title,
  }));
});

const keywordOptions = computed(() => {
  return store.getters['tutorialCategories/getTutCats'].map(kw => ({
    value: kw.id,
    text: kw.title,
  }));
});

const isFormInvalid = computed(() => data.value.title === '');
const items = computed(() => store.getters['tutorialCategories/getTutCats']);

const handleSave = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      if (editMode.value) {
        await store.dispatch('tutorialCategories/updateTutCategory', { id: currentCategory.value.id, ...data.value });
      } else {
        // await store.dispatch('tutorialCategories/addTutCategory', data.value);
        alert(JSON.stringify(data.value))
      }
      visibleModal.value = false;
      data.value.title = '';
      await store.dispatch('tutorialCategories/getTutCats');
    } catch (error) {
      console.error('Save category failed:', error);
    }
  }
  validatedCustom01.value = true;
};

onMounted(async () => {
  try {
    await store.dispatch('tutorialCategories/getTutCats');
  } catch (error) {
    console.error("Failed to fetch tutorial categories:", error);
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
  store.dispatch('tutorialCategories/deleteTutCat', id);
  setTimeout(() => {
    store.dispatch('tutorialCategories/getTutCats');
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
