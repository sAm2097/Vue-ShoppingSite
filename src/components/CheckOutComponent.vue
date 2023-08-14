<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping Cart</h3>
      </div>
    </div>
      <div class="row mt-2 pt-3" v-for="prod in cartProducts" :key="prod">
        <div class="col-2"></div>
        <div class="col-md-3">
          <img
            src="../assets/photo.jpg"
            alt="exampleImage"
            class="w-50 card-image-top embed-responsive embed-responsive-16by9 "
            style="object-fit: cover"
          />
        </div>

        <div class="col-md-5 px-3">
          <div class="card-block px-3">
            <h5 class="card-title">{{ prod.title }}</h5>
          
          <p class="mb-0 font-weight-bold" id="item-price">
            {{ prod.preis }} €
          </p>
          <p class="mb-0">Quantity : {{ prod.quantity }}</p>
        </div>
        <p class="mb-0">
          Total:
          <span class="font-weight-bold">
            {{ prod.preis * prod.quantity }} €
          </span>
        </p>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr /></div>
    </div>

    <!-- price for all products -->
    <div class="total-price pt-2 text-right">
      <h5>Total: {{ $store.getters.totalCartPrice }}</h5>
    </div>
  </div>
</template>

<script>
export default {
    name:'CheckOutComponent.vue',
    data(){
        return {
            totalCost:0
        }
    },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
   
  },


};
</script>

<style scoped>
.total-price{
    text-align: end;
    font-weight: 500;
}
</style>
