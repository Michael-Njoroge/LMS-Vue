<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-5 py-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Register A New Account</h5>
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
            <h6 class="mt-3">Or register with an email</h6>
            <CForm novalidate :validated="validatedCustom01" @submit="handleRegister" class="row g-3 needs-validation">
              <div class="col-md-6">
                <CustomInput
                  v-model="data.firstname"
                  icon="person"
                  feedbackInvalid="First name is required"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="col-md-6">
                <CustomInput
                  v-model="data.lastname"
                  icon="person"
                  feedbackInvalid="Last name is required"
                  placeholder="Last Name"
                  required
                />
              </div>
              <CustomInput
                v-model="data.mobile"
                icon="phone"
                feedbackInvalid="Mobile number is required"
                placeholder="Mobile Number"
                type="tel"
                required
              />
              <CustomInput
                v-model="data.email"
                icon="email"
                feedbackInvalid="Enter a valid email address"
                placeholder="Email Address"
                type="email"
                required
              />
              <div class="col-md-6">
                <CustomInput
                  v-model="data.password"
                  icon="lock"
                  feedbackInvalid="Password is required"
                  placeholder="Password"
                  type="password"
                  required
                />
              </div>
              <div class="col-md-6">
                <CustomInput
                  v-model="data.retypePassword"
                  icon="lock"
                  feedbackInvalid="Passwords do not match"
                  placeholder="Confirm Password"
                  type="password"
                  required
                />
              </div>
                <div class="d-flex align-items-center mt-3">
                  <CFormCheck
                    id="termsAndConditions"
                    v-model="data.agreed"
                    required
                    feedbackInvalid="You must agree before submitting."
                  />
                  <label for="termsAndConditions" class="ms-2 mb-0">
                    I agree to the
                    <router-link to="/terms-conditions" target="_blank" class="text-primary">Terms and Conditions</router-link>, and
                    <router-link to="/privacy-policy" class="text-primary">Privacy Policy</router-link>
                  </label>
              </div>
              <CustomButton 
                :disabled="isEmpty" 
                :style="{ cursor: isEmpty ? 'not-allowed' : 'pointer' }" 
                type="submit" 
                color="success" 
                text="Register" 
                customClass="text-white w-100 fs-6" 
                shape="rounded-1">
              </CustomButton>
              <router-link to="login" class="text-right"><strong>Already have an account?</strong></router-link>
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
  password: '',
  retypePassword: '',
  agreed: false
});
const validatedCustom01 = ref(false);

const isEmpty = computed(() => {
  return !(
    data.value.firstname &&
    data.value.lastname &&
    data.value.mobile &&
    data.value.email &&
    data.value.password &&
    data.value.retypePassword &&
    data.value.password === data.value.retypePassword &&
    data.value.agreed
  );
});

const handleRegister = (event) => {
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
.container-fluid{
  margin-top: 2rem!important;
}
</style>
