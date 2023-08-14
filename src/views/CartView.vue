<template>
  <header class="navbar">
    <NavBar/>
    </header>
    <body class="content">
<CheckOutComponent></CheckOutComponent>
    </body>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CheckOutComponent from "@/components/CheckOutComponent.vue";
export default {
  name: 'HomeView',
  components: {
    NavBar,
   CheckOutComponent
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(215, 228, 232);
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
  padding-top: 20px; /* Adjust as needed */
}
</style>
