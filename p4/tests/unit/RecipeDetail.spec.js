import {
  expect
} from "chai";
import {
  mount,
  RouterLinkStub
} from "@vue/test-utils";
import ProductsPage from "@/components/pages/ProductsPage.vue";

describe("RecipeDetail.vue", () => {


  let product = {
    name: "Grilled Sweet Potatoes",
    slug: "Grilled Sweet Potatoes",
    ingredients: " 2 pounds sweet potatoes - 3-4 tablespoons extra virgin olive oil - Kosher salt - 1/4 cup finely chopped fresh cilantro (including tender stems) - 1 teaspoon of lime zest or lemon zest - 2 tablespoons of fresh lime or lemon juice - 1/4 cup extra virgin olive oil - Pinch of salt",
    categories: ["gluten"]
  }
  it("show details of a recipe ", () => {
    const wrapper = mount(ProductsPage, {

      computed: {
        products: function () {
          return [product]
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include('All Recipes');
    expect(wrapper.text()).to.include('Grilled Sweet Potatoes');
  })
})