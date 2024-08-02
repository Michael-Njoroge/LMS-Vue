<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          {
            header: 'Skill Link',
          },
          {
            href: '/admin',
            title: 'Dashboard',
            icon: 'fa fa-user',
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link',
              },
            ],
          },
           {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user',
          },
           {
            href: '/admin/dashboard',
            title: 'Dashboard',
            icon: 'fa fa-user',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link',
              },
              {
                href: '/charts/sublink',
                title: 'Sub Link',
              },
              {
                href: '/charts/sublink',
                title: 'Sub Link',
              },
            ],
          },
        ],
      }
    },
  }
</script>
<style scoped>
.v-sidebar-menu {
  max-width: 200px !important;
}
</style>