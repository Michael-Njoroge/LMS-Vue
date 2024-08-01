<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-4 px-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Log in to your account</h5>
            <div class="d-flex justify-content-center align-items-center gap-4 mt-3">
              <div class="card col-2" style="cursor: pointer;">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-google fs-5" style="color: #db4437;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-github fs-5" style="color: #333;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-microsoft fs-5" style="color: #1da1f2;"></i>
                </div>
              </div>
            </div>
            <h6 class="mt-3">Or log in with an email</h6>
            <CForm novalidate :validated="validatedCustom01" @submit="handleLogin" class="row g-3 needs-validation">
              <CustomInput
                v-model="data.email"
                customClass="mt-2"
                icon="email"
                feedbackInvalid="Enter a valid email address"
                placeholder="Email Address"
                type="email"
                required
              />
              <CustomInput
                v-model="data.password"
                customClass="mt-3"
                icon="lock"
                feedbackInvalid="Password is required"
                placeholder="Password"
                type="password"
                required
              />
              <div class="d-flex justify-content-between flex-grow-1 mt-3">
                <CFormCheck id="flexCheckDefaultVModel" label="Remember Me" v-model="data.checked" />
                <router-link to="forgot-password" class="text-right">Lost your password?</router-link>
              </div>
              <CustomButton 
                :disabled="isFormInvalid" 
                :style="{ cursor: isFormInvalid ? 'not-allowed' : 'pointer' }" 
                type="submit" 
                color="success" 
                text="Continue with email" 
                customClass="text-white w-100 fs-6" 
                shape="rounded-1">
              </CustomButton>
              <router-link to="signup" class="text-right"><strong>Don't have an account?</strong></router-link>
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
import { CForm, CFormCheck } from '@coreui/vue';
import { ref, computed } from 'vue';

const data = ref({
  firstname: '',
  lastname: '',
  mobile: '',
  email: '',
  password: ''
});
const validatedCustom01 = ref(false);

const isFormInvalid = computed(() => {
  return data.value.email === '' || data.value.password === '';
});

const handleLogin = (event) => {
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
a {
  text-decoration: none;
  color: rgb(107, 115, 133);
}

a:hover {
  text-decoration: underline;
  text-transform: initial;
}
</style>
