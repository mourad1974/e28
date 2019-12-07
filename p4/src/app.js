export {
  default as Cart
}
from "./Cart";
export const axios = require("axios");
export const config = {
  // api: "https://my-json-server.typicode.com/mourad1974/e28-p3-api/"
  api: 'https://fall19-project4.firebaseio.com/'
};
export let store = {
  cartCount: 0
}