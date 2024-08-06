<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">Email Verification</div>
          <div class="card-body">
            <p v-if="message === 'Email verified successfully'" class="text-success text-center fw-bold">Your email has been successfully verified.</p>
            <p v-if="message === 'Email already verified'" class="text-danger text-center fw-bold fs-5">Your email was already verified.</p>
            <router-link to="/login" class="btn btn-primary w-100">Go to Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();

const data = route.query;
const store = useStore();

const message = computed(() => store.getters['auth/message']);

onMounted( async() => {
 try {
    await store.dispatch('auth/emailVerification', data);
    setTimeout(() => {
        store.dispatch('auth/clearMessage');
    }, 6000);
  } catch (error) {
    console.error('Failed to verify:', error);
  }
});
</script>

<style scoped>
.container {
  margin-top: 50px;
}
a{
  text-transform: initial;
}
</style>
