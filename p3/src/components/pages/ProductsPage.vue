<template>
  <div>
    <h2>All Recipes</h2>
    <div id='products'>
      <recipe-detail v-for='product in products' :key='product.id' :product='product'></recipe-detail>
    </div>
  </div>
</template>  
<script>
import RecipeDetail from './../RecipeDetail.vue';
import * as app from './../../app.js';
export default {
  name: 'Productspage',
  components: { RecipeDetail },
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