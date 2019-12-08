export {
  default as Cart
}
from "./Cart";
export const axios = require("axios");
export const config = {
  api: "https://p4-e28.firebaseio.com/"
};
export let store = {
  cartCount: 0
};