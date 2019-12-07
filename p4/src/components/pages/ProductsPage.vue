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

export default {
  name: 'Productspage',
  components: { RecipeDetail },
  data: function() {
    return {};
  },
  mounted() {},
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  }
};
</script>
<style scoped></style>
