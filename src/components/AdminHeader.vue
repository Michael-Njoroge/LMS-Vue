<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid class="navbar-container">
      <div class="d-flex align-items-center justify-content-between w-100 gap-3">
        <div class="user-info">
          <h6 class="mt-2">Welcome {{ admin?.firstname }}</h6>
        </div>
        <CForm class="search-form">
          <CFormInput type="search" class="" placeholder="Search"/>
        </CForm>
        <CDropdown variant="nav-item">
          <CDropdownToggle class="no-arrow" color="secondary" href="javascript:void(0)">
            <CAvatar size="md" src="/images/user.png"></CAvatar>
          </CDropdownToggle>
          <CDropdownMenu class="custom-dropdown-menu">
            <CDropdownItem href="javascript:void(0)">Profile</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem style="cursor: pointer;" @click="handleLogout">Logout</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CAvatar
} from '@coreui/vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const admin = JSON.parse(localStorage.getItem("user"));
const store = useStore();

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
  width: 10px !important;
  margin-top: 8px !important;
  line-height: 10px;
  border-radius: 0 !important;
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
  text-decoration: underline;
}
</style>
