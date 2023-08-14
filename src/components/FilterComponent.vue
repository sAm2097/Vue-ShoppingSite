<template>
  <div class="container-fluid">
    <div class="card">
      <div class="row m-2">
        <div class="col">
          <div class="row g-1">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h5 class="card-title ml-2">Kategorie</h5>
              <div class="row">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="categoryOptions"
                      id="a"
                      value="A"
                      v-model="selectedCategory"
                      @change="applyFilter"
                    />
                    <label class="form-check-label" for="a">A</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="categoryOptions"
                      id="b"
                      value="B"
                      v-model="selectedCategory"
                      @change="applyFilter"
                    />
                    <label class="form-check-label" for="b">B</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="categoryOptions"
                      id="c"
                      value="C"
                      v-model="selectedCategory"
                      @change="applyFilter"
                    />
                    <label class="form-check-label" for="c">C</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <h5 class="card-title ml-2">Farbe</h5>
              <div class="row">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="colorOptions"
                      id="r"
                      value="Rot"
                      v-model="selectedColor"
                      @change="applyFilter"
                    />
                    <label class="form-check-label text-danger" for="r"
                      >R</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="colorOptions"
                      id="g"
                      value="Grün"
                      v-model="selectedColor"
                      @change="applyFilter"
                    />
                    <label class="form-check-label text-success" for="g"
                      >G</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="colorOptions"
                      id="b"
                      value="Blau"
                      v-model="selectedColor"
                      @change="applyFilter"
                    />
                    <label class="form-check-label text-primary" for="b"
                      >B</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="d-inline">
                <h5 class="d-inline custom-inline-item">Sortieren</h5>
                <i class="bi bi-arrow-down-up custom-inline-item"></i>
              </div>

              <div class="row">
                <div class="col">
                  <select
                    class="form-select form-width"
                    aria-label="select"
                    v-model="selectedSort"
                    @change="applyFilter"
                  >
                    <option value="" selected>select menu</option>
                    <option value="1">Preis : low-high</option>
                    <option value="2">Preis : high-low</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="mt-3 ml-3 px-5">
                <button class="btn btn-primary" @click="clearFilter">
                  Clear filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "FilterComponent",
  data() {
    return {
      selectedCategory: "",
      selectedColor: "",
      selectedSort: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },

    filteredProducts() {
      let filtered = [...this.products];
      if (this.selectedCategory !== "") {
        filtered = filtered.filter((product) =>
          product.kategorie.includes(this.selectedCategory)
        );
        console.log(filtered, this.selectedCategory);
      }

      if (this.selectedColor !== "") {
        filtered = filtered.filter(
          (product) => product.farbe === this.selectedColor
        );
        console.log(filtered, this.selectedColor);
      }
      if (this.selectedSort !== "") {
        if (this.selectedSort === "1") {
          filtered = filtered.sort((a, b) => a.preis - b.preis);
        } else if (this.selectedSort === "2") {
          filtered = filtered.sort((a, b) => b.preis - a.preis);
        }
      }

      return filtered;
    },
  },
  methods: {
    ...mapMutations(["updateProducts", "resetProducts"]),
    applyFilter() {
      this.resetProducts();
      this.updateProducts(this.filteredProducts);
    },
    clearFilter() {
      this.$store.commit("resetProducts");
      this.selectedCategory = "";
      this.selectedColor = "";
      this.selectedSort = "";
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  padding: 15px;
}

.custom-inline-item {
  margin-right: 10px;
}

.form-check-inline {
  margin-right: 10px;
}

.form-width {
  max-width: 150px;
}
</style>
