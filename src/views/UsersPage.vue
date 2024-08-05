<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <CustomTable
          captionTop="List of users"
          :columns="columns"
          :items="paginatedItems"
          :details="details"
        >
          <template #image="{ item }">
            <td>
              <CAvatar :src="item.image ? item.image : '/images/user.png'" />
            </td>
          </template>
          <template #actions="{ item }">
            <td class="py-2">
              <a href="javascript:void(0)" @click="toggleDetails(item.id)" v-html="details.includes(item.id) ? hideIcon : showIcon"></a>
            </td>
          </template>
          <template #status="{ item }">
            <span :class="`badge bg-${getBadge(item.status)} rounded-pill`">
              {{ item.status }}
            </span>
          </template>
          <template #details="{ item }">
            <CCollapse :visible="details.includes(item.id)">
              <CCardBody>
                <div class="d-flex gap-4 align-items-center">
                  <strong><p class="text-muted">User since: {{ item?.created_at }}</p></strong>
                  <a href="javascript:void(0)">
                    <span class="material-icons">settings</span>
                  </a>
                  <a href="javascript:void(0)" @click="confirmDelete(item)">
                    <span class="material-icons text-danger ml-2">delete</span>
                  </a>
                </div>
              </CCardBody>
            </CCollapse>
          </template>
        </CustomTable>
        <CPagination align="end" aria-label="Page navigation example" class="mt-3 custom-pagination">
          <CPaginationItem :disabled="currentPage === 1" @click="previousPage">Previous</CPaginationItem>
          <CPaginationItem v-for="page in totalPages" :key="page" @click="changePage(page)">{{ page }}</CPaginationItem>
          <CPaginationItem :disabled="currentPage === totalPages" @click="nextPage">Next</CPaginationItem>
        </CPagination>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import CustomTable from '@/components/CustomTable.vue';
import { CCollapse, CCardBody, CAvatar, CPagination, CPaginationItem } from '@coreui/vue';
import swal from 'sweetalert';
import { useToast } from 'vue-toastification';

const store = useStore();
const toast = useToast();

const columns = ref([
  { key: 'image', label: '', slot: 'image' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'username', label: 'Username' },
  { key: 'status', label: 'Status', slot: 'status' },
  { key: 'action', label: '', slot: 'actions' },
]);

const items = ref([]);
const details = ref([]);
const showIcon = '<span class="material-icons">visibility</span>';
const hideIcon = '<span class="material-icons text-danger ml-2">visibility_off</span>';

const currentPage = ref(1);
const itemsPerPage = ref(5);

onMounted(async () => {
  try {
    await store.dispatch('users/getUsers');
    const users = store.getters['users/getUsers'];
    items.value = users.map(user => ({
      ...user,
      name: `${user.firstname} ${user.lastname}`
    }));
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return items.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage.value));

const changePage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const toggleDetails = (id) => {
  if (details.value.includes(id)) {
    details.value.splice(details.value.indexOf(id), 1);
  } else {
    details.value.push(id);
  }
};

const getBadge = (status) => {
  switch (status) {
    case 'active':
      return 'success';
    case 'inactive':
      return 'secondary';
    case 'pending':
      return 'warning';
    case 'banned':
      return 'danger';
    default:
      return 'primary';
  }
};

const confirmDelete = (item) => {
  swal({
    title: "Are you sure?",
    text: `Once deleted, ${item?.firstname + ' ' + item?.lastname} will not be able to access the system!`,
    icon: "warning",
    buttons: ["No, Cancel", "Yes, delete"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      handleDelete(item?.id);
    } else {
      toast.success("User is safe!");
    }
  });
};

const handleDelete = (id) => {
  store.dispatch('tutorialCategories/deleteTutCat', id);
  setTimeout(() => {
    store.dispatch('tutorialCategories/getTutCats');
  }, 100);
};
</script>

<style scoped>
.badge {
  font-size: 0.75em !important;
  width: 100px;  
  text-align: center;
  color: #fff !important;
}
.bg-success {
  background-color: #28a745 !important;
}
.bg-secondary {
  background-color: #6c757d !important;
}
.bg-warning {
  background-color: #ffc107 !important;
}
.bg-danger {
  background-color: #dc3545 !important;
}
.bg-primary {
  background-color: #007bff !important;
}
a {
  text-decoration: none;
}
</style>
