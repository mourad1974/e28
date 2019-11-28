<template>
  <div id='cart-page'>
    <h1>Your Recipes Cart</h1>
    <div v-if='items.length == 0'>Empty Cart</div>

    <ul data-test='cart-contents' v-else-if='products.length > 0'>
      <li v-for='item in items' :key='item.id' class='shpping-cart'>
        {{ item.quantity }} Recipe(s) of
        <span>{{ getProductDetails(item.id)["name"] }}</span>
        <br />
        <button data-test='remove recipe' @click='removeFromCart(item.id)'>Delete This recipe</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';
export default {
  name: 'Cart',
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  methods: {
    getProductDetails(productId) {
      return this.products.find(({ id }) => id === productId);
    },
    removeFromCart: function(productId) {
      this.cart.remove(productId);
      this.$store.commit('setCartCount', this.cart.count());
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
