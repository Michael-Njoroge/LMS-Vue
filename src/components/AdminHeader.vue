<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled>
              Disabled
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-2" placeholder="Search"/>
        </CForm>
       <div class="d-flex flex-row gap-4 align-items-center justify-content-center">
         <h6 class="mt-2"> Welcome {{admin?.firstname}}</h6>
          <CDropdown variant="nav-item">
            <CDropdownToggle class="no-arrow" color="secondary"><CAvatar size="md" src="/images/user.png"></CAvatar></CDropdownToggle>
            <CDropdownMenu class="custom-dropdown-menu">
              <CDropdownItem href="#">Profile</CDropdownItem>
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
  CNavbarNav,
  CNavItem,
  CNavLink,
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

const handleLogout = async() => {
  try {
    await store.dispatch('auth/logout');
    localStorage.removeItem('user');
    router.push('/');
    }catch(error){
      console.log('error',error)
    }
}

</script>

<style>
.nav-item {
	padding-right: 20px;
}

.custom-dropdown-menu {
  width: 10px!important;
  margin-top: 8px!important;
  line-height: 10px;
  border-radius: 0!important;
}

.no-arrow::after {
  display: none!important;
}

.dropdown-item{
	padding: 5px !important;
	text-align: center!important;
}
.dropdown-item:hover {
	background-color: transparent!important;
	color: #6261cc !important; 
	text-decoration: underline;
}
</style>
