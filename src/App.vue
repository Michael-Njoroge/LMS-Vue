<template>
  <div class="layout">
      <PageHeader v-if="$route.name !== 'Admin'"/>
      <AdminHeader v-if="$route.name === 'Admin'" class="admin-header"/>
    <div :class="{'content-wrapper' : $route.name === 'Admin'}">
      <aside v-if="$route.name === 'Admin'" class="admin-sidebar">
        <AdminSidebar />
      </aside>
        <router-view :class="{ 'content-container': $route.name === 'Admin' }"/>
    </div>
      <PageFooter v-if="$route.name !== 'Admin'" />
      <AdminFooter class="adfooter" v-if="$route.name === 'Admin'" />
  </div>
</template>

<script setup lang="js">
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import AdminFooter from "@/components/AdminFooter.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import AdminSidebar from "@/components/AdminSidebar.vue";
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


.admin-header {
  background-color: #f8f9fa;
  margin-left: 200px;
}

.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;  
}

.content-container {
  flex: 1;
  margin-left: 200px; 
  padding: 20px;
  overflow: auto;  
}

.adfooter {
  background-color: #f8f9fa;
  box-sizing: border-box;
  z-index: 1; 
  margin-left: 200px; 
  position: relative; 
}
.vsm--toggle-btn{
    display: none!important;
    background-color: transparent;
}
.vsm--menu {
  width: auto !important;
}
.vsm--link_active {
   background-color: transparent!important;
}
.vsm--link_active .vsm--icon {
      color: #6261cc!important;
}

.vsm--link  .vsm--icon:hover {
      color: #6261cc!important;
}

.v-sidebar-menu{
    background-color: #f0f0f0!important;
}
.vsm--title{
    color: #333333!important;
}
 .vsm--icon {
    background-color: transparent!important;
    color: #333333!important;
}

.vsm--link_active .vsm--title span {
  color: #6261cc !important;  
}

.vsm--link:hover {
      color: #6261cc!important;
}

.vsm--link:hover .vsm--icon {
  color: #6261cc !important; 
}

.vsm--link .vsm--title:hover{
     color: #6261cc !important; 
}

.v-sidebar-menu .vsm--dropdown{
    background-color: transparent!important;
    text-align: center;
}
.vsm--header {
    color: #333333!important;
    text-align: center;
    margin-top: 8px;
    cursor: pointer;
    font-size: 18px!important;
}
.vsm--link:hover {
  background-color: transparent !important; 
  color: #007bff !important; 
}

.v-sidebar-menu .vsm--link{
    padding: 5px 7px!important;
}

</style>
