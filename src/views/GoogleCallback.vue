<template>
  <div>
    <p class="text-center text-success">Redirecting...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

onMounted(async () => {
  const query = new URLSearchParams(window.location.search);
  const code = query.get('code');
  
  if (code) {
    try {
      await store.dispatch('auth/handleGoogleCallback', code);
      router.push('/');
    } catch (error) {
      console.error('Authentication failed:', error);
      router.push('/login');
    }
  } else {
    console.error('No authorization code provided');
    router.push('/login');
  }
});
</script>
