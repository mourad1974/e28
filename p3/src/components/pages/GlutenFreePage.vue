<template>
  <div>
    <filtered-products :category='FilteredRecipes'></filtered-products>
  </div>
</template>
<script>
import FilteredProducts from './../FilteredProducts.vue';
export default {
  name: 'HomePage',
  components: { FilteredProducts },
  data: function() {
    return {
      FilteredRecipes: 'gluten'
    };
  }
};
</script>

<style  scoped>
</style>