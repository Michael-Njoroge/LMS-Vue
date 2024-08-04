<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto mt-4">
        <div class="card px-2">
          <div class="card-body">
            <div class="d-flex align-items-center flex-row">
              <span class="material-icons fs-5">arrow_back</span>
              <router-link class="border-1 top-2 ms-1 mb-0" :style="{cursor:'pointer'}" to="/login">Go Back</router-link>
            </div>
            <h5 class="card-title text-center fw-bold">Forgot Password</h5>
            <CForm novalidate :validated="validatedCustom01" @submit="handleForgot" class="row g-3 needs-validation">
              <strong class="small text-center text-success">We will send you a password  reset link</strong>
              <CustomInput
                v-model="data.email"
                customClass="mt-1 mb-3"
                icon="email"
                feedbackInvalid="Enter a valid email address"
                placeholder="Email Address"
                type="email"
                required
              />
              <CustomButton type="submit" color="success" text="Submit" customClass="text-white mb-3 w-100" shape="rounded-1"></CustomButton>
            </CForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import { CForm } from '@coreui/vue';
import { ref } from 'vue';

const data = ref({
  email: '',
})
const validatedCustom01 = ref(false);

const handleForgot = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    alert(JSON.stringify(data.value));
  }
  validatedCustom01.value = true;
};
</script>

<style scoped>
	a{
      text-decoration: none;
      color: rgb(107, 115, 133);
    }
 a:hover {
      text-decoration: underline;
    }
</style>
