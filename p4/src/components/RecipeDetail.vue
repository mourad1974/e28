<template>
  <div class='product'>
    <router-link :to='{ name: "product", params: { "slug": product.slug } }'>
      <div class='product-name'>{{ product.name }}</div>
      <img :src='require("../assets/images/products/" + product.slug+ ".jpg")' />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  props: ['product']
};
</script>
