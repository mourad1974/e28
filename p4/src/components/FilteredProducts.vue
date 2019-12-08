<template>
  <div>
    <h2>Filtered Recipes</h2>

    <div id='filtered'>
      <router-link to='{name: "product", params: { "slug" :product.slug}}'>
        <ul class='cleanList'>
          <router-link
            data-test='product-name'
            v-for='product in FilteredRecipes'
            :key='product.slug'
            :to='{
              name: "product",
              params: { slug: product.slug }
            }'
          >
            <li>
              <p>{{ product.name }}</p>

              <br />

              <img
                :src='
                  require("./../assets/images/products/" +
                    product.slug +
                    ".jpg")
                '
              />
            </li>
          </router-link>
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
  // not must json
  // not must splice
  mounted() {
    app.axios.get(app.config.api + 'products.json').then(response => {
      this.products = response.data;
    });
  },

  computed: {
    FilteredRecipes: function() {
      return _.filter(this.products, product => {
        return product.categories.includes(this.category);
      });
      // function isMatch(product) {
      //   return product.categories.includes(this);
      // }
      // return this.products.filter(isMatch, this.category);
    }
  }
};
</script>
