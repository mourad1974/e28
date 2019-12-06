import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import ProductsPage from "./components/pages/ProductsPage.vue";
import GlutenFreePage from "./components/pages/GlutenFreePage.vue";
import VeganPage from "./components/pages/VeganPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import Cart from "./components/pages/Cart.vue";

import store from "./store";

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
    path: "/product/:id",
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