<template>
  <div id='product-create'>
    <h1>Create a Recipe</h1>
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <!-- name -->
        <label for='name'>Recipe Name</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.product.slug.$error }'
          id='slug'
          data-test='product-slug-input'
          v-model='$v.product.slug.$model'
        />

        <div v-if='$v.product.slug.$error'>
          <div class='form-feedback-error' v-if='!$v.product.slug.required'>Product URL is required.</div>
          <div
            class='form-feedback-error'
            v-else-if='!$v.product.slug.minLength'
          >Recipe Name must be at leat 8 letters</div>

          <div
            class='form-feedback-error'
            v-else-if='!$v.product.slug.doesNotExist'
          >This recipe alrady exist</div>
        </div>

        <small class='form-help'>A name with at leat 8 characters</small>
      </div>

      <!-- ingrediants -->
      <div class='form-group'>
        <label for='ingredients'>Ingrediants</label>
        <textarea
          :class='{ "form-input-error": $v.product.ingredients.$error }'
          data-test='product-ingredients-textarea'
          id='ingredients'
          v-model='product.ingredients'
        ></textarea>
        <div v-if='$v.product.ingredients.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.product.ingredients.required'
          >Product URL is required.</div>
        </div>
      </div>

      <!-- categorie -->
      <div class='form-group'>
        <label for='categories'>Categories</label>

        <input
          type='text'
          id='categories'
          data-test='product-categories-input'
          v-model='product.categories'
        />
        <small id='categoriesHelp' class='form-help'>Comma separated</small>
      </div>

      <button data-test='add-product-button' type='submit'>Add This Recipe</button>

      <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
import { required, minLength } from 'vuelidate/lib/validators';

let product = {};

export default {
  name: 'ProductCreatePage',
  data: function() {
    return {
      product: product,
      formHasErrors: false
    };
  },
  validations: {
    product: {
      slug: {
        required,
        minLength: minLength(8),
        doesNotExist(value) {
          return !this.$store.getters.getProductBySlug(value);
        }
      },
      ingredients: {
        required
      },
      categories: {
        required
      }
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      if (!this.formHasErrors) {
        // Axios request to the server to persist the new product
        app.axios
          .post(app.config.api + 'products.json', this.product)
          .then(response => {
            let key = response.data.name;

            this.$store.commit('addProduct', {
              [key]: this.product
            });

            this.$router.push({
              name: 'product',
              params: { slug: this.product.slug }
            });
          });
      }
    }
  }
};
</script>

<style scoped>
#ingredients {
  height: 150px;
}
</style>