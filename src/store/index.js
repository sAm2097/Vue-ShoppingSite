import { createStore } from "vuex";
// import { v4 as uuidv4 } from 'uuid'
import InitialProducts from "./products";

// setting cart to localstorage
function updateLocalStorage(cart, products) {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("products", JSON.stringify(products));
  
}

export default createStore({
  state: {
    products: InitialProducts,
    cart: [],
  },

  getters: {
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id);
        return {
          ...product,
          quantity: cartItem.quantity
        };
      });
    },
    totalCartPrice(state) {
      return state.cart.reduce((total, item) => total + item.preis * item.quantity, 0);
    }
  },

  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
        state.products.forEach((p) => {
          if (p.id === product.id) {
            p.Lagerbestand--;
            
          }
        });
      } else {
        state.cart.push({ ...product, quantity: 1 });
        state.products.forEach((p) => {
          if (p.id === product.id) {
            p.Lagerbestand--;
           
          }
        });
      }
      console.log(state.cart);
      updateLocalStorage(state.cart, state.products);
      
    },

    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }

      const savedProducts = localStorage.getItem("products");
      if (savedProducts) {
        state.products = JSON.parse(savedProducts);
        state.products.forEach((product) => {
          product.showSuccessAlert = false;
          product.showDangerAlert = false;
        });
      }
    },

    updateProducts(state, filteredProducts) {
      state.products = filteredProducts;
    },

    // resetting values for filtering
    resetProducts(state) {
      state.products = InitialProducts;
    },
  },
  actions: {},
  modules: {},
  plugins: [(store) => store.commit("updateCartFromLocalStorage")],
});
