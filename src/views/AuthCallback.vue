<template>
  <div>
    <p class="text-center text-success">Redirecting...</p>
  </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const user = computed(() => store.getters['auth/user']);
const role = computed(() => user?.value?.role);
const isLoggedIn = computed(() => store.getters['auth/isLoggedIn']);

onMounted(async () => {
  const query = new URLSearchParams(window.location.search);
  const code = query.get('code');
  const path = window.location.pathname;
  let provider = '';

  if (path.includes('google')) {
    provider = 'google';
  } else if (path.includes('github')) {
    provider = 'github';
  } else if (path.includes('linkedin')) {
    provider = 'linkedin';
  } else {
    console.error('Unknown provider');
    router.push('/login');
    return;
  }

  if (code) {
    try {
      await store.dispatch('auth/callback', { code, provider });
      if (isLoggedIn.value) {
        const userRole = role.value;
        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      } else {
        router.push('/login');
      }
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
