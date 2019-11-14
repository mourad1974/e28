<template>
  <div id='products'>
    <h2>Products</h2>
    <show-product v-for='product in products' :key='product.id' :product='product'></show-product>
  </div>
</template>  
<script>
import ShowProduct from './../ShowProduct.vue';
import * as app from './../../app.js';
export default {
  name: 'Productpage',
  components: { ShowProduct },
  data: function() {
    return {
      products: null
    };
  },
  mounted() {
    app.axios.get(app.config.api + 'products').then(response => {
      this.products = response.data;
    });
  }
};
</script>
<style scoped>
</style>