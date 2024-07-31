<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark bg-info px-4">
        <strong><router-link class="navbar-brand text-dark" to="/">LMS App</router-link></strong>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">Tutorials</a>
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
                <li><a class="dropdown-item text-dark" href="#">ES</a></li>
                <li><a class="dropdown-item text-dark" href="#">RU</a></li>
                <li><a class="dropdown-item text-dark" href="#">FA</a></li>
              </ul>
            </div>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-dark" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <em>Michael</em>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><router-link class="dropdown-item text-dark" to="/">Profile</router-link></li>
                <li><router-link class="dropdown-item text-dark" to="/login">Sign Out</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
};
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
</style>
