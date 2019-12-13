<template>
  <div class="product">
    <router-link
      data-test="product-link"
      :to="{ name: 'product', params: { slug: product.slug } }"
    >
      <div data-test="product-name" class="product-name">
        {{ product.name }}
      </div>
      <img :src="product.slug | productImage" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",
  props: ["product"]
};
</script>
