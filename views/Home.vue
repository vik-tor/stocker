<template>
  <div class="bg-gray-200 py-6 md:py-20">
    <div class="container px-4 mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="text-1xl md:text-2xl font-bold mb-5">
          Find items in
          <span class="bg-blue-500 text-white rounded-md py-1 px-3 ml-2 text-xl"
            >Location</span
          >
        </h1>
        <search />
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="flex flex-row flex-wrap py-4">
      <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
        <categories />
      </aside>
      <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <div class="bg-white dark:bg-gray-800 mb-10 shadow-lg rounded-md">
          <div
            class="
              lg:flex lg:items-center lg:justify-between
              w-full
              mx-auto
              py-12
              px-4
              sm:px-6
              lg:py-10 lg:px-20
              z-20
            "
          >
            <h3
              class="
                text-xl
                font-medium
                text-gray-800
                dark:text-white
                sm:text-2xl
              "
            >
              <span class="block font-bold">Showcase your products</span>
              <span class="block text-indigo-500 text-lg">
                It&#x27;s now or never
              </span>
            </h3>
            <div class="lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <button
                  type="button"
                  class="
                    py-3
                    px-5
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:ring-indigo-500 focus:ring-offset-indigo-200
                    text-white
                    w-full
                    transition
                    ease-in
                    duration-200
                    text-center text-base
                    font-semibold
                    shadow-md
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    rounded-lg
                  "
                >
                  <router-link :to="{ name: 'new_ad' }"> Post Ad </router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <h3
          class="
            text-xl text-left text-gray-800
            dark:text-white
            sm:text-xl
            my-8
            px-2
          "
        >
          <span class="block font-bold">Popular</span>
        </h3>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <v-card
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            :slug="product.slug"
            :image="product.image"
            :category="product.category.slug"
            :price="product.price"
            :location="product.location"
            :tags="product.tags"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { fetchProducts } from '@/api/products';
import VCard from '../components/VCard.vue';
import Search from '@/components/SearchBar.vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Categories,
    VCard,
  },
  setup() {
    const products = ref([]);
    const getProducts = async () => {
      products.value = await fetchProducts();
    };

    onMounted(getProducts);

    return {
      products,
      getProducts,
    };
  },
};
</script>