<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Shopping Cart</h3>
      </div>
    </div>
    <div class="row mt-2 pt-3" v-for="prod in cartProducts" :key="prod">
      <div class="col-1"></div>
      <div class="col-md-3">
        <img
          src="../assets/photo.jpg"
          alt="exampleImage"
          class="w-50 card-image-top embed-responsive embed-responsive-16by9"
          style="object-fit: cover"
        />
      </div>

      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h5 class="card-title">{{ prod.title }}</h5>

          <p class="mb-0 font-weight-bold" id="item-price">
            Preis: {{ prod.preis }} €
          </p>

          <div class="button-container mt-1" style="float: left">
            <h6>Quantity:</h6>
            <div class="quantity-input ml-2">
              <button class="quantity-button" @click="removeFromCart(prod)">
                <i class="bi bi-trash"></i>
              </button>
              <p class="mb-0 mx-3 quantity-place" style="float: left">
                {{ prod.quantity }}
              </p>
              <button class="quantity-button" @click="addToCart(prod)">
                <i class="bi bi-bag-plus-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-4">
        <p class="mb-0 items-center" style="float: center">
          <strong>Total</strong>
          <span class="font-weight-bold">
            : {{ prod.preis * prod.quantity }} €
          </span>
        </p>
      </div>
      <div class="col-12"><hr /></div>
    </div>

    <!-- price for all products -->

    <div class="col-sm-4 col-md-8 col-lg-12 total-price">
      <div class="row">
        <div class="col-8">
          <h5>
            <strong class="">Total quantity</strong>
            : {{ $store.getters.totalQuantity }}
          </h5>
        </div>
        <div class="col">
          <h5>
            <strong>Total Price</strong>
            : {{ $store.getters.totalCartPrice }}
          </h5>
        </div>
      </div>
    </div>

    <div class="col-sm-4 col-md-8 col-lg-12 mt-4">
      <div class="card" style="background-color: lightskyblue">
        <div class="card-title text-center pt-2">
          <router-link
            :to="{ name: 'home' }"
            style="text-decoration: none; color: black; font-weight: bold"
            >Continue shopping</router-link
          >
        </div>
      </div>
      <div
        class="card mt-3"
        style="background-color: green; font-weight: bold; color: white; cursor: pointer;"
      >
        <div class="card-title text-center pt-2" @click="paymentMethod">
          Payment
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckOutComponent.vue",
  data() {
    return {
      totalCost: 0,
      totalQuantity: 0,
    };
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    addToCart(prod) {
      if (prod.Lagerbestand > 0) {
        this.$store.commit("addToCart", prod);
      } else {
        alert(`${prod.title} is out of stock!`);
      }
    },
    removeFromCart(prod) {
      this.$store.commit("removeFromCart", prod);
    },
    paymentMethod() {
      alert("Successful");
    },
  },
};
</script>

<style scoped>
.total-price {
  text-align: end;
  font-weight: 500;
}

.quantity-place {
  background-color: aliceblue;
  width: 35px;
  text-align: center;
  border-radius: 5px;
}
.quantity-input {
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 30px;
}

.quantity-button {
  background-color: lightgray;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.quantity-field {
  border: none;
  text-align: center;
  width: 30px;
  font-size: 14px;
}
</style>
