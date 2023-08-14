<template>
  <div id="app">
    <router-view/>
  </div>
 
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener("storage", (event) => {
      if (event.key === "cart" || event.key === "products") {
        this.$store.commit("updateCartFromLocalStorage");
      }  
    });
  },

 
}
</script>

<style>
html{
  scroll-behavior: smooth;
  
}
::-webkit-scrollbar {
  width: 8px; 
}


::-webkit-scrollbar-thumb {
  background-color: transparent; 
  border: none;
}


</style>

