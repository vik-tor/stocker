<template>
  <the-navbar />
  <div class="main-content flex flex-col px-4">
    <!-- <stats-card /> -->
    <br />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <greeting />
      <!-- status -->
      <div class="card col-span-1">
        <div class="card-body mb-auto">
          <div class="flex flex-col items-left justify-between">
            <div class="flex-1">
              <p
                class="mb-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {{ month }} Sales
              </p>
              <img
                class="object-cover text-center w-auto h-28"
                :src="require('@/assets/graphics/growing.svg')"
              />
            </div>
            <div class="flex-1 justify-between">
              <div class="mt-10">
                <p
                  class="capitalize text-lg text-gray-700 font-semibold mt-2 mb-0"
                >
                  Kshs
                </p>
                <span class="mt-2 font-extrabold text-2xl text-teal-400">
                  40,000
                </span>
                <span class="mt-2 font-semibold text-lg text-gray-700"
                  >/ 150,000</span
                >
                <p class="mt-2 mb-2 text-sm text-gray-500">
                  You are <span class="num-3 font-medium">57.6%</span> towards
                  this month's target
                </p>
                <a href="#" class="btn-shadow py-3 text-xs text-blue-600">
                  Edit target
                </a>
              </div>

              <!--               <div class="mt-auto">
                <span
                  class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >Last month</span
                >
                <div class="mt-1 mb-1">
                  <span class="text-md text-gray-700 font-medium"> Kshs</span>
                  <span class="text-xl text-gray-700 font-bold mr-2">
                    150,000</span
                  >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    50% ^</span
                  >
                  <p class="mt-2 mb-2 text-sm text-gray-500">
                    Congratulations on your growth
                  </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- status -->
    </div>

    <br />

    <h3 class="font-semibold text-xl text-gray-700">Browse</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4">
      <!-- card -->
      <div class="card mt-6">
        <router-link
          :to="{ name: 'devices', query: { item: 'laptops' } }"
          class="card-body flex items-center hover:shadow-lg"
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
                    Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Transaction code
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <!-- <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th> -->
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm">07/12/2021</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-md font-medium text-gray-900">
                      HP EliteBook 840 G1
                    </div>
                    <div class="text-sm text-gray-500">Laptop</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Cash
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    N/A
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Ksh. 40,000
                  </td>
                  <!-- <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td> -->
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <auth-card :isOpen="!loggedIn" />
</template>

<script>
import { ref, onMounted } from 'vue';
import { isLoggedIn } from '@/utils/auth';

import AuthCard from '@/components/AuthCard';
import TheNavbar from '../components/TheNavbar.vue';
import StatsCard from '../components/StatsCard.vue';
import Greeting from '../components/Greeting.vue';

export default {
  name: 'Home',
  components: {
    AuthCard,
    TheNavbar,
    StatsCard,
    Greeting,
  },
  setup() {
    const month = ref('');
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const setMonth = () => {
      month.value = monthNames[new Date().getMonth()];
    };

    onMounted(setMonth);

    return {
      month,
    };
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (!isLoggedIn()) {
        this.loggedIn = false;
        console.log('not logged in');
      } else {
        this.loggedIn = true;
        console.log('logged in');
      }
    },
  },
};
</script>
