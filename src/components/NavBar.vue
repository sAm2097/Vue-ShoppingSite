<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <router-link :to="{name:'home'}" class="navbar-brand ms-4">E-Cart</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">      
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ABRIO Cart</h5>
        <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
        <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <form class="d-flex mx-auto p-2" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
        <li class="nav-item dropdown me-4">
          <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account details
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">User Account</a></li>
            <li><a class="dropdown-item" href="#">User orders</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>
          <li class="nav-item" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
            <router-link :to="{name:'cart'}" class="nav-link" style="font-size: 1.5rem;"><i class="bi bi-cart3"></i><sup  style="font-size: 60%; color: lightgreen ; font-weight: bolder;">{{ $store.getters.totalQuantity }}  </sup></router-link>
          </li>     
        </ul>      
      </div>
    </div>
  </div>
</nav>
  </template>

<script>
export default {

}
</script>

<style>

</style>

