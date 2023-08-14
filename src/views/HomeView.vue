<template>
  <body>
    <header class="navbar">
    <NavBar/>
    </header>   
    <main class="container content">
      <div>
        <FilterComponent></FilterComponent>
      </div>
      <div class="mt-3">
        <HomePage></HomePage>
      </div>
    </main>
  </body> 
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HomePage from "@/components/HomePage.vue";
import FilterComponent from "@/components/FilterComponent.vue";
export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage,
    FilterComponent
  },
}
</script>

<style>
html{
  scroll-behavior: smooth;
}
header {
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
}

.content {
  margin-top: 80px; 
}
</style>