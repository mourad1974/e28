(function(t){function e(e){for(var r,o,c=e[0],u=e[1],s=e[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1229:function(t,e,n){t.exports=n.p+"img/4.62862849.jpg"},"30af":function(t,e,n){t.exports=n.p+"img/1.cfde7ea3.jpg"},"34ff":function(t,e,n){t.exports=n.p+"img/2.003024bc.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{id:"logo",alt:"ZipFood logo",src:n("f2ce")}}),r("p",{staticClass:"signature"},[t._v("The Best Recipes From Boston")]),r("nav",[r("ul",t._l(t.links,(function(e){return r("li",{key:e},[r("router-link",{attrs:{exact:"",to:{name:e}}},[t._v(" "+t._s(e)+" "),"cart"==e?r("span",[t._v("("+t._s(t.sharedState.cartCount)+")")]):t._e()])],1)})),0)]),r("router-view")],1)},a=[],o=(n("7db0"),n("c975"),n("a434"),n("b64b"),n("9f12")),c=n("53fe"),u=function(){function t(){Object(o["a"])(this,t);var e=localStorage.getItem("cart");this.items=e?JSON.parse(e):[]}return Object(c["a"])(t,[{key:"getItems",value:function(){return this.items}},{key:"count",value:function(){for(var t=0,e=0,n=Object.keys(this.items);e<n.length;e++){var r=n[e];t+=this.items[r].quantity}return t}},{key:"update",value:function(){localStorage.setItem("cart",JSON.stringify(this.items))}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getItem(t);n?n.quantity+=e:this.items.push({id:t,quantity:e}),this.update()}},{key:"remove",value:function(t){var e=this.getItem(t),n=this.items.indexOf(e);e&&(this.items.splice(n,1),this.update())}},{key:"getItem",value:function(t){return this.items.find((function(e){var n=e.id;return n===t}))||null}}]),t}(),s=n("bc3a"),p={api:"https://my-json-server.typicode.com/mourad1974/e28-p3-api/"},d={cartCount:0},l={name:"app",components:{},data:function(){return{products:null,links:["recipes","vegan","Gluten Free","cart"],cartCount:null,sharedState:d}},mounted:function(){this.cart=new u,d.cartCount=this.cart.count()}},f=l,m=(n("5c0b"),n("2877")),g=Object(m["a"])(f,i,a,!1,null,null,null),v=g.exports,h=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("All Recipes")]),n("div",{attrs:{id:"products"}},t._l(t.products,(function(t){return n("recipe-detail",{key:t.id,attrs:{product:t}})})),1)])},b=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("router-link",{attrs:{to:{name:"product",params:{id:t.product.id}}}},[r("div",{staticClass:"product-name"},[t._v(t._s(t.product.name))]),r("img",{attrs:{src:n("634a")("./"+t.product.id+".jpg")}})])],1)},y=[],O={name:"RecipeDetail",props:["product"]},x=O,k=Object(m["a"])(x,j,y,!1,null,null,null),C=k.exports,w={name:"Productpage",components:{RecipeDetail:C},data:function(){return{products:null}},mounted:function(){var t=this;s.get(p.api+"products").then((function(e){t.products=e.data}))}},F=w,P=Object(m["a"])(F,_,b,!1,null,"da83eba2",null),R=P.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("filtered-products",{attrs:{category:t.FilteredRecipes}})],1)},S=[],T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Filtered Recipes")]),r("div",{attrs:{id:"filtered"}},[r("router-link",{attrs:{to:'{name: "product", params: { "id" :product.id}}'}},[r("ul",{staticClass:"cleanList"},t._l(t.FilteredRecipes,(function(e){return r("li",{key:e.id},[r("p",[t._v(t._s(e.name))]),r("br"),r("img",{attrs:{src:n("634a")("./"+e.id+".jpg")}})])})),0)])],1)])},$=[],I=(n("4de4"),n("caad"),n("2532"),[]),D={name:"FilteredProducts",props:["category"],data:function(){return{products:I}},mounted:function(){var t=this;s.get(p.api+"products").then((function(e){t.products=e.data}))},computed:{FilteredRecipes:function(){function t(t){return t.categories.includes(this)}return this.products.filter(t,this.category)}}},A=D,M=Object(m["a"])(A,T,$,!1,null,null,null),q=M.exports,J={name:"HomePage",components:{FilteredProducts:q},data:function(){return{FilteredRecipes:"gluten"}}},N=J,G=Object(m["a"])(N,E,S,!1,null,"00e4549a",null),B=G.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("filtered-products",{attrs:{category:t.FilteredRecipes}})],1)},L=[],U={name:"HomePage",components:{FilteredProducts:q},data:function(){return{FilteredRecipes:"vegan"}}},V=U,Y=Object(m["a"])(V,H,L,!1,null,"120b64c4",null),Z=Y.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{attrs:{id:"product-page"}},[r("h1",[t._v(t._s(t.product.name))]),t.product.id?r("img",{attrs:{alt:"Product image of "+t.product.name,src:n("634a")("./"+t.product.id+".jpg")}}):t._e(),r("p",{staticClass:"ingredients"},[t._v(t._s(t.product.ingredients))]),r("button",{on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v("Add to Cart")]),t.addAlert?r("div",{staticClass:"alert"},[t._v("Item was added to your cart")]):t._e()]):t._e()},K=[],Q={name:"RecipePage",props:["id"],data:function(){return{product:null,addAlert:!1}},mounted:function(){var t=this;s.get(p.api+"/products/"+this.id).then((function(e){t.product=e.data}))},methods:{addToCart:function(t){var e=this,n=new u;n.add(t),d.cartCount=n.count(),this.addAlert=!0,setTimeout((function(){return e.addAlert=!1}),2e3)}}},W=Q,X=Object(m["a"])(W,z,K,!1,null,"496cd82f",null),tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"cart-page"}},[n("h1",[t._v("Your Recipes Cart")]),0==t.items.length?n("div",[t._v("Empty Cart")]):t.products.length>0?n("ul",t._l(t.items,(function(e){return n("li",{key:e.id,staticClass:"shpping-cart"},[t._v(" "+t._s(e.quantity)+' Recipe(s) of " '),n("span",[t._v(t._s(t.getProductDetails(e.id)["name"]))]),t._v('" '),n("br"),n("button",{on:{click:function(n){return t.removeFromCart(e.id)}}},[t._v("Delete This recipe")])])})),0):t._e()])},nt=[],rt={name:"Cart",data:function(){return{items:[],cart:null,products:[]}},methods:{getProductDetails:function(t){return this.products.find((function(e){var n=e.id;return n===t}))},removeFromCart:function(t){this.cart.remove(t),d.cartCount=this.cart.count()}},mounted:function(){var t=this;this.cart=new u,this.items=this.cart.getItems(),this.products=s.get(p.api+"products").then((function(e){return t.products=e.data}))}},it=rt,at=Object(m["a"])(it,et,nt,!1,null,null,null),ot=at.exports;r["a"].use(h["a"]),r["a"].config.productionTip=!1;var ct=[{path:"/Vegan",component:Z,name:"vegan"},{path:"/GlutenFree",component:B,name:"Gluten Free"},{path:"/",component:R,name:"recipes"},{path:"/product/:id",component:tt,name:"product",props:!0},{path:"/cart",component:ot,name:"cart"}],ut=new h["a"]({routes:ct,mode:"history"});new r["a"]({router:ut,render:function(t){return t(v)}}).$mount("#app")},"5a9a":function(t,e,n){t.exports=n.p+"img/9.6787ca16.jpg"},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"634a":function(t,e,n){var r={"./1.jpg":"30af","./10.jpg":"e29a","./2.jpg":"34ff","./3.jpg":"a774","./4.jpg":"1229","./5.jpg":"e6f8","./6.jpg":"dd98","./7.jpg":"e61b","./8.jpg":"6740","./9.jpg":"5a9a"};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id="634a"},6740:function(t,e,n){t.exports=n.p+"img/8.6a438a79.jpg"},"9c0c":function(t,e,n){},a774:function(t,e,n){t.exports=n.p+"img/3.f2c0063b.jpg"},dd98:function(t,e,n){t.exports=n.p+"img/6.05202a7b.jpg"},e29a:function(t,e,n){t.exports=n.p+"img/10.70a4c230.jpg"},e61b:function(t,e,n){t.exports=n.p+"img/7.aa52d350.jpg"},e6f8:function(t,e,n){t.exports=n.p+"img/5.6bafac5d.jpg"},f2ce:function(t,e,n){t.exports=n.p+"img/logo-br.206f5565.jpg"}});
//# sourceMappingURL=app.9a539cc9.js.map