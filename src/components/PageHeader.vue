<template>
  <div class="container mb-4">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark px-2 me-4" :style="{backgroundColor:'#f3f4f7'}">
        <div class="col-2 px-4">
          <strong><router-link class="navbar-brand text-dark" to="/"> 
          <CAvatar class="fs-3" text-color="white" size="md" src="/images/l.jpg"></CAvatar>
          SkillLink
        </router-link></strong>
        </div>
       <div class="col-10 px-4">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="courses">Courses</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/admin">Admin</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link text-dark" to="#">Tutorials</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link text-dark" to="#">Tutorials</router-link>
            </li>
             <li class="nav-item">
              <router-link class="nav-link text-dark" to="#">Tutorials</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-transparent text-dark" type="submit">Search</button>
          </form>
          <div class="navbar-nav ms-auto">
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-dark" href="#" id="langDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Lang
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                <li><a class="dropdown-item text-dark" href="#">EN</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item text-dark" href="#">ES</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item text-dark" href="#">RU</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item text-dark" href="#">FA</a></li>
              </ul>
            </div>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-dark" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><router-link class="dropdown-item text-dark" to="/login">Sign In</router-link></li>
                <li class="dropdown-divider"></li>
                <li><router-link class="dropdown-item text-dark" to="/signup">Sign Up</router-link></li>
              </ul>
            </div>
          </div>
        </div>
       </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { CAvatar} from '@coreui/vue';
</script>

<style scoped>
.navbar-collapse {
  overflow: visible;
}
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1030;
}
.dropdown-menu {
  width: 50px; 
}

.dropdown-menu{
  width: 10px!important;
  margin-top: 12px!important;
  font-weight: bold!important;
  line-height: 15px;
  font-size: 15px;
  border-radius: 0;
}
</style>
