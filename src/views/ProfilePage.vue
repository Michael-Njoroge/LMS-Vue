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
              <span style="color: #667692;"><small>{{loginHistory[0]?.login_at}}</small></span>
            </div>
            <div class="d-flex flex-column my-2">
              <span class="text-muted"><strong>Login IP</strong></span>
              <span style="color: #667692;"><small>{{loginHistory[0]?.ip_address}}</small></span>
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
            <div class="card p-0 m-0 mb-4">
              <div class="card-header d-flex">
               <span class="col-5">Browser </span>
               <span class="col-2">IP </span>
               <span class="col-2">Time </span>
              </div>
              <div class="card-body p-0" v-for="(item, index) in paginatedLoginHistory" :key="index">
                 <div class="d-flex text-muted data-item p-2 px-3">
                  <span class="col-5"><small>{{item?.user_agent}}</small></span>
                  <span class="col-2"><small>{{item?.ip_address}}</small></span>
                  <span class="col-2"><small>{{item?.login_at}}</small></span>
                  <span class="material-icons text-end px-5 fs-5 col-3">close</span>
                </div>
              </div>
               <div class="card-footer d-flex justify-content-end gap-4 align-items-center ">
                <a href="javascript:void(0)" style="text-transform: initial;" :style="{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }"  @click="prevPage" :disabled="currentPage === 1" class="btn btn-sm btn-primary">Previous</a>
                <p class="mb-0">page {{currentPage}} of {{totalPages}}</p>
                <a href="javascript:void(0)" style="text-transform: initial;" :style="{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }"  @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-sm btn-primary">Next</a>
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
                      <button @click="changePassModal()" type="button" style="text-transform: initial;" class="btn btn-primary btn-sm mb-0">Change Password</button>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>   
                  <div class="mt-3 data-item mb-4">
                  <div class="mx-4">
                      <div class="d-flex align-items-center gap-2">
                        <h6 class="fw-bolder mb-0" style="color: #364a63;">2 Factor Auth</h6>
                        <span :class="['badge', is2FAEnabled ? 'bg-success' : 'bg-danger', 'mb-0']">
                          {{ is2FAEnabled ? 'Enabled' : 'Disabled' }}
                        </span>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                          <p class="text-muted mb-0 me-3" style="color: #526484; flex-grow: 1;">
                              <small>Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using an app. You can receive this code by mobile app.</small>
                          </p>
                          <button @click="toggle2FA" :disabled="isProcessing" type="button" style="text-transform: initial; padding: 5px 12px;" class="btn btn-primary btn-sm mb-0"> {{ is2FAEnabled ? 'Disable' : 'Enable' }} </button>
                      </div>
                  </div>   
              </div>

               <CustomModal
                 :visible="visibleModal2"
                  @update:visible="visibleModal2 = $event"
                  @save="confirmAction"
                  :modalTitle="is2FAEnabled ? 'Disable 2FA' : 'Add QR Code'"
                  colorCancel="secondary"
                  colorSave="success text-white w-100"
                  alignment="center"
                  width="600px"
                  borderBottom="none"
                  :buttonText="is2FAEnabled ? 'Disable 2FA' : 'Enable 2FA'"
                  type="submit"
                  backgroundColor="#f5f6fa"
                  :disabled="!isCodeComplete"
               >
                  <CForm novalidate :validated="validatedCustom03" @submit.prevent="confirmAction" class="row g-3 needs-validation">
                    <p class="text-muted">{{ is2FAEnabled ? 'Are you sure you want to disable two-factor authentication?' : "Using your authenticator app, scan the barcode below. Once you've scanned the barcode, confirm the code you received." }}</p>
                    <div v-if="!is2FAEnabled">
                      <div v-html="qrCode" class="d-flex align-items-center justify-content-center mx-auto" style="max-width: 150px; max-height: 150px; text-align: center;"></div>
                      <p v-if="!toggleSecret" class="text-center mt-2" style="cursor: pointer;" @click="showSecret"><strong>Can't scan the code?</strong></p>
                      <p v-if="toggleSecret" class="mt-2 text-center" style="cursor: pointer;">
                        <span class="mx-1">Enter the secret key</span>
                        <span class="fw-bolder px-2 py-1 text-muted text-small" style="background-color: #fde6e9;border-radius: 5px;">{{secret}}</span>
                      </p>
                        <div class="d-flex flex-column mb-3">
                          <label class="text-muted">Enter the code from your authenticator app</label>
                          <strong v-if="message" class="small text-center text-danger mt-2">{{ message }}</strong>
                        </div>
                        <div class="code-input">
                          <input
                            v-for="(digit, index) in code"
                            :key="index"
                            v-model="code[index]"
                            @input="moveFocus(index)"
                            @keydown.backspace="moveBack(index)"
                            maxlength="1"
                            class="digit-input"
                            autofocus
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            :ref="el => inputRefs[index] = el"
                          />
                        </div>
                    </div>
                  </CForm>
              </CustomModal>

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
          icon="person"
          required
        />
         <CustomInput
          v-model="data.lastname"
          feedbackInvalid="LastName is required"
          placeholder="Enter LastName"
          type="text"
          label="Last Name:"
          icon="person"
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
          icon="email"
          required
        />
         <CustomInput
          v-model="data.mobile"
          feedbackInvalid="Phone Number is required"
          placeholder="Enter Phone Number"
          type="text"
          label=" Phone Number:"
          icon="phone"
          required
        />
        </div>
        <div class="d-flex gap-4">
          <CustomInput
          v-model="data.birth"
          placeholder="12/08/2001"
          type="text"
          label="Date of Birth:"
          icon="calendar_today"
          required
        />
         <CustomInput
          v-model="data.nationality"
          placeholder="Enter Nationality"
          type="text"
          label="Nationality:"
          icon="flag"
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
          icon="place"
          required
        />
         <CustomInput
          v-model="data.address2"
          feedbackInvalid="Address 2 is required"
          placeholder="Enter Address Line 2"
          type="tel"
          label="Address Line 2:"
          icon="place"
          required
        />
        </div>
        <div class="d-flex gap-4">
          <CustomInput
          v-model="data.state"
          placeholder="Enter State"
          type="text"
          label="State:"
          icon="location_city"
          required
        />
         <CustomInput
          v-model="data.country"
          placeholder="Enter Country"
          type="text"
          label="Country:"
           icon="public"
          required
        />
        </div>
        </div>
      </CForm>
  </CustomModal>

  <CustomModal
    :visible="visibleModal1"
    @update:visible="visibleModal1 = $event"
    @save="handlePasswordSave"
    modalTitle="Update Password"
    colorCancel="secondary"
    colorSave="success text-white w-100"
    borderBottom="none"
    buttonText="Update"
    type="submit"
    backgroundColor="#f5f6fa"
    :disabled="isFormInvalid || passwordMatchError"
  >
    <div v-if="message" class="alert text-center alert-danger">
      {{ message }}
    </div>
    <CForm novalidate :validated="validatedCustom02" @submit.prevent="handlePasswordSave" class="row needs-validation">
      <CustomInput
        v-model="passwordData.currentPassword"
        feedbackInvalid="Current Password is required"
        placeholder="Enter Current Password"
        label="Current Password:"
        icon="lock"
        type="password"
        required
      />
    <CustomInput
        v-model="passwordData.password"
        feedbackInvalid="New Password is required"
        placeholder="Enter New Password"
        type="password"
        icon="lock_open"
        label="New Password:"
        required
      />
      <div class="mb-3">
        <CustomInput
          v-model="passwordData.password_confirmation"
          placeholder="Enter Password Again"
          feedbackInvalid="Confirm Password is required"
          type="password"
          icon="verified_user"
          label="Confirm Password:"
          required
        />
         <div v-if="passwordMatchError" class="invalid-feedback d-block">
          Passwords do not match
        </div>
      </div>
    </CForm>
  </CustomModal>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import CustomModal from '@/components/CustomModal.vue';
// import CustomButton from '@/components/CustomButton.vue';
import { CForm } from '@coreui/vue';
import CustomInput from '@/components/CustomInput.vue';

const store = useStore();
const route = useRoute();

const user = ref('');
const loginHistory = ref([]);
const itemsPerPage = 5;
const currentPage = ref(1);
const validatedCustom02 = ref(false);
const validatedCustom03 = ref(false);

const is2FAEnabled = ref(false);
const isProcessing = ref(false);
const visibleModal2 = ref(false)
const toggleSecret = ref(false)
const code = ref(['', '', '', '', '', '']);
const inputRefs = ref([]);
const qrCode = ref('');
const secret = ref('');


const moveFocus = (index) => {
  if (code.value[index].length === 1 && index < code.value.length - 1) {
    inputRefs.value[index + 1].focus();
  }
};

const moveBack = (index) => {
  if (code.value[index] === '' && index > 0) {
    inputRefs.value[index - 1].focus();
  }
};

const isCodeComplete = computed(() => {
  return code.value.every(digit => digit.length === 1);
});

const showSecret = () => {
    toggleSecret.value = true
}

const data = ref({
  firstname: '',
  lastname: '',
  email: '',
  mobile: '',
  birth: '',
  nationality: '',
  state: '',
  country: '',
  address1: '',
  address2: '',
});

const toggle2FA = () => {
  if (is2FAEnabled.value) {
    visibleModal2.value = true;
  } else {
    enable2FA();
  }
};

const enable2FA = async () => {
  isProcessing.value = true;
  try {
    await store.dispatch('auth/enable2FA');
    const response = store.getters['auth/enable2FA'];
    setTimeout(() => {
      store.dispatch('auth/clearMessage');
    }, 100);
    qrCode.value = response.qr_code
    secret.value = response.string
    visibleModal2.value = true;
  } catch (error) {
    console.error('Error enabling 2FA:', error);
  } finally {
    isProcessing.value = false;
  }
};

// Watch for when the code becomes complete
watch(isCodeComplete, (newValue) => {
  if (newValue) {
    confirmAction();
  }
});

const confirmAction = async () => {
  isProcessing.value = true;
  try {
    if (is2FAEnabled.value) {
      await store.dispatch('auth/disable2FA');
      setTimeout(() => {
        store.dispatch('auth/clearMessage');
      }, 3000);
    } else {
      await store.dispatch('auth/confirm2FA', { code: code.value.join('') });
      setTimeout(() => {
        store.dispatch('auth/clearMessage');
      }, 3000);
    }
  } catch (error) {
    console.error('Error confirming 2FA:', error);
  } finally {
    isProcessing.value = false;
  }
};

const passwordData = ref({
  currentPassword: '',
  password: '',
  password_confirmation: '',
});

const currentSection = ref('personalInfo')
const profileSection = ref('profileInfo')
const visibleModal = ref(false)
const visibleModal1 = ref(false)
const message = computed(() => store.getters['auth/message']);
const passwordMatchError = ref(false);
const fileInput = ref(null);

const isFormInvalid = computed(() => 
  passwordData.value.currentPassword === '' ||
  passwordData.value.password === '' ||
  passwordData.value.password_confirmation === ''
);

const selectSection = (section) => {
  currentSection.value = section
}

const selectProfileSection = (section) => {
  profileSection.value = section
}

const openModal = () => {
  visibleModal.value = true;
};

const changePassModal = () => {
  visibleModal1.value = true;
};

const handleSave = () => {
  if (profileSection.value === 'profileInfo') {
    saveProfileInfo();
  } else if (profileSection.value === 'addressInfo') {
    saveAddressInfo();
  }
};

const saveProfileInfo = () => {
  const profileData = {
    firstname: data.value.firstname,
    lastname: data.value.lastname,
    email: data.value.email,
    mobile: data.value.mobile,
    birth: data.value.birth,
    nationality: data.value.nationality,
  };
  console.log('Saving profile information:', profileData);
};
const saveAddressInfo = () => {
  const addressData = {
    address1: data.value.address1,
    address2: data.value.address2,
    state: data.value.state,
    country: data.value.country,
  };
  console.log('Saving address information:', addressData);
};

watch([() => passwordData.value.password, () => passwordData.value.password_confirmation], () => {
  passwordMatchError.value = passwordData.value.password !== passwordData.value.password_confirmation;
});

const handlePasswordSave =  async(event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity() || passwordMatchError.value) {
    event.stopPropagation();
  } else {
    try {
      await store.dispatch('auth/updatePassword', passwordData.value);
      setTimeout(() => {
        store.dispatch('auth/clearMessage');
      }, 5000);
    } catch (error) {
        console.error('Failed:', error);
    }
  }
  validatedCustom02.value = true;
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

const totalPages = computed(() => {
  return Math.ceil(loginHistory.value.length / itemsPerPage);
});

const paginatedLoginHistory = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return loginHistory.value.slice(start, end);
});

// Pagination methods
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

onMounted( async()=>{
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

  await store.dispatch('auth/loginHistory');
  loginHistory.value = store.getters['auth/loginHistory'];
  setTimeout(() => {
    store.dispatch('auth/clearMessage');
  }, 200);
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

.code-input {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
}

.digit-input {
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
