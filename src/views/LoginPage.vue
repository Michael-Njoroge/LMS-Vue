<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card px-2">
          <div class="card-body">
            <h5 v-if="!isEmailNotVerified" class="card-title text-center fw-bold">Log in to your account</h5>
            <div v-if="!isEmailNotVerified" class="d-flex justify-content-center align-items-center gap-4 mt-3">
              <div class="card col-2" style="cursor: pointer;" @click="redirectToGoogle">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-google fs-5" style="color: #db4437;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;">
                <div class="card-body py-1 d-flex justify-content-center align-items-center" >
                  <i class="fab fa-github fs-5" style="color: #333;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-microsoft fs-5" style="color: #1da1f2;"></i>
                </div>
              </div>
            </div>
            <h6 v-if="!isEmailNotVerified" class="mt-3">Or log in with an email</h6>
            <CForm v-if="!isEmailNotVerified" novalidate :validated="validatedCustom01" @submit="handleLogin" class="row g-3 needs-validation">
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
                <CFormCheck id="flexCheckDefaultVModel" label="Remember Me" v-model="data.remember" />
                <router-link to="forgot-password" class="text-right">Lost your password?</router-link>
              </div>
              <CustomButton 
                :disabled="isFormInvalid || isLoading" 
                :style="{ cursor: isFormInvalid || isLoading ? 'not-allowed' : 'pointer' }" 
                type="submit" 
                color="success"
                text="Continue with email"
                loadingText="Please wait..."
                :isLoading="isLoading"
                customClass="text-white w-100 fs-6" 
                shape="rounded-1">
              </CustomButton>
              <router-link to="signup" class="text-right"><strong>Don't have an account?</strong></router-link>
            </CForm>
            <div v-else>
              <h5 class="mb-3 text-center">Please verify your email address to log in.</h5>
              <h6 class="my-3 text-center">Or resend verification email</h6>
              <CustomButton
                @click="handleResendVerification"
                :isLoading="isLoading"
                color="primary"
                text="Resend Verification Email"
                loadingText="Sending..."
                customClass="text-white w-100 fs-6"
                shape="rounded-1"
              ></CustomButton>
            </div>
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
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, computed, watch } from 'vue';

const store = useStore();
const router = useRouter();

const data = ref({
  email: '',
  password: '',
  remember: false
});
const validatedCustom01 = ref(false);
const isEmailNotVerified = ref(false);

const user = computed(() => store.getters['auth/user']);
const role = computed(() => user?.value?.role?.role_name);
const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);
const isLoading = computed(() => store.getters['auth/isLoading']);
const isFormInvalid = computed(() => data.value.email === '' || data.value.password === '');
const url = computed(() => store.getters['auth/redirectUrl']);

watch([isLoggedIn, role], ([loggedIn, userRole]) => {
  if (loggedIn && router.currentRoute.value.name !== 'LoginPage') {
    if (userRole === 'admin') {
      router.push('/admin');
    } else {
      router.push('/');
    }
  }
}, { immediate: true });

const handleLogin = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    try {
      await store.dispatch('auth/login', data.value);
      if (isLoggedIn.value === false) {
        isEmailNotVerified.value = true;
      }

      if (isLoggedIn.value) {
        const userRole = role.value;
        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
        console.error('Login failed:', error);
    }
  }
  validatedCustom01.value = true;
};

const handleResendVerification = async () => {
  isLoading.value = true;
  try {
    await store.dispatch('auth/resendVerification', { email: data.value.email });
    isLoading.value = false;
  } catch (error) {
    console.error('Resend verification failed:', error);
    isLoading.value = false;
  }
};

const redirectToGoogle =  async () => {
  try{
    await store.dispatch('auth/redirect');
    window.location.href = url.value
  }catch(error){
    console.log("error",error)
  }
}
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
.container-fluid {
  margin-top: 3rem !important;
}
</style>
