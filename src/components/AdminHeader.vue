<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-between w-100 gap-3">
        <div class="d-flex align-items-center justify-content-center">
          <span class="material-icons fs-4 icons" >search</span>
        </div>
        <form class="search-form">
          <input type="search" class="form-control" placeholder="Search anything..." />
        </form>
        <div class="d-flex gap-4 align-items-center justify-content-center">
          <div class="d-flex gap-4 align-items-center justify-content-center">
             <div class="dropdown mt-2">
            <a href="javascript:void(0)" id="messageDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <span class="material-icons fs-4 icons">message</span>
              <span class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">2</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end custom-dropdown-menu1" aria-labelledby="messageDropdown">
              <div class="dropdown-item text-color d-flex justify-content-between align-items-center">
                <small class="px-2 text-color" style="cursor: default;">Recent Chats</small>
                <a href="javascript:void(0)" style="text-decoration: none;" class="d-flex align-items-center">
                  <span class="material-icons fs-6 text-color">settings</span>
                  <small class="px-2 text-color">Setting</small>
                </a>
              </div>
            <li class="dropdown-divider"></li>
            <div class="scrollable-part">
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/2_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">Now</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/7_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">4:49 AM</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/1_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">4:49 AM</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/5_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">4:49 AM</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/13_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">4:49 AM</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex">
                  <img src="/images/9_jpg.jpg" class="rounded-circle chat-avatar mb-0" style="width: 50px;height: 50px;" alt="user image">
                  <div class="chat-details d-flex flex-column ms-2 justify-content-center mt-1">
                    <p class="chat-name text-start text-color"><strong>Iliash Hossain</strong></p>
                    <p class="chat-snippet text-color"><small>You: Please confirm if you got my last...</small></p>
                  </div>
                  <div class="d-flex flex-column align-items-end ms-auto mt-1" style="margin-right: 10px;">
                    <span class="chat-time fs-6 mb-2"><small style="font-size: 12px;" class="text-color">4:49 AM</small></span>
                    <span class="material-icons bg-dark text-white p-1 mt-1" style="border-radius: 50%; font-size: 10px;">check</span>
                  </div>
                </div>
              </li>
             </div>
              <li class="dropdown-divider"></li>

              <li class="text-center my-3"><a href="javascript:void(0)" style="text-decoration: none;" class="text-color">View All</a></li>
            </ul>
          </div>
            <div class="dropdown mt-2">
            <a href="javascript:void(0)" id="notificationDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside">
              <span class="material-icons fs-4 icons">notifications</span>
              <span class="badge rounded-pill bg-danger px-1 position-absolute top-0 start-100 translate-middle">1</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end custom-dropdown-menu1" aria-labelledby="notificationDropdown">
              <div class="dropdown-item text-color d-flex justify-content-between align-items-center">
                <small class="px-2 text-color" style="cursor: default;">Notifications</small>
                <a href="javascript:void(0)" style="text-decoration: none;" class="d-flex align-items-center">
                  <span class="material-icons fs-6 text-color">mark_email_read</span>
                  <small class="px-2 text-color">Mark All as Read</small>
                </a>
              </div>
              <li class="dropdown-divider"></li>
              <div class="scrollable-part">
                 <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-danger fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-success fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-color fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-warning fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-warning fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item dropdown-list">
                <div class="recent-chat-item d-flex align-items-center gap-4">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle" style="width: 50px; height: 50px;">
                    <span class="material-icons text-warning fs-3">new_releases</span>
                  </div>
                  <div class="chat-details d-flex flex-column gap-2">
                    <p class="chat-name text-start text-color mb-1"><strong>Your Deposit Order is placed</strong></p>
                    <p class="chat-snippet text-color text-start mb-1"><small>2 hrs ago</small></p>
                  </div>
                </div>
              </li>
              <li class="dropdown-divider"></li>
              </div>
              <li class="text-center my-3"><a href="javascript:void(0)" style="text-decoration: none;" class="text-color">View All</a></li>
            </ul>
          </div>
          </div>
          <div class="dropdown">
            <a href="javascript:void(0)" id="notificationDropdown" data-bs-toggle="dropdown">
              <img src="/images/user.png" class="rounded-circle" alt="User Avatar" style="width: 40px; height: 40px;">
            </a>
            <ul class="dropdown-menu dropdown-menu-end custom-dropdown-user p-0" style="border-radius: 3px;" aria-labelledby="notificationDropdown">
                <div class="recent-chat-item d-flex align-items-center gap-3 justify-content-center" style="background-color: #f5f6fa!important;">
                  <div class="d-flex justify-content-center align-items-center bg-light rounded-circle my-3">
                    <img src="/images/user.png" class="rounded-circle" alt="User Avatar" style="width: 60px; height: 60px;">
                  </div>
                  <div class="chat-details d-flex flex-column gap-1">
                    <p class="chat-name text-start text-color mt-3"><strong>{{admin?.firstname}} {{admin?.lastname}}</strong></p>
                    <p class="chat-snippet text-color text-start"><small>{{admin?.email}}</small></p>
                </div>
              </div>
              <li class="dropdown-divider m-0"></li>
              <li class="dropdown-item mx-3">
                  <div class="chat-details">
                    <router-link 
                      :to="{ path: '/admin/profile', query: { section: 'personalInfo' } }"
                      class="text-color d-flex align-items-center gap-2 mt-2" 
                      style="text-decoration: none; ">
                      <span class="material-icons fs-5 " style="cursor: default; color: #526484;">person</span>
                      <span class="" style="color: #526484;">View Profile</span>
                  </router-link>
                  </div>
              </li>
               <li class="dropdown-item mx-3">
                  <div class="chat-details">
                    <router-link 
                      :to="{ path: '/admin/profile', query: { section: 'securitySettings' } }"  
                      class="text-color d-flex align-items-center gap-2 mt-2" style="text-decoration: none; ">
                      <span class="material-icons fs-5 " style="cursor: default; color: #526484;">settings</span>
                      <span class="" style="color: #526484;">Account Setting</span>
                  </router-link>
                  </div>
              </li>
               <li class="dropdown-item mx-3">
                  <div class="chat-details">
                    <router-link 
                      :to="{ path: '/admin/profile', query: { section: 'accountActivity' } }"   class="text-color d-flex align-items-center gap-2 mt-2" style="text-decoration: none; ">
                      <span class="material-icons fs-5 " style="cursor: default; color: #526484;">directions_run</span>
                      <span class="" style="color: #526484;">Login Activity</span>
                  </router-link>
                  </div>
              </li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-item mx-3">
                  <div class="chat-details">
                    <a href="javascript:void(0)" @click="handleLogout" class="d-flex align-items-center gap-2 mb-3" style="text-decoration: none; ">
                      <span class="material-icons fs-5 text-danger" style="cursor: default;">logout</span>
                      <span class="text-danger">Sign Out</span>
                  </a>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
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
  color: #6e82a5;
}

.search-form input{
  background-color: transparent!important;
  border: 0!important;
  color: #6e82a5;
}

.search-form input:focus{
  border: none!important;
  outline-style: none!important;
  box-shadow: none!important;
}

.custom-dropdown-menu {
  width: 400px !important;
  margin-top: 8px !important;
  line-height: 10px;
  border-radius: 3px !important;
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

.icons{
  color: #6e82a5;
}

.text-color{
  color: #8094ae;
}

.custom-dropdown-menu1 {
  position: absolute;
  right: 0;
  width: 400px !important;
  overflow-y: hidden;
  margin-top: 8px !important;
  border-radius: 3px;
}
.custom-dropdown-user{
  position: absolute;
  margin-top: 8px!important;
  border-radius: 3px;
  width: 300px;
}
.scrollable-part{
  overflow-y: auto;
  max-height: 300px; 
  padding: 0;
  margin: 0;
}
.dropdown-list:hover{
  background-color: #f5f6fa!important;
}

.badge {
  font-size: 0.75rem;
  padding: 0.3em 0.5em;
}
</style>
