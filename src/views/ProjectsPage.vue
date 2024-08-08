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

        <div v-if="isLoading" class="mt-4 d-flex justify-content-center">
          <vue-spinner-dots :style="{ width: '60px', height: '60px' }" />
        </div>
        <div v-else>
          <CustomTable
            class="mt-3"
            captionTop="List of Tutorials"
            :columns="columns"
            :items="items"
          >
            <template #actions="{ item }">
              <div class="d-flex gap-4 align-items-center justify-content-center">
                <router-link style="cursor: pointer;" :to="{ name: 'EditProject', params: { id: item.id } }">
                  <span class="material-icons text-primary">edit</span>
                </router-link>
                <a @click="confirmDelete(item)" href="javascript:void(0)">
                  <span class="material-icons text-danger">delete</span>
                </a>
              </div>
            </template>
          </CustomTable>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import CustomTable from '@/components/CustomTable.vue';
import CustomButton from '@/components/CustomButton.vue';
import swal from 'sweetalert';
import { useToast } from 'vue-toastification';
import { VueSpinnerDots } from 'vue3-spinners'; // Ensure this import is correct

const store = useStore();
const toast = useToast();
const router = useRouter();

const columns = ref([
  { key: 'title', label: 'Project Name' },
  { key: 'price', label: 'Price' },
  { key: 'description', label: 'Description' },
  { key: 'author', label: 'Author' },
  { key: 'created_at', label: 'Created At' },
  { key: 'action', label: 'Actions' },
]);

const items = computed(() => store.getters['projects/getProjects']);
const isLoading = computed(() => store.getters['projects/isLoading']);

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

const openModal = async () => {
  router.push('/admin/project')
}
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
