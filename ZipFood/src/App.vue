<template>
  <div id="app">
    <img id="logo" alt="ZipFood logo" src="./assets/images/zipfoods-logo.png" />
    <nav>
      <ul>
        <li>
          <router-link exact :to="{ name: 'home' }">home</router-link>
        </li>
        <li>
          <router-link exact :to="{ name: 'categories' }">categories</router-link>
        </li>
        <li>
          <router-link exact :to="{ name: 'products', }">products</router-link>
        </li>
        <!-- <router-link exact :to="paths[link]">{{ link }}</router-link> -->
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { products } from "./products.js";
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      products: products,
      // src/App.vue data properties
      links: ["home", "products", "categories"],
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories"
      }
    };
  }
};
</script>

<style lang='scss'>
@import "./assets/css/zipfoods.scss";
</style>

