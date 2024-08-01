<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-4 px-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Login To Account</h5>
            <CForm novalidate :validated="validatedCustom01" @submit="handleLogin" class="row g-3 needs-validation">
              <CustomInput
                v-model="data.email"
                customClass="mt-3"
                icon="email"
                feedbackInvalid="Enter a valid email address"
                placeholder="Email Address"
                type="email"
                required
              />
              <CustomInput
                v-model="data.password"
                customClass="my-3"
                icon="lock"
                feedbackInvalid="Password is required"
                placeholder="Password"
                type="password"
                required
              />
              <div class="d-flex justify-content-between flex-grow-1 mt-3">
                <CFormCheck  id="flexCheckDefaultVModel" label="Remember Me" v-model="data.checked" />
                <router-link to="forgot-password" class="text-right" >Lost your password?</router-link>
              </div>
              <CustomButton type="submit" color="success" text="Sign In" customClass="text-white w-100" shape="rounded-1"></CustomButton>
                <router-link to="signup" class="text-right" ><strong>Dont have an account?</strong></router-link>
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
import { ref } from 'vue';

const data = ref({
  email: '',
  password: '',
  checked: false
})
const validatedCustom01 = ref(false);

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
	a{
      text-decoration: none;
      color: rgb(107, 115, 133);
    }
 a:hover {
      text-decoration: underline;
    }
</style>
