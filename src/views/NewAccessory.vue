<template>
  <div class="container w-full max-w-5xl mx-auto px-2 py-2 sm:px-0">
    <div class="pl-2 mt-4 mb-6">
      <h1 class="font-bold text-xl">Add new accessory</h1>
      <small class="text-gray-500">Battery, headphone, ...</small>
    </div>
    <div class="mt-8 md:mt-0 md:col-span-2 bg-white rounded-lg shadow-lg">
      <form action="#" method="POST">
        <div class="sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 space-y-6 sm:p-6">
            <div class="">
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  id="title"
                  v-model="accessory.title"
                  class="shadow rounded-md block w-full sm:text-sm bg-gray-50 px-4 py-2 border hover:bg-gray-100 focus:bg-gray-100"
                  placeholder="e.g. HP bluepin charger"
                />
              </div>
            </div>

            <div class="grid grid-cols-4 gap-4">
              <div class="col-span-2">
                <label
                  for="price"
                  class="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <div class="mt-1 flex">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    Ksh
                  </span>
                  <input
                    type="number"
                    id="price"
                    v-model="accessory.price"
                    class="shadow rounded-r-md block w-full sm:text-sm border border-l-0 bg-gray-50 px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
                  />
                </div>
              </div>
              <div class="col-span-2">
                <label
                  for="quantity"
                  class="block text-sm font-medium text-gray-700"
                >
                  Quantity
                </label>
                <div class="mt-1 flex rounded-md shadow">
                  <input
                    type="number"
                    id="quantity"
                    v-model="accessory.quantity"
                    class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-6">
              <div class="col-span-2">
                <label
                  for="type"
                  class="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <select
                    id="type"
                    v-model="accessory.product_type"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow appearance-none capitalize bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                  >
                    <option class="text-gray-500">Select...</option>
                    <option
                      v-for="type in types"
                      :key="type.id"
                      :value="type.id"
                    >
                      {{ type.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-span-2">
                <label
                  for="capacity"
                  class="block text-sm font-medium text-gray-700"
                >
                  Capacity
                </label>
                <div class="mt-1 flex rounded-md shadow">
                  <input
                    type="number"
                    id="capacity"
                    v-model="accessory.capacity"
                    class="focus:ring-indigo-500 rounded-l-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                  >
                    W
                  </span>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700"
                >Shop</label
              >
              <div class="mt-1 mr-2 inline-block align-middle py-2">
                <input
                  type="radio"
                  id="shop_a"
                  v-model="accessory.shop"
                  value="A"
                />
                <label class="ml-2 text-sm text-gray-600" for="shop_a"
                  >Shop A</label
                >
              </div>

              <div class="mt-1 ml-2 inline-block align-middle py-2">
                <input
                  type="radio"
                  id="shop_f"
                  v-model="accessory.shop"
                  value="F"
                />
                <label class="ml-2 text-sm text-gray-600" for="shop_f"
                  >Shop F</label
                >
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-2 w-20"
            >
              Save
            </button>
            <button
              type="button"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red-600 bg-transparent hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-20"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let types = ref([
      {
        id: 1,
        name: 'Charger',
      },
      {
        id: 2,
        name: 'Headphone',
      },
      {
        id: 3,
        name: 'Battery',
      },
      {
        id: 4,
        name: 'Bag',
      },
      {
        id: 5,
        name: 'Smartwatch',
      },
      {
        id: 6,
        name: 'Phone',
      },
      {
        id: 7,
        name: 'Mouse',
      },
      {
        id: 8,
        name: 'Keyboard',
      },
    ]);

    return { types };
  },
  data() {
    return {
      accessory: {
        title: '',
        price: null,
        quantity: null,
        product_type: null,
        product_category: '',
        capacity: null,
        shop: '',
      },
    };
  },
};
</script>
