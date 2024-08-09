<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="d-flex justify-content-between">
            <h4 class="fw-bold mt-3">Update Profile</h4>
            <div class="d-flex align-items-center flex-row">
              <a href="javascript:void(0)" @click="handleToggle">
                <span class="material-icons">
                  edit_square
                </span>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <CForm
                novalidate
                :validated="validatedCustom01"
                @submit.prevent="handleSave"
                class="row needs-validation"
              >
                <CustomInput
                  v-model="data.firstname"
                  id="validationServerFirstname"
                  feedbackInvalid="Firstname is required"
                  placeholder="Enter firstname"
                  type="text"
                  :disabled="!editMode"
                  required
                />

                <CustomInput
                  v-model="data.lastname"
                  id="validationServerLastname"
                  feedbackInvalid="Lastname is required"
                  placeholder="Enter lastname"
                  type="text"
                  :disabled="!editMode"
                  required
                />

                <CustomInput
                  v-model="data.mobile"
                  icon="phone"
                  id="validationServerMobile"
                  feedbackInvalid="Mobile number is required"
                  placeholder="Enter mobile number"
                  type="tel"
                  :disabled="!editMode"
                  required
                />

                <CustomInput
                  v-model="data.email"
                  customClass="mb-3 mt-1"
                  icon="email"
                  id="validationServerEmail"
                  feedbackInvalid="Enter a valid email"
                  placeholder="Enter email"
                  type="email"
                  :disabled="!editMode"
                  required
                />

                <CustomButton
                  v-if="editMode"
                  :disabled="isLoading"
                  :style="{ cursor: isLoading ? 'not-allowed' : 'pointer' }"
                  type="submit"
                  color="success"
                  text="Update Profile"
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
      </div>
    </div>
  </section>
</template>

<script setup>
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import { CForm } from '@coreui/vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const data = ref({
  firstname: '',
  lastname: '',
  mobile: '',
  email: '',
});


const store = useStore();
const validatedCustom01 = ref(false);
const editMode = ref(false);
const isLoading = ref(false);

const handleToggle = () => {
  editMode.value = !editMode.value;
}

const handleSave = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      isLoading.value = true;
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(JSON.stringify(data.value));
    } catch (error) {
      console.error('Save project failed:', error);
    } finally {
      isLoading.value = false;
    }
  }
  validatedCustom01.value = true;
};

onMounted(() => {
  const user = store.getters['auth/user'];
  data.value = {
    firstname: user?.firstname,
    lastname: user?.lastname,
    mobile: user?.mobile,
    email: user?.email,
  };
  console.log("User", user);
});
</script>

<style scoped></style>
