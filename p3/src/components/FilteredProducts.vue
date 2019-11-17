<template>
  <div>
    <h2>Filtered Recipes</h2>
    <div id='filtered'>
      <router-link to='{name: "product", params: { "id" :product.id}}'>
        <ul class='cleanList'>
          <li v-for='product in FilteredRecipes' :key='product.id'>
            <p>{{ product.name }}</p>
            <br />
            <img :src='require("./../assets/images/products/" + product.id + ".jpg")' />
          </li>
        </ul>
      </router-link>
      
    </div>
  </div>
</template>
<script>
import { products } from './../products.js';
import * as app from './../app.js';

export default {
  name: 'FilteredProducts',
  props: ['category'],

  data: function() {
    return {
      products: products
    };
  },

  mounted() {
    app.axios.get(app.config.api + 'products').then(response => {
      this.products = response.data;
    });
  },

  computed: {
    FilteredRecipes: function() {
      function isMatch(product) {
        return product.categories.includes(this);
      }
      return this.products.filter(isMatch, this.category);
    }
  }
};
</script>
