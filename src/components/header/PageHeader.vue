<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark bg-info px-4">
        <strong><a class="navbar-brand text-dark" href="#">LMS</a></strong>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
                <em>User</em>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a class="dropdown-item text-dark" href="#">Profile</a></li>
                <li><a class="dropdown-item text-dark" href="#">Sign Out</a></li>
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
