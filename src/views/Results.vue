<template>
  <div class="container mx-auto">
    <div class="container px-4 mx-auto">
      <div class="text-center max-w-2xl my-5 mx-auto">
        <search />
      </div>
    </div>
    <div class="flex flex-row flex-wrap py-4">
      <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
        <categories />
      </aside>
      <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { fetchDevices } from '@/api/devices';
import Search from '@/components/Search.vue';

export default {
  name: 'Results',
  components: {
    Categories,
    Search,
  },
  props: {},
  setup() {
    const products = ref([]);
    const getProducts = async () => {
      products.value = await fetchDevices();
    };

    onMounted(getProducts);

    return {
      products,
      getProducts,
    };
  },
};
</script>
