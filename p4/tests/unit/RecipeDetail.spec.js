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
      id: 1,
      name: 'Driscoll’s Strawberries',
      description: 'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
      categories: ['produce', 'gluten']
    };
    const wrapper = shallowMount(RecipeDetail, {
      propsData: {
        product
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(product.name);
    let CheckTherouter = wrapper.find('[data-test="the-link"]').exists();
    expect(CheckTherouter).to.equal(true);
  })
})