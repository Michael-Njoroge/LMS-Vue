<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="card p-0 d-flex flex-row">
          <div class="col-4 py-2" style="border-right: 1px solid #e5e9f2;">
          <div class="d-flex justify-content-between align-items-center" style="border-bottom: 1px solid #e5e9f2;">
            <div class="d-flex  mb-3">
            <img src="/images/user.png" class="rounded-circle" alt="User Avatar" style="width: 60px; height: 60px;"/>
              <div class="d-flex flex-column ">
              <span class="mt-2"><strong>{{user?.firstname}} {{user?.lastname}}</strong></span>
              <span class="text-muted">{{user?.email}}</span>
            </div>
             </div>
            <a href="javascript:void(0)" class="mx-4 text-muted" id="profileDropdown"  data-bs-toggle="dropdown" >
              <span class="material-icons fs-4 more">more_vert</span>
            </a>
            <ul class="dropdown-menu menus rounded-0" aria-labelledby="profileDropdown">
              <li class="dropdown-item">
                <div class="d-flex flex-column">
                  <a href="javascript:void(0)" style="text-decoration: none;" class="text-muted d-flex align-items-center gap-2">
                    <span class="material-icons fs-5">photo_camera</span>
                    <span class="text-muted">Change Photo</span>
                  </a>
                </div>
              </li>
               <li class="dropdown-item mt-2">
                <div class="d-flex flex-column">
                  <a href="javascript:void(0)" style="text-decoration: none;" class="text-muted d-flex align-items-center gap-2">
                    <span class="material-icons fs-5">border_color</span>
                    <span class="text-muted">Update Profile</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column mt-2" style="border-bottom: 1px solid #e5e9f2;">
            <span class="mx-3 text-muted" style="font-size: 12px;">ACCOUNT BALANCE</span>
            <div class="d-flex align-items-center mx-3 p-0 mt-0" style="color: #8b58ff; font-size: 15px;">
              <span class="" style="font-size: 18px;">12.395769</span>
              <span class="mb-0 mx-1" style="font-size: 13px;">USD</span>
            </div>
            <p class="mx-3 text-muted" style="font-size: 15px;"><strong>Pending: </strong> 0.344939 USD</p>
          </div>

          <div class="d-flex flex-column gap-2 mt-2" style="border-bottom: 1px solid #e5e9f2;">
            <div class="d-flex align-items-center justify-content-between mx-3 mb-2 infom" style="cursor: pointer;">
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">person</span>
              <p class="mb-0">Personal Infomation</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div class="d-flex align-items-center justify-content-between mx-3 mb-2 infom" style="cursor: pointer;">
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">notifications</span>
              <p class="mb-0">Notifications</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div class="d-flex align-items-center justify-content-between mx-3 mb-2 infom" style="cursor: pointer;">
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">access_time</span>
              <p class="mb-0">Account Activity</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div class="d-flex align-items-center justify-content-between mx-3 mb-2 infom" style="cursor: pointer;">
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">lock</span>
              <p class="mb-0">Security Settings</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
          </div>
          <div class="d-flex flex-column mx-3 mt-2">
            <div class="d-flex flex-column">
              <span class="text-muted"><strong>Last Login</strong></span>
              <span><small>06-29-2020 02:39pm</small></span>
            </div>
            <div class="d-flex flex-column my-2">
              <span class="text-muted"><strong>Login IP</strong></span>
              <span><small>192.129.243.28</small></span>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="my-3 mx-4 d-flex justify-content-between">
            <div>
               <h4 class="fw-bold">Personal Information</h4>
               <p class="text-muted">Basic info, like your name and address, that you use on Nio Platform.</p>
            </div>
            <div>
              <span class="material-icons fs-3 more" style="cursor: pointer;">edit_square</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import CustomInput from '@/components/CustomInput.vue';
// import CustomButton from '@/components/CustomButton.vue';
// import { CForm } from '@coreui/vue';
// import { onMounted } from 'vue';
// import { useStore } from 'vuex';
const user = JSON.parse(localStorage.getItem("user"));

// const data = ref({
//   firstname: '',
//   lastname: '',
//   mobile: '',
//   email: '',
// });


// const store = useStore();
// const validatedCustom01 = ref(false);
// const editMode = ref(false);
// const isLoading = ref(false);

// const handleToggle = () => {
//   editMode.value = !editMode.value;
// }

// const handleSave = async (event) => {
//   event.preventDefault();
//   const form = event.currentTarget;
//   if (!form.checkValidity()) {
//     event.stopPropagation();
//   } else {
//     try {
//       isLoading.value = true;
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       alert(JSON.stringify(data.value));
//     } catch (error) {
//       console.error('Save project failed:', error);
//     } finally {
//       isLoading.value = false;
//     }
//   }
//   validatedCustom01.value = true;
// };

// onMounted(() => {
//   const user = store.getters['auth/user'];
//   console.log("User", user);
// });
</script>

<style scoped>
  .menus{
    transform: translate(170px, 50px)!important;
    border-radius: 5px!important;
  }

  .more{
    padding: 10px;
    border-radius: 50%;
  }

  .more:hover,.more:focus{
    background-color: #ebeef2;
  }

  .infom {
    color: #6c757d !important;
}
  .infom:hover{
    color: #8b58ff!important;
  }
</style>
