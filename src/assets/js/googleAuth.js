export const redirectToGoogle = async (store, url) => {
  try {
    await store.dispatch('auth/redirect');
    window.location.href = url;
  } catch (error) {
    console.error('Error during Google redirection:', error);
  }
};
