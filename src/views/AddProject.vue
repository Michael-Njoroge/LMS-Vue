<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="d-flex justify-content-between">
            <h4 class="fw-bold mt-3">{{ projectId ? "Edit" : "Add" }} Project</h4>
            <div class="d-flex align-items-center flex-row">
              <span class="material-icons fs-5">arrow_back</span>
              <router-link
                class="border-1 top-2 ms-1 mb-0"
                :style="{ cursor: 'pointer' }"
                to="/admin/project-list"
              >
                Go Back
              </router-link>
            </div>
          </div>

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
              feedbackInvalid="Title is required"
              placeholder="Enter project title"
              type="text"
              required
            />

            <CustomInput
              v-model="data.price"
              customClass="mb-3 mt-1"
              id="validationServer02"
              feedbackInvalid="Project price is required"
              placeholder="Enter project price"
              type="number"
              min="1"
              required
            />

            <CustomSelect
              v-model="data.category_id"
              customClass="my-3"
              :options="categoryOptions"
              feedbackInvalid="Category is required"
              disabledOption="Select project category"
              required
            />

            <div class="d-flex flex-column gap-5 mb-4">
              <div class="my-3">
                <CustomQuill
                  v-model="keywordsContent"
                  placeholder="Enter keywords separated by commas"
                />
              </div>

              <div class="my-3">
                <CustomQuill
                  v-model="description"
                  placeholder="Enter project description"
                />
              </div>
            </div>

            <!-- <CustomUpload dropzoneId="customDropzone" previewContainerId="customPreviews" :message="'Drag files here to upload or click to select'"/> -->

            <CustomButton
              :disabled="isLoading"
              :style="{ cursor: isLoading ? 'not-allowed' : 'pointer' }"
              type="submit"
              color="success"
              :text="projectId ? 'Edit Project' : 'Add Project'"
              loadingText="Please wait..."
              :isLoading="isLoading"
              customClass="text-white mt-3 w-100 fs-6"
              shape="rounded-1"
            >
            </CustomButton>
          </CForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
// import CustomUpload from '@/components/CustomUpload.vue';
import CustomSelect from '@/components/CustomSelect.vue';
import CustomQuill from '@/components/CustomQuill.vue';
import { CForm } from '@coreui/vue';

const data = ref({
  title: '',
  price: '',
  category_id: '',
  keywords: [],
  description: '',
});

const keywordsContent = ref('');
const description = ref('');
const store = useStore();
const router = useRouter();
const validatedCustom01 = ref(false);
const isLoading = computed(() => store.getters['projects/isLoading']);
const path = window.location.pathname;
const projectId = path.split('/')[3];

const categoryOptions = computed(() => {
  return store.getters['projectCategories/getProjectCats'].map(cat => ({
    value: cat.id,
    text: cat.title,
  }));
});

const handleSave = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      const keywordsText = keywordsContent.value;
      data.value.keywords = keywordsText.split(',').map(keyword => keyword.trim());
      data.value.description = description.value;

      if (projectId) {
        await store.dispatch('projects/updateProject', { id: projectId, ...data.value });
      } else {
        await store.dispatch('projects/addProject', data.value);
      }

      router.push('/admin/project-list');
    } catch (error) {
      console.error('Save project failed:', error);
    }
  }
  validatedCustom01.value = true;
};

onMounted(async () => {
  try {
    if (projectId) {
      await store.dispatch('projects/getProject', projectId);
      const project = store.getters['projects/getProject'];
      if (project) {
        data.value = {
          title: project.title,
          price: project.price,
          category_id: project.category?.id,
          keywords: project.keywords,
          description: project.description,
        };
        keywordsContent.value = project.keywords.join(', ');
        description.value = project.description;
      }
    }
    await store.dispatch('projectCategories/getProjectCats');
  } catch (error) {
    console.error('Failed to fetch project data or categories:', error);
  }
});
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
}
</style>
