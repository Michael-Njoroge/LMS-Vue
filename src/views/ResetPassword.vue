<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-4 px-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Reset Password</h5>
            <CForm novalidate :validated="validatedCustom01" @submit="handleReset" class="row g-3 needs-validation">
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
  password: '',
  password_confirmation: ''
})
const validatedCustom01 = ref(false);

const handleReset = (event) => {
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
