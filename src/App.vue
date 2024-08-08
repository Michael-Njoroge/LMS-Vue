<template>
  <div class="layout">
    <PageHeader v-if="!isAdminRoute"/>
    <AdminHeader v-if="isAdminRoute" class="admin-header"/>
    <div class="main-content">
      <aside v-if="isAdminRoute" class="admin-sidebar">
        <AdminSidebar :menu="adminMenu"/>
      </aside>
      <div :class="{'content-container': isAdminRoute, 'regular-content': !isAdminRoute}">
        <router-view />
      </div>
    </div>
    <PageFooter v-if="!isAdminRoute"/>
    <AdminFooter class="adfooter" v-if="isAdminRoute"/>
  </div>
</template>

<script setup lang="js">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";
import AdminFooter from "@/components/AdminFooter.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import AdminSidebar from "@/components/AdminSidebar.vue";

const route = useRoute();

// Determine if the current route requires admin privileges
const isAdminRoute = computed(() => {
  const adminRoutes = ['Admin', 'Users', 'TutorialCategory', 'Tutorials', 'ProjectCategory', 'AddProject', 'EditProject', 'Projects'];
  return adminRoutes.includes(route.name);
});

const adminMenu = [
  {
    header: 'Skill Link',
  },
  {
    href: '/admin',
    title: 'Dashboard',
    icon: 'fa fa-tachometer-alt',
  },
  {
    title: 'Users',
    icon: 'fa fa-user-friends',
    href: '/admin/users',
  },
  {
    title: 'Tutorials',
    icon: 'fa fa-chalkboard-teacher',
    child: [
      {
        href: '/admin/tutorials-category',
        icon: 'fa fa-folder-open',
        title: 'Tutorial Category',
      },
      {
        href: '/admin/tutorials',
        icon: 'fa fa-book-open',
        title: 'All Tutorials',
      },
    ],
  },
  {
    title: 'Projects',
    icon: 'fa fa-project-diagram',
    child: [
      {
        href: '/admin/project-category',
        icon: 'fa fa-folder-open',
        title: 'Project Category',
      },
      {
        href: '/admin/project-list',
        icon: 'fa fa-tasks',
        title: 'All Projects',
      },
    ],
  },
  {
    title: 'Documentations',
    icon: 'fa fa-file-alt',
    child: [
      {
        href: '/admin/documentation-category',
        icon: 'fa fa-folder-open',
        title: 'Documentation Category',
      },
      {
        href: '/admin/documentation',
        icon: 'fa fa-file-alt',
        title: 'All Documentations',
      },
    ],
  },
  {
    title: 'Videos',
    icon: 'fa fa-video',
    child: [
      {
        href: '/admin/video-category',
        icon: 'fa fa-folder-open',
        title: 'Video Category',
      },
      {
        href: '/admin/video',
        icon: 'fa fa-video',
        title: 'All Videos',
      },
    ],
  },
];

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

.main-content {
  display: flex;
  flex: 1;
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

.regular-content {
  flex: 1;
  padding: 20px;
  overflow: auto;  
}


.adfooter, .PageFooter {
  background-color: #f8f9fa;
  box-sizing: border-box;
  z-index: 1; 
  position: relative; 
  margin-left: 200px; 
}

.vsm--toggle-btn {
    display: none!important;
    background-color: transparent!important;
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

.vsm--link .vsm--icon:hover {
  color: #6261cc!important;
}

.v-sidebar-menu {
  background-color: #f0f0f0!important;
}

.vsm--title {
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

.vsm--link .vsm--title:hover {
  color: #6261cc !important; 
}

.v-sidebar-menu .vsm--dropdown {
  background-color: transparent!important;
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

.v-sidebar-menu .vsm--link {
  padding: 5px 7px!important;
}
</style>
