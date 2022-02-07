<template>
  <the-navbar />
  <div class="flex flex-col my-5">
    <div class="ml-4 mb-6">
      <div class="text-left">
        <span
          class="inline-block rounded-full text-white bg-purple-500 px-2 py-1 text-xs font-bold mr-3"
          >Laptops</span
        >
        <span
          class="inline-block rounded-full text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3"
          >Phones</span
        >
        <span
          class="inline-block rounded-full text-white bg-blue-500 px-2 py-1 text-xs font-bold mr-3"
          >Brand v</span
        >
        <span
          class="inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3"
          >Shop</span
        >
        <span
          class="inline-block rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold mr-3"
          >Danger</span
        >
      </div>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Model
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Processor
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  RAM
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Storage
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Shop
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="device in devices" :key="device.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-0">
                      <div class="text-sm font-medium text-gray-900">
                        {{ device.model }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ device.brand }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ device.processor }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ device.processor_speed }}GHz
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ device.ram }}GB
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    {{ device.storage_size }}GB
                  </div>
                  <div class="text-sm text-gray-500 uppercase">
                    {{ device.storage_type }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ device.price }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ device.shop }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchDevices } from '@/api/devices';

import TheNavbar from '../components/TheNavbar.vue';

export default {
  name: 'Devices',
  components: {
    TheNavbar,
  },
  setup() {
    const devices = ref([]);
    const getDevices = async () => {
      const response = await fetchDevices();
      devices.value = response.data;
    };

    onMounted(() => {
      getDevices();
    });

    return {
      devices,
    };
  },
};
</script>
