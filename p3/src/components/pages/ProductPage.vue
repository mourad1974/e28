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

    <router-link :to="'/products'">&larr; Return to all products</router-link>
  </div>
</template>


<script>
const axios = require("axios");

export default {
  name: "Productpage",
  props: ["id"],
  data: function() {
    return {
      product: null
    };
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/mourad1974/e28-p3-api/products/" +
          this.id
      )
      .then(response => {
        this.product = response.data;
      });
  }
};
</script>

<style scoped>
</style>