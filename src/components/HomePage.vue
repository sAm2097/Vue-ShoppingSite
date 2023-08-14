<template>
  <div class="container" ref="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 mb-4 mt-4"
        v-for="product in products"
        :key="product"
      >
        <div class="card" >
          <img src="../assets/photo.jpg" alt="" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text mr-2 mb-0">
              Anzahl : {{ product.Lagerbestand }}
            </p>
            <p class="card-text">Preis : {{ product.preis }} €</p>
            <div class="button-container mt-1">
              <button class="btn btn-primary" @click="addToCart(product)">
                Add to cart
              </button>
            </div>
            <div class="alert-container mt-3">
              <div
                class="alert alert-success mt-2"
                role="alert"
                v-if="product.showSuccessAlert"
              >
                Product added to cart!
              </div>
              <div
                class="alert alert-danger mt-2"
                role="alert"
                v-if="product.showDangerAlert"
              >
                Product not available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      // showDangerAlert:false,
      // showSuccessAlert:false
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(product) {
       if (product.Lagerbestand > 0) {
        this.$store.commit("addToCart", product);        
        product.showSuccessAlert = true;
        product.showDangerAlert = false;
        setTimeout(() => {
          product.showSuccessAlert = false;
        }, 2000);
      } else {
        product.showDangerAlert = true;
        product.showSuccessAlert = false;
        setTimeout(() => {
          product.showDangerAlert = false;
        }, 2000);
      }
    },
  
  },
 
};
</script>

<style>
.button-container {
  display: flex;
  gap: 5rem;
  justify-content: center;
}
</style>
