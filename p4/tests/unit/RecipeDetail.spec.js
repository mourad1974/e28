import {
  expect
} from "chai";
import {
  shallowMount,
  RouterLinkStub
} from "@vue/test-utils";
import RecipeDetail from "@/components/RecipeDetail.vue";

describe("RecipeDetail.vue", () => {
  it("show details of a recipe ", () => {

    let product = {
      name: "Grilled Sweet Potatoes",
      slug: "Grilled Sweet Potatoes",
      ingredients: " 2 pounds sweet potatoes - 3-4 tablespoons extra virgin olive oil - Kosher salt - 1/4 cup finely chopped fresh cilantro (including tender stems) - 1 teaspoon of lime zest or lemon zest - 2 tablespoons of fresh lime or lemon juice - 1/4 cup extra virgin olive oil - Pinch of salt",
      categories: ["gluten"]
    };
    const wrapper = shallowMount(RecipeDetail, {
      propsData: {
        product
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(product.slug);
    let CheckTherouter = wrapper.find('[data-test="the-link"]').exists();
    expect(CheckTherouter).to.equal(true);
  })
})