<template>
  <div id='app'>
    <img id='logo' alt='boston Recipes logo' src='./assets/images/logo-br.jpg' />
    <p class='signature'>The Best Recipes From Boston</p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{name: link}'>
            {{link }}
            <span v-if='link == "cart"'>({{sharedState.cartCount}})</span>
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
      products: null,

      links: ['recipes', 'vegan', 'Gluten Free', 'cart'],
      cartCount: null,
      sharedState: app.store
    };
  },
  mounted() {
    this.cart = new app.Cart();
    app.store.cartCount = this.cart.count();
  }
};
</script>

<style lang='scss'>
@import './assets/css/br.css';
</style>

