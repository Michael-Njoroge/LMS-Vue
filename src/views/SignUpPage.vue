<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 mx-auto">
        <div class="card my-4 px-2">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold">Register A New Account </h5>
            <CForm novalidate :validated="validatedCustom01" @submit="handleRegister" class="row g-3 needs-validation">
              <CustomInput
                v-model="data.firstname"
                customClass="mt-3"
                icon="person"
                feedbackInvalid="Firstname is required"
                placeholder="Firstname"
                type="text"
                required
              />
              <CustomInput
                v-model="data.lastname"
                customClass="mt-3"
                icon="person"
                feedbackInvalid="Lastname is required"
                placeholder="Lastname"
                type="text"
                required
              />
              <CustomInput
                v-model="data.mobile"
                customClass="mt-3"
                icon="phone"
                feedbackInvalid="Invalid phone number "
                placeholder="Phone number"
                type="number"
                required
              />
               <CustomInput
                v-model="data.email"
                customClass="mt-3"
                icon="email"
                feedbackInvalid="Invalid email address"
                placeholder="Email Address"
                type="email"
                required
              />
              <CustomInput
                v-model="data.password"
                customClass="mb-3"
                icon="lock"
                feedbackInvalid="Password is required"
                placeholder="Password"
                type="password"
                required
              />
              <CustomButton type="submit" color="success" text="Register" customClass="text-white w-100" shape="rounded-1" />
              <router-link class=" text-end" to="/login">Already have an account?</router-link>
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
  firstname: '',
  lastname: '',
  mobile: '',
  email: '',
  password: '',
})

const validatedCustom01 = ref(false);

const handleRegister = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    alert(JSON.stringify(data.value ));
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
