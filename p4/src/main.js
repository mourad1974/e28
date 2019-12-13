import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import ProductsPage from "./components/pages/ProductsPage.vue";
import GlutenFreePage from "./components/pages/GlutenFreePage.vue";
import VeganPage from "./components/pages/VeganPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import Cart from "./components/pages/Cart.vue";
import ProductCreatePage from './components/pages/ProductCreatePage.vue';
import Vuelidate from 'vuelidate';

import './filters.js';

/* eslint-disable no-unused-vars */
const _ = require('lodash')
/* eslint-enable no-unused-vars */


import store from "./store";
Vue.use(Vuelidate);

Vue.use(VueRouter);
Vue.config.productionTip = false;
const routes = [{
    path: "/Vegan",
    component: VeganPage,
    name: "vegan"
  },
  {
    path: "/GlutenFree",
    component: GlutenFreePage,
    name: "Gluten Free"
  },
  {
    path: "/",
    component: ProductsPage,
    name: "recipes"
  },
  {
    path: '/product/create',
    component: ProductCreatePage,
    name: 'create'
  },

  {
    path: "/product/:slug",
    component: ProductPage,
    name: "product",
    props: true
  },

  {
    path: "/cart",
    component: Cart,
    name: "cart"
  }
];
const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");