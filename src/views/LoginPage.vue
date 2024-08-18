<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card px-2">
          <div class="card-body">
            <h5 v-if="!isVerificationRequired" class="card-title text-center fw-bold">Log in to your account</h5>
            <div v-if="!isVerificationRequired" class="d-flex justify-content-center align-items-center gap-4 mt-3">
              <!-- Social Login Buttons -->
              <div class="card col-2" style="cursor: pointer;" @click="redirect('google')">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-google fs-5" style="color: #db4437;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;" @click="redirect('github')">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-github fs-5" style="color: #333;"></i>
                </div>
              </div>
              <div class="card col-2" style="cursor: pointer;" @click="redirect('linkedin')">
                <div class="card-body py-1 d-flex justify-content-center align-items-center">
                  <i class="fab fa-linkedin fs-5" style="color: #1da1f2;"></i>
                </div>
              </div>
            </div>
            <h6 v-if="!isVerificationRequired" class="mt-3">Or log in with an email</h6>
            <!-- Login Form -->
            <CForm v-if="!isVerificationRequired" novalidate :validated="validatedCustom01" @submit="handleLogin" class="row g-3 needs-validation">
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

            <!-- Verification Code Form -->
            <div v-else>
              <h5 class="mb-3 text-center">Enter the verification code sent to your email.</h5>
              <CForm @submit="handleVerificationCode" class="row g-3 needs-validation">
                <div class="code-input">
                  <input
                    v-for="(digit, index) in code"
                    :key="index"
                    v-model="code[index]"
                    @input="moveFocus(index)"
                    @keydown.backspace="moveBack(index)"
                    maxlength="1"
                    class="digit-input"
                    autofocus
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    :ref="el => inputRefs[index] = el"
                  />
                </div>
              </CForm>
              <h6 class="my-3 text-center">Didn't receive the code? <a @click="handleResendCode">Resend Code</a></h6>
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

const code = ref(['', '', '', '', '', '']);
const inputRefs = ref([]);
const validatedCustom01 = ref(false);
const isVerificationRequired = ref(false);

const user = computed(() => store.getters['auth/user']);
const role = computed(() => user?.value?.role?.role_name);
const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);
const isLoading = computed(() => store.getters['auth/isLoading']);
const isFormInvalid = computed(() => data.value.email === '' || data.value.password === '');
const isCodeInvalid = computed(() => code.value === '');
const url = computed(() => store.getters['auth/redirectUrl']);

const moveFocus = (index) => {
  if (code.value[index].length === 1 && index < code.value.length - 1) {
    inputRefs.value[index + 1].focus();
  }
};

const moveBack = (index) => {
  if (code.value[index] === '' && index > 0) {
    inputRefs.value[index - 1].focus();
  }
};

const isCodeComplete = computed(() => {
  return code.value.every(digit => digit.length === 1);
});

watch(isCodeComplete, (newValue) => {
  if (newValue) {
    handleVerificationCode();
  }
});

watch([isLoggedIn, role], ([loggedIn, userRole]) => {
  if (loggedIn && !isVerificationRequired.value) {
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
      if (!isLoggedIn.value) {
        isVerificationRequired.value = true;
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  validatedCustom01.value = true;
};

const handleVerificationCode = async () => {
  event.preventDefault();
  if (isCodeInvalid.value) {
    event.stopPropagation();
  } else {
    try {
     const payload = {
        email: data.value.email,
        password: data.value.password,
        remember: data.value.remember,
        verification_code: code.value.join(''),
      };
      await store.dispatch('auth/login', payload );
      if (isLoggedIn.value) {
        const userRole = role.value;
        console.log("userRole",userRole)
        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      console.error('Code verification failed:', error);
    }
  }
};

const handleResendCode = async () => {
  isLoading.value = true;
  try {
    await store.dispatch('auth/resendCode', { email: data.value.email });
    isLoading.value = false;
  } catch (error) {
    console.error('Resend code failed:', error);
    isLoading.value = false;
  }
};

const redirect = async (provider) => {
  try {
    await store.dispatch('auth/redirect', provider);
    window.location.href = url.value;
  } catch (error) {
    console.log('error', error);
  }
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
.container-fluid {
  margin-top: 3rem !important;
}

.code-input {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
}

.digit-input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
