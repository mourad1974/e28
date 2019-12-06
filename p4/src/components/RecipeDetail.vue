<template>
  <div class="product">
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="product-name">{{ product.name }}</div>
      <img :src="require('../assets/images/products/' + product.id + '.jpg')" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",
  props: ["product"]
};
</script>
