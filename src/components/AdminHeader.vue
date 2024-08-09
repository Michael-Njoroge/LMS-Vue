<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-between w-100 gap-3">
        <div class="user-info">
          <h6 class="mt-2">Welcome {{ admin?.firstname }}</h6>
        </div>
        <form class="search-form">
          <input type="search" class="form-control" placeholder="Search" />
        </form>
        <div class="dropdown">
          <a 
            class="dropdown-toggle no-arrow" 
            href="javascript:void(0)" 
            id="navbarDropdown" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <img src="/images/user.png" class="rounded-circle" alt="User Avatar" style="width: 40px; height: 40px;">
          </a>
          <ul class="dropdown-menu dropdown-menu-end custom-dropdown-menu" aria-labelledby="navbarDropdown">
            <li class="dropdown-header">
              <span class="material-icons fs-4 close-icon" @click="closeDropdown">close</span>
            </li>
            <li class="text-center">
              <h6 class="email" @click.stop>{{ admin?.email }}</h6>
            </li>
            <li class="text-center position-relative mt-3">
              <img 
                :src="admin?.profile ? admin?.profile : '/images/user.png'"
                alt="User Profile Image"
                class="img-thumbnail profile-image"
                style="border-radius: 50%;" 
              />
              <span class="edit-icon material-icons" @click="toggleEdit">edit</span>
              <ul 
                class="dropdown-menu position-absolute ml-3" 
                :class="{ 'd-block': showEditDropdown }" 
              >
                <li>
                  <a class="dropdown-item small-item" href="#" @click="uploadImage">Upload Image</a>
                </li>

                <li class="mt-2">
                  <a class="dropdown-item text-danger small-item" href="#" @click="removeImage">Remove Image</a>
                </li>
              </ul>
            </li>
            <li class="text-center position-relative">
              <h5 class="fw-bolder mt-3" style="cursor: default;" @click.stop>Hi, {{ admin?.firstname }}!</h5>
            </li>
            <li>
              <router-link class="dropdown-item" to="/admin/profile">Profile</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="">
              <a class="dropdown-item text-danger d-flex align-items-center justify-content-center mx-auto" href="#" @click="handleLogout">
                <span class="material-icons me-2">logout</span>
                <span class="mb-0">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Dropdown } from 'bootstrap';
import { ref } from 'vue';

const router = useRouter();
const admin = JSON.parse(localStorage.getItem("user"));
const store = useStore();
const showEditDropdown = ref(false);

const handleLogout = async () => {
  try {
    await store.dispatch('auth/logout');
    localStorage.removeItem('user');
    router.push('/');
    setTimeout(() => {
      store.dispatch('auth/clearMessage');
    }, 2000);
  } catch (error) {
    console.log('error', error);
  }
}

const toggleEdit = () => {
  showEditDropdown.value = !showEditDropdown.value;
};

const uploadImage = () => {
  console.log('Upload Image clicked');
  showEditDropdown.value = false; 
};

const removeImage = () => {
  console.log('Remove Image clicked');
  showEditDropdown.value = false; 
};

const closeDropdown = () => {
  const dropdownElement = document.getElementById('navbarDropdown');
  const dropdown = Dropdown.getInstance(dropdownElement);
  if (dropdown) {
    dropdown.hide();
  }
};

</script>

<style>
.navbar-container {
  display: flex;
  align-items: center;
}

.user-info {
  margin-right: auto;
}

.search-form {
  flex: 1;
}

.custom-dropdown-menu {
  width: 400px !important;
  margin-top: 8px !important;
  line-height: 10px;
  border-radius: 20px !important;
  position: absolute;
  right: 0; 
}

.dropdown-header {
  position: absolute;
  top: 0;
  right: 0; 
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}

.edit-icon {
  position: absolute;
  bottom: 30px; 
  right: 250px; 
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;
  color: #007bff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transform: translate(50%, 50%);
}

.edit-icon:hover {
  color: #0056b3;
}

.email {
  margin-left: 10px;
  cursor: default;
}

.close-icon {
  cursor: pointer;
}

.no-arrow::after {
  display: none !important;
}

.dropdown-item {
  padding: 5px !important;
  text-align: center !important;
}

.dropdown-item:hover {
  background-color: transparent !important;
  color: #6261cc !important;
  text-decoration: none;
}

.d-block {
  display: block !important;
}

.dropdown-menu.position-absolute {
  min-width: 120px!important; 
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  top: 80px;
}

</style>
