<template>
  <div>
    <filtered-products :category='FilteredRecipes'></filtered-products>
  </div>
</template>
<script>
import FilteredProducts from './../FilteredProducts.vue';
export default {
  name: 'VeganPage',
  components: { FilteredProducts },
  data: function() {
    return {
      FilteredRecipes: 'vegan'
    };
  }
};
</script>

<style  scoped>
</style>