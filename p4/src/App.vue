<template>
  <div id='app'>
    <img id='logo' alt='boston Recipes logo' src='./assets/images/logo-br.jpg' />
    <p class='signature'>The Best Recipes From Boston</p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{name: link}'>
            {{link }}
            <span v-if='link == "cart"'>({{cartCount}})</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['recipes', 'vegan', 'Gluten Free', 'cart', 'create']
    };
  },
  computed: {
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  },

  mounted() {
    this.cart = new app.Cart();
    this.$store.commit('setCartCount', this.cart.count());
    this.$store.dispatch('setProducts');
  }
};
</script>

<style lang='scss'>
@import './assets/css/br.css';
</style>

