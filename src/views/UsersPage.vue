<template>
  <section class="">
    <div class="container-fluid">
      <div class="row">
        <CustomTable
          captionTop="List of users"
          :columns="columns"
          :items="items"
        >
          <template #actions="{ item }">
            <div class="dropdown">
              <div class="dropdown-toggle no-arrow text-center" style="cursor: pointer;"  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="material-icons">more_vert</span>
              </div>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="viewUser(item)">View</a>
                <li class="dropdown-divider"></li>
                <a class="dropdown-item" @click="activateUser(item)" :class="{ disabled: item?.is_blocked === false}">Activate</a>
                <li class="dropdown-divider"></li>
                <a class="dropdown-item" @click="deactivateUser(item)" :class="{ disabled: item?.is_blocked === true }">Deactivate</a>
              </div>
            </div>
          </template>
        </CustomTable>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import CustomTable from '@/components/CustomTable.vue';

const store = useStore();

const columns = ref([
  { key: 'firstname', label: 'FirstName' },
  { key: 'lastname', label: 'LastName' },
  { key: 'email', label: 'Email' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'username', label: 'Username' },
  { key: 'action', label: 'Actions' },
]);

const items = ref([]);

onMounted(async () => {
  try {
    await store.dispatch('users/getUsers');
    items.value = store.getters['users/getUsers'];
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
});

const viewUser = (user) => {
  console.log("user",user)
  // store.dispatch('users/deactivateUser', user.id);
};

const activateUser = (user) => {
  console.log("user",user)
  // store.dispatch('users/activateUser', user.id);
};

const deactivateUser = (user) => {
  console.log("user",user)
  // store.dispatch('users/deactivateUser', user.id);
};
</script>

<style>
.no-arrow::after {
  display: none!important;
}
.dropdown-menu {
  position: absolute!important;
  z-index: 1050!important;  
  top: 100%; 
  left: 0; 
  line-height: 8px;
  cursor: pointer;
}
.container-fluid,
.row {
  overflow: visible !important;
}
</style>
