<template>
  <div id="product-page" v-if="product">
    <h1>{{ product.name }}</h1>
    <img
      v-if="product.id"
      class="product-thumb"
      :alt="'Product image of ' + product.name"
      :src="require('./../../assets/images/products/' + product.id + '.jpg')"
    />
    <p class="description">{{ product.description }}</p>
    <div class="price">${{ product.price }}</div>
    <button @click="addToCart(product.id)">Add to Cart</button>
    <transition name="fade">
      <div class="alert" v-if="addAlert">you added item</div>
    </transition>
    <router-link :to="'/products'">&larr; Return to all products</router-link>
  </div>
</template>


<script>
import * as app from "./../../app.js";

export default {
  name: "Productpage",
  props: ["id"],
  data: function() {
    return {
      product: null,
      addAlert: false
    };
  },
  mounted() {
    app.axios
      .get(app.config.api + "/products/" + this.id)

      .then(response => {
        this.product = response.data;
      });
  },
  methods: {
    addToCart: function(productId) {
      let cart = new app.Cart();
      cart.add(productId);
      app.store.cartCount = cart.count();
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);
    }
  }
};
</script>

<style scoped>
</style>