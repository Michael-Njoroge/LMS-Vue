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
  const adminRoutes = 
  [
    'Admin', 
    'Users', 
    'TutorialCategory', 
    'Tutorials', 
    'ProjectCategory', 
    'AddProject', 
    'EditProject', 
    'Projects',
    'ProfilePage'
    ];
  return adminRoutes.includes(route.name);
});
const adminMenu = [
  {
    header: 'Skill Link',
  },
  {
    href: '/admin',
    title: 'Dashboard',
    icon: 'fa fa-home', 
  },
  {
    title: 'Courses',
    icon: 'fa fa-book', 
    child: [
      {
        href: '/admin/courses-category',
        icon: 'fa fa-tags', 
        title: 'Categories',
      },
      {
        href: '/admin/courses',
        icon: 'fa fa-list-alt', 
        title: 'Course List',
      },
    ],
  },
  {
    title: 'Instructors',
    icon: 'fa fa-user-tie', 
    child: [
      {
        href: '/admin/courses-category',
        icon: 'fa fa-chalkboard-teacher', 
        title: 'Instructor Overview',
      },
      {
        href: '/admin/courses',
        icon: 'fa fa-users', 
        title: 'Instructor List',
      },
      {
        href: '/admin/courses',
        icon: 'fa fa-user-edit', 
        title: 'Instructor Details',
      },
      {
        href: '/admin/courses',
        icon: 'fa fa-money-check-alt', 
        title: 'Instructor Payment',
      },
    ],
  },
  {
    title: 'Students',
    icon: 'fa fa-user-graduate',
    href: '/admin/users',
  },
  {
    title: 'Enrolment',
    icon: 'fa fa-user-plus', 
    child: [
      {
        href: '/admin/tutorials-category',
        icon: 'fa fa-history',
        title: 'Enroll History',
      },
      {
        href: '/admin/tutorials',
        icon: 'fa fa-user-check',
        title: 'Enroll a Student',
      },
    ],
  },
  {
    title: 'Messages',
    icon: 'fa fa-envelope',
    href: '/admin/users',
  },
  {
    title: 'Tutorials',
    icon: 'fa fa-video',
    child: [
      {
        href: '/admin/tutorials-category',
        icon: 'fa fa-folder', 
        title: 'Tutorial Category',
      },
      {
        href: '/admin/tutorials',
        icon: 'fa fa-play-circle',
        title: 'All Tutorials',
      },
    ],
  },
  {
    title: 'Projects',
    icon: 'fa fa-tasks', 
    child: [
      {
        href: '/admin/project-category',
        icon: 'fa fa-folder',
        title: 'Project Category',
      },
      {
        href: '/admin/project-list',
        icon: 'fa fa-project-diagram', 
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
        icon: 'fa fa-book', 
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
        icon: 'fa fa-film', 
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
  color: #526484!important;
  font-weight: bold;
}

.vsm--icon {
  background-color: transparent!important;
  color: #526484!important;
  font-weight: bold;
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
  color: #5094ae!important;
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
.vsm--link_open{
  background-color: transparent!important;
}

.vsm--dropdown{
  margin-right: 16px!important;
  margin-left: 16px!important;
}
</style>
