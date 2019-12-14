<template>
  <div id='create-recipe'>
    <h1>Create a recipe</h1>
    <div>All fileds are required</div>
    <!-- your name =======================+++++++++++===============================================-->

    <form @submit.prevent='handleSubmit'>
      <div class='sections'>
        <label for='name'>Your name</label>
        <input
          type='text'
          :class='{ "Warning-error": $v.product.name.$error }'
          data-test='recipe-name-input'
          id='name'
          v-model='$v.product.name.$model'
        />
        <div v-if='$v.product.name.$error'>
          <div
            class='warning-feedback'
            v-if='!$v.product.name.required'
          >First or last name is required</div>
        </div>
        <small class='tips'>First/Last name</small>
      </div>

      <!-- recipe name =======================+++++++++++===============================================-->
      <div class='sections'>
        <label for='name'>Recipe Name</label>
        <input
          type='text'
          :class='{ "Warning-error": $v.product.slug.$error }'
          id='slug'
          data-test='recipe-slug'
          v-model='$v.product.slug.$model'
        />

        <div v-if='$v.product.slug.$error'>
          <div
            class='warning-feedback'
            v-if='!$v.product.slug.minLength'
          >Recipte Title must be at least 8 charachters</div>

          <div
            class='warning-feedback'
            v-else-if='!$v.product.slug.doesNotExist'
          >This recipe already exists in our website</div>
        </div>

        <small class='tips'>Must be at lesat 8 Characters</small>
      </div>

      <!--description =======================+++++++++++===============================================-->

      <div class='sections'>
        <label for='description'>Description</label>
        <textarea
          data-test='recipe-description-textarea'
          id='description'
          v-model='product.description'
        ></textarea>
      </div>
      <!-- categories =======================+++++++++++===============================================-->
      <div class='sections'>
        <label for='categories'>Categories</label>

        <input
          type='text'
          id='categories'
          data-test='product-categories-input'
          v-model='product.categories'
        />
        <small id='categoriesHelp' class='tips'>Please separate categories with commas</small>
      </div>

      <button data-test='Add-recipe' type='submit'>Add This Recipe</button>

      <div class='warning-feedback' v-if='formHasErrors'>Please Be Sure you fiilled all fileds above</div>
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
      name: {
        required
      },
      description: {
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
#description {
  height: 150px;
}
</style>