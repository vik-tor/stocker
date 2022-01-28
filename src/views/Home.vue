<template>
  <the-navbar />
  <div class="main-content flex flex-col flex-grow p-4">
    <!-- <stats-card /> -->
    <br />
    <div class="grid grid-cols-2 gap-6">
      <greeting />
      <!-- status -->
      <div class="card col-span-1">
        <div class="card-body">
          <h5 class="uppercase text-xs tracking-wider font-extrabold">
            Your target
          </h5>
          <h1 class="capitalize text-lg mt-1 mb-1">
            $<span class="num-3">684</span>
            <span class="text-xs tracking-widest font-extrabold">
              / <span class="num-2">29</span> orders</span
            >
          </h1>
          <p class="capitalize text-xs text-gray-500">
            ( $<span class="num-2">21</span> in the last year )
          </p>
        </div>
      </div>
      <!-- status -->
    </div>

    <br />

    <h3 class="font-semibold text-xl text-gray-700">Browse</h3>

    <div class="grid grid-cols-5 gap-6 xl:grid-cols-4">
      <!-- card -->
      <div class="card mt-6">
        <router-link
          :to="{ name: 'devices', query: { item: 'laptops' } }"
          class="card-body flex items-center"
        >
          <div class="px-3 py-2 rounded bg-indigo-600 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
              />
            </svg>
          </div>

          <div class="flex flex-col">
            <h1 class="font-semibold">Laptops</h1>
            <p class="text-xs"><span class="num-2">77</span> left</p>
          </div>
        </router-link>
      </div>
      <!-- end card -->

      <!-- card -->
      <div class="card mt-6">
        <router-link
          :to="{ name: 'devices', query: { item: 'phones' } }"
          class="card-body flex items-center"
        >
          <div class="px-3 py-2 rounded bg-green-600 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>

          <div class="flex flex-col">
            <h1 class="font-semibold">Phones</h1>
            <p class="text-xs"><span class="num-2">95</span> available</p>
          </div>
        </router-link>
      </div>
      <!-- end card -->

      <!-- card -->
      <div class="card mt-6">
        <router-link
          :to="{ name: 'accessories' }"
          class="card-body flex items-center"
        >
          <div class="px-3 py-2 rounded bg-yellow-600 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-device-ssd"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.75 4a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-6.5ZM5 8V5h6v3H5Zm0-5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              />
              <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm11 12V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 0 1-1Zm-7.25 1v-2H5v2h.75Zm1.75 0v-2h-.75v2h.75Zm1.75 0v-2H8.5v2h.75ZM11 13h-.75v2H11v-2Z"
              />
            </svg>
          </div>

          <div class="flex flex-col">
            <h1 class="font-semibold">Accessories</h1>
            <p class="text-xs"><span class="num-2">12</span> in stock</p>
          </div>
        </router-link>
      </div>
      <!-- end card -->

      <!-- card -->
      <div class="card mt-6">
        <router-link
          :to="{ name: 'repairs' }"
          class="card-body flex items-center"
        >
          <div class="px-3 py-2 rounded bg-red-600 text-white mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-device-ssd"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.75 4a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75h-6.5ZM5 8V5h6v3H5Zm0-5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
              />
              <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm11 12V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 0 1-1Zm-7.25 1v-2H5v2h.75Zm1.75 0v-2h-.75v2h.75Zm1.75 0v-2H8.5v2h.75ZM11 13h-.75v2H11v-2Z"
              />
            </svg>
          </div>

          <div class="flex flex-col">
            <h1 class="font-semibold">Repairs</h1>
            <p class="text-xs">View prices</p>
          </div>
        </router-link>
      </div>
      <!-- end card -->
    </div>

    <br />

    <h3 class="font-semibold text-xl text-gray-700 mt-4">Your sales</h3>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="mt-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          Jane Cooper
                        </div>
                        <div class="text-sm text-gray-500">
                          jane.cooper@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                      Regional Paradigm Technician
                    </div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Active
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import StatsCard from '../components/StatsCard.vue';
import Greeting from '../components/Greeting.vue';

export default {
  components: {
    TheNavbar,
    StatsCard,
    Greeting,
  },
};
/* import { ref, onMounted } from 'vue';

import { fetchProducts } from '@/api/devices';
import Search from '@/components/Search.vue';

export default {
  name: 'Home',
  components: {
    Search,
  },
  setup() {
    const devices = ref([]);
    const getDevices = async () => {
      devices.value = await fetchProducts();
    };

    onMounted(getProducts);

    return {
      devices,
      getDevices,
    };
  },
}; */
</script>
