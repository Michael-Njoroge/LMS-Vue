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
                  <a 
                    href="javascript:void(0)" 
                    style="text-decoration: none;" 
                    class="text-muted d-flex align-items-center gap-2" 
                    @click="triggerFileInput"
                  >
                    <span class="material-icons fs-5">cloud_upload</span>
                    <span class="text-muted">Change Photo</span>
                    <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" />
                  </a>
                </div>
              </li>
               <li class="dropdown-item mt-2">
                <div class="d-flex flex-column" @click="openModal()">
                  <a href="javascript:void(0)" style="text-decoration: none;" class="text-muted d-flex align-items-center gap-2">
                    <span class="material-icons fs-5">border_color</span>
                    <span class="text-muted">Update Profile</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column gap-2 mt-2" style="border-bottom: 1px solid #e5e9f2;">
            <span class="mx-3 text-muted" style="font-size: 12px;">ACCOUNT BALANCE</span>
            <div class="d-flex align-items-center mx-3 p-0 mt-0" style="color: #8b58ff; font-size: 15px;">
              <span class="" style="font-size: 18px;">12.395769</span>
              <span class="mb-0 mx-1" style="font-size: 13px;">USD</span>
            </div>
            <p class="mx-3 text-muted" style="font-size: 15px;"><strong>Pending: </strong> 0.344939 USD</p>
          </div>

          <div  class="d-flex flex-column gap-2 mt-2" style="border-bottom: 1px solid #e5e9f2;">
            <div 
              @click="selectSection('personalInfo')" 
              :class="['d-flex align-items-center justify-content-between mx-3 mb-2 infom', { active: currentSection === 'personalInfo' }]" 
              style="cursor: pointer;"
            >
            <div class="d-flex align-items-center gap-2" >
              <span class="material-icons fs-5">person</span>
              <p class="mb-0">Personal Infomation</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div 
              :class="['d-flex align-items-center justify-content-between mx-3 mb-2 infom', { active: currentSection === 'notifications' }]"  
              @click="selectSection('notifications')" 
              style="cursor: pointer;"
            >
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">notifications</span>
              <p class="mb-0">Notifications</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div 
             :class="['d-flex align-items-center justify-content-between mx-3 mb-2 infom', { active: currentSection === 'accountActivity' }]" 
             @click="selectSection('accountActivity')" 
             style="cursor: pointer;"
           >
            <div class="d-flex align-items-center gap-2">
              <span class="material-icons fs-5">access_time</span>
              <p class="mb-0">Account Activity</p>
            </div>
            <span class="material-icons fs-5 mx-4">chevron_right</span>
          </div>
           <div 
              :class="['d-flex align-items-center justify-content-between mx-3 mb-2 infom', { active: currentSection === 'securitySettings' }]" 
              @click="selectSection('securitySettings')" 
              style="cursor: pointer;"
            >
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
              <span style="color: #667692;"><small>06-29-2020 02:39pm</small></span>
            </div>
            <div class="d-flex flex-column my-2">
              <span class="text-muted"><strong>Login IP</strong></span>
              <span style="color: #667692;"><small>192.129.243.28</small></span>
            </div>
          </div>
        </div>
        <div class="col-8">
         <div v-if="currentSection === 'personalInfo'">
            <div class="mt-4 mx-4 d-flex justify-content-between align-items-center">
            <div>
               <h4 class="fw-bold">Personal Information</h4>
               <p class="text-muted" style="color: #526484;">
                 <small>Basic info, like your name and address, that you use on Nio Platform.</small>
               </p>
            </div>
            <div>
              <span  @click="openModal()" class="material-icons fs-3 more mb-0" style="cursor: pointer;">edit_note</span>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row mx-3">
              <div class="card d-flex " style="background-color: #ebeef2; box-shadow: none; border: none;">
                <p class="card-title mb-0 text-start p-1" style="color: #8a9cb4;">Basics</p>
              </div>
              <div class="d-flex flex-column mt-2">
                <div class="">
                  <div class="d-flex py-3 w-100 data-item-content" style="border-bottom: 1px solid #e5e9f2;">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Full Name</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.firstname}} {{user?.lastname}}</small>
                    </p>
                  </div>
                  <div class="d-flex py-3 w-100 data-item-content" style="border-bottom: 1px solid #e5e9f2;">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Display Name</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.username ? user?.username : 'Not added yet'}}</small>
                    </p>
                  </div>
                  <div class="d-flex py-3 w-100 data-item-content" style="border-bottom: 1px solid #e5e9f2;">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Email</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.email ? user?.email : 'Not added yet'}}</small>
                    </p>
                  </div>
                  <div class="d-flex py-3 w-100 data-item-content" style="border-bottom: 1px solid #e5e9f2;">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Phone Number</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.mobile ? user?.mobile : 'Not added yet'}}</small>
                    </p>
                  </div>
                  <div class="d-flex py-3 w-100 data-item-content" style="border-bottom: 1px solid #e5e9f2;">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Date of Birth</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.birth ? user?.birth : 'Not added yet'}}</small>
                    </p>
                  </div>
                  <div class="d-flex py-3 w-100">
                    <p class="text-start col-6" style="color: #9eadc1;">
                      <small>Nationality</small>
                    </p>
                    <p style="color: #566887;">
                      <small>{{user?.nationality ? user?.nationality : 'Not added yet'}}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>

         <div v-if="currentSection === 'notifications'">
          <div class="mt-4 mx-4 d-flex justify-content-between">
            <div>
               <h4 class="fw-bold">Notification Settings</h4>
               <p class="text-muted" style="color: #526484;">
                 <small>You will get only notification what have enabled.</small>
               </p>
            </div>
          </div>
          <div class="d-flex mx-4 flex-column">
             <div>
               <h6 class="fw-bolder">Security Alerts</h6>
               <p class="p-color" style="font-size: 14px;">
                 <small>You will get only those email notification what you want.</small>
               </p>
            </div>
            <div class="d-flex flex-column mb-4 gap-2">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault">
                  <small>Email me whenever encounter unusual activity</small>
                </label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"/>
                <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault2">
                  <small>Email me if new browser is used to sign in</small>
                </label>
              </div>
            </div>
          </div>
          <div class="d-flex mx-4 flex-column">
             <div>
               <h6 class="fw-bolder">News</h6>
               <p class="text-muted p-color" style="font-size: 14px;">
                 <small>You will get only those email notification what you want.</small>
               </p>
            </div>
            <div class="d-flex flex-column mb-4 gap-2">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault">
                  <small>Notify me by email about sales and latest news</small>
                </label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"/>
                <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault2">
                  <small>Email me about new features and updates</small>
                </label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"/>
                <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault2">
                  <small>Email me about tips on using account</small>
                </label>
              </div>
            </div>
          </div>
        </div>

          <div v-if="currentSection === 'accountActivity'" class="mx-4 mt-4">
            <div>
              <h4 class="fw-bold">Login Activity</h4>
               <p class="text-muted d-flex align-items-center" style="color: #526484;">
                 <span><small>Here is your last 10 login activities log.</small></span>
                 <span class="material-icons fs-5 mx-1 mb-0">info</span>
               </p>
            </div>
            <div class="card p-0 m-0">
              <div class="card-header d-flex">
               <span class="col-3">Browser </span>
               <span class="col-3">IP </span>
               <span class="col-3">Time </span>
              </div>
              <div class="card-body p-0">
                <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Chrome on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>11:34 PM</small></span>
                </div>
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Mozilla on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>Nov 20, 2019 10:34 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Chrome on iMac</small></span>
                  <span class="col-3"><small>86.188.154.225</small></span>
                  <span class="col-3"><small>Oct 29, 2019 09:38 AM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Chrome on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>Oct 23, 2019 04:16 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Mozilla on Window</small></span>
                  <span class="col-3"><small>86.188.154.225</small></span>
                  <span class="col-3"><small>Nov 20, 2019 10:34 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Chrome on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>Oct 23, 2019 04:16 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Mozilla on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>Nov 20, 2019 10:34 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
                <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-3"><small>Chrome on Window</small></span>
                  <span class="col-3"><small>192.149.122.128</small></span>
                  <span class="col-3"><small>Oct 23, 2019 04:16 PM</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="currentSection === 'securitySettings'" class="mx-4 mt-4">
            <div>
              <h4 class="fw-bold">Security Settings</h4>
               <p class="text-muted" style="color: #526484;">
                 <small>These settings helps you keep your account secure.</small>
               </p>
            </div>
            <div class="card p-0 m-0">
              <div class="card-body p-0">
                 <div class="mt-3 d-flex justify-content-between align-items-center data-item">
                  <div class="mx-4">
                     <h6 class="fw-bolder" style="color: #364a63;">Save my Activity Logs</h6>
                     <p class="text-muted" style="color: #526484;">
                      <small>You can save your all activity logs including unusual activity detected.</small>
                    </p>
                  </div>
                  <div>
                    <div class="form-check form-switch mb-0 mx-4">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"/>
                    </div>
                  </div>
                </div>
                 <div class="mt-3 data-item mb-4 data-item">
                  <div class="mx-4">
                     <h6 class="fw-bolder" style="color: #364a63;">Change Password</h6>
                     <p class="text-muted" style="color: #526484;">
                        <small>Set a unique password to protect your account.</small>
                      </p>
                  </div>
                  <div class="d-flex align-items-center gap-2 mx-4 mb-4">
                    <p class="mb-0" style="font-style: italic;color:#9eadc1;">
                      <small>Last changed: Dec 2, 2023</small>
                    </p>
                    <div>
                      <button type="button" style="text-transform: initial;" class="btn btn-primary btn-sm mb-0">Change Password</button>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>   
                  <div class="mt-3 data-item mb-4">
                  <div class="mx-4">
                      <div class="d-flex align-items-center gap-2">
                        <h6 class="fw-bolder mb-0" style="color: #364a63;">2 Factor Auth</h6>
                        <span class="badge bg-success mb-0">Enabled</span>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                          <p class="text-muted mb-0 me-3" style="color: #526484; flex-grow: 1;">
                              <small>Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using an app. You can receive this code by mobile app.</small>
                          </p>
                          <button type="button" style="text-transform: initial; padding: 5px 12px;" class="btn btn-primary btn-sm mb-0">Disable</button>
                      </div>
                  </div>   
              </div>

              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  </section>

  <CustomModal
    :visible="visibleModal"
    @update:visible="visibleModal = $event"
    @save="handleSave"
    :modalTitle="profileSection === 'profileInfo' ? 'Update Profile' : 'Update Address'"
    colorCancel="secondary"
    colorSave="success text-white w-100"
    alignment="center"
    width="700px"
    borderBottom="none"
    :buttonText="profileSection === 'profileInfo' ? 'Update Profile' : 'Update Address'"
    type="submit"
    backgroundColor="#f5f6fa"
    :disabled="isFormInvalid"
  >
  <div class="d-flex gap-4 pb-2" style="color: #566887;border-bottom: 1px solid #e5e9f2;">
    <h6 
      @click="selectProfileSection('profileInfo')"  
      style="cursor: pointer; "
      :style="profileSection === 'profileInfo' ? { borderBottom: '4px solid #854fff', paddingBottom: '10px' } : { paddingBottom: '5px' }"
      :class="[{ active: profileSection === 'profileInfo' }]" 
    >
    <strong>Personal</strong>
  </h6>
    <h6 
      @click="selectProfileSection('addressInfo')" 
      style="cursor: pointer;"
      :style="profileSection === 'addressInfo' ? { borderBottom: '4px solid #854fff', paddingBottom: '10px' } : { paddingBottom: '5px' }"
      :class="[{ active: profileSection === 'addressInfo' }]" 
    >
    <strong>Address</strong>
  </h6>
  </div>
    <CForm novalidate :validated="validatedCustom01" @submit.prevent="handleSave" class="row g-3 needs-validation">
      <div class="" v-if="profileSection === 'profileInfo'">
        <div class="d-flex gap-4">
        <CustomInput
        v-model="data.firstname"
        feedbackInvalid="Firstname is required"
        placeholder="Enter FirstName"
        label="First Name:"
        type="text"
        required
      />
       <CustomInput
        v-model="data.lastname"
        feedbackInvalid="LastName is required"
        placeholder="Enter LastName"
        type="text"
        label="Last Name:"
        required
      />
      </div>
      <div class="d-flex gap-4">
        <CustomInput
        v-model="data.email"
        feedbackInvalid="Email is required"
        placeholder="Enter Email"
        label="Email:"
        type="email"
        required
      />
       <CustomInput
        v-model="data.mobile"
        feedbackInvalid="Phone Number is required"
        placeholder="Enter Phone Number"
        type="text"
        label=" Phone Number:"
        required
      />
      </div>
      <div class="d-flex gap-4">
        <CustomInput
        v-model="data.birth"
        placeholder="12/08/2001"
        type="text"
        label="Date of Birth:"
        required
      />
       <CustomInput
        v-model="data.nationality"
        placeholder="Enter Nationality"
        type="text"
        label="Nationality:"
        required
      />
      </div>
      <div class="form-check form-switch pt-3">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"/>
        <label class="form-check-label p-color mx-2" for="flexSwitchCheckDefault2">
        <small>Use full name to display </small>
        </label>
      </div>
      </div>
      <div class="" v-if="profileSection === 'addressInfo'">
        <div class="d-flex gap-4">
        <CustomInput
        v-model="data.address1"
        feedbackInvalid="Address is required"
        placeholder="Enter Address Line 1"
        label="Address Line 1:"
        type="text"
        required
      />
       <CustomInput
        v-model="data.address2"
        feedbackInvalid="Address 2 is required"
        placeholder="Enter Address Line 2"
        type="tel"
        label="Address Line 2:"
        required
      />
      </div>
      <div class="d-flex gap-4">
        <CustomInput
        v-model="data.state"
        placeholder="Enter State"
        type="text"
        label="State:"
        required
      />
       <CustomInput
        v-model="data.country"
        placeholder="Enter Country"
        type="text"
        label="Country:"
        required
      />
      </div>
      </div>
    </CForm>
  </CustomModal>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CustomModal from '@/components/CustomModal.vue';
import { CForm } from '@coreui/vue';
import CustomInput from '@/components/CustomInput.vue';

const store = useStore();
const route = useRoute();

const user = ref('');

const data = ref({
  firstname: user?.value?.firstname,
  lastname: '',
  email: '',
  mobile: '',
  birth: '',
  nationality: '',
  state: '',
  country: '',
  address1: '',
  address2: '',
})
const currentSection = ref('personalInfo')
const profileSection = ref('profileInfo')
const visibleModal = ref(false)
const fileInput = ref(null);

const selectSection = (section) => {
  currentSection.value = section
}

const selectProfileSection = (section) => {
  profileSection.value = section
}

const openModal = () => {
  visibleModal.value = true;
};

const handleSave = () => {
  console.log('handleSave called');
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Selected file:', file);
  }
};

onMounted(()=>{
  if (route.query.section) {
    selectSection(route.query.section);
  }
  user.value = store.getters['auth/user'];
  data.value={
    firstname: user?.value?.firstname,
    lastname: user?.value?.lastname,
    email: user?.value?.email,
    mobile: user?.value?.mobile,
  }
})

watch(route, (newRoute) => {
  if (newRoute.query.section) {
    selectSection(newRoute.query.section);
  }
});
</script>

<style scoped>
  .menus{
    transform: translate(215px, 50px)!important;
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
  .p-color{
    color: #526484;
  }

.active {
  color: #8b58ff!important;
}
.custom-input:focus,
.custom-input:hover {
  box-shadow: none !important;
  outline: none !important;
}
.custom-input:focus {
  border: 1px solid #e2e5eb !important;
}
.custom-input {
  border: 1px solid #e2e5eb !important;
}

</style>
