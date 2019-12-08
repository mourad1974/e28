<template>
  <div id="cart-page">
    <h1>Your Recipes Cart</h1>
    <div v-if="items.length == 0">Empty Cart</div>

    <ul v-else-if="products">
      <li v-for="item in items" :key="item.slug" class="shopping-cart">
        {{ item.quantity }} Recipe(s) of "
        <span>{{ getProductDetails(item.slug)["name"] }}</span
        >"
        <br />
        <button @click="removeFromCart(item.slug)">Delete This recipe</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from "./../../app.js";
export default {
  name: "Cart",
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  methods: {
    getProductDetails(productSlug) {
      return this.$store.getters.getProductBySlug(productSlug);
    },
    removeFromCart: function(productSlug) {
      this.cart.remove(productSlug);
      this.$store.commit("setCartCount", this.cart.count());
    }
  },

  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },

  mounted() {
    this.cart = new app.Cart();
    this.items = this.cart.getItems();
  }
};
</script>
