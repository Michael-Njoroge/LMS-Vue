<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-4 px-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Reset Password</h5>

            <CForm novalidate :validated="validatedCustom01" @submit="handleReset" class="row g-3 needs-validation">
              <strong v-if="message" class="small text-center text-success">{{ message }}</strong>
            <strong class="small text-center text-danger">Please use the new set password in your next login</strong>
              <CustomInput
                v-model="data.password"
                customClass="mt-1 mb-3"
                icon="lock"
                feedbackInvalid="New password is required"
                placeholder="New Password"
                type="password"
                required
              />
              <CustomInput
                v-model="data.password_confirmation"
                customClass="mt-1 mb-3"
                icon="lock"
                feedbackInvalid="Cofirm password  is required "
                placeholder="Cofirm Password"
                type="password"
                required
              />
              <CustomButton 
                type="submit" 
                :isLoading="isLoading"
                color="success" 
                text="Submit" 
                customClass="text-white mb-3 w-100" 
                shape="rounded-1"
                loadingText="Resetting..."
                :disabled="isEmpty || isLoading"
              ></CustomButton>
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
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

const param = route.query;

const data = ref({
  email: param?.email,
  token: param?.token,
  password: '',
  password_confirmation: '',
})

const validatedCustom01 = ref(false);
const isLoading = computed(() => store.getters['auth/isLoading']);
const message = computed(() => store.getters['auth/message']);
const isEmpty = computed(() => {
  return !(data.value.password && 
      data.value.password_confirmation);
});

const handleReset = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    event.stopPropagation();
    validatedCustom01.value = true;
    return;
  }

  try {
    await store.dispatch('auth/reset', data.value);
    setTimeout(() => {
      store.dispatch('auth/clearMessage');
      router.push('/login');
    }, 8000);
  } catch (error) {
    console.error("Error during reset:", error);
  } finally {
    validatedCustom01.value = true;
  }
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
