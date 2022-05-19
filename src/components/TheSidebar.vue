<template>
  <aside
    class="sidebar h-full w-64 xl:w-72 2xl:w-80 rounded-r-xl mt-2 mb-5 lg:fixed lg:shadow-lg border-r-2 border-gray-200 ease-in bg-gray-300 flex-col z-10"
  >
    <div class="sidebar-header flex items-center justify-center py-4 lg:mt-6">
      <div class="inline-flex">
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex flex-col items-left text-left"
        >
          <img
            :src="require('@/assets/logo.png')"
            width="200"
            class="text-red-400 mb-2"
            alt=""
          />
          <!-- <span class="leading-10 text-gray-100 text-2xl font-bold"
            >Rikel
          </span>
          <span class="text-gray-100 text-xl">Technologies</span> -->
        </router-link>
      </div>
    </div>
    <div class="sidebar-content px-4 xl:px-6 2xl:px-8 py-6 my-auto">
      <ul class="flex flex-col w-full">
        <li class="my-px text-center">
          <router-link
            :to="{ name: 'home' }"
            class="flex flex-row items-center align-middle h-10 px-5 rounded-xl"
            :class="[
              $route.name === 'home'
                ? 'text-white bg-gray-900 font-bold hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <span class="text-lg">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span class="ml-4 text-sm tracking-wide">Home</span>
          </router-link>
        </li>
        <hr class="border border-b-0 border-t-1 border-gray-400 mt-6 mb-0" />
        <li class="my-px mt-0">
          <span class="flex font-bold text-sm text-red-700 px-4 my-4"
            >Stock</span
          >
        </li>
        <li class="my-px mb-1">
          <router-link
            :to="{ name: 'devices' }"
            class="flex flex-row items-center h-10 px-5 rounded-lg"
            :class="[
              $route.name === 'devices'
                ? 'text-white bg-gray-900 font-bold hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <span class="flex items-center justify-center text-lg">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </span>
            <span class="ml-3 text-sm tracking-wide">Devices</span>
          </router-link>
        </li>
        <li class="my-px mb-1">
          <router-link
            :to="{ name: 'accessories' }"
            class="flex flex-row items-center h-10 px-5 rounded-lg"
            :class="[
              $route.name === 'accessories'
                ? 'text-white bg-gray-900 font-semibold hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <span class="flex items-center justify-center text-lg">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span class="ml-3 text-sm tracking-wide"
              >Accessories</span
            >
          </router-link>
        </li>
        <li class="my-px">
          <popover class="relative" v-slot="{ open }">
            <popover-button
              class="flex flex-row items-center h-10 w-full px-5"
              :class="[
                (open && $route.name == 'new_accessory') ||
                (open && $route.name == 'new_device') ||
                (open && $route.name == 'import')
                  ? 'text-white bg-gray-900 font-semibold rounded-t-lg'
                  : (open && $route.name !== 'new_accessory') ||
                    (open && $route.name !== 'new_device') ||
                    (open && $route.name !== 'import')
                  ? 'text-gray-800 bg-white font-medium rounded-t-lg'
                  : (!open && $route.name == 'new_accessory') ||
                    (!open && $route.name == 'new_device') ||
                    (!open && $route.name == 'import')
                  ? 'text-white bg-gray-900 font-semibold hover:bg-gray-700 hover:text-white rounded-lg'
                  : 'text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900 rounded-lg',
              ]"
            >
              <span class="flex items-center justify-center text-lg">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span class="ml-3 text-sm tracking-wide uppercase">Add new</span>
            </popover-button>

            <popover-panel
              class="absolute z-10 text-gray-500 bg-gray-100 shadow-lg rounded-b-lg w-full py-2"
              v-slot="{ close }"
            >
              <li class="my-px">
                <router-link
                  :to="{ name: 'import' }"
                  class="flex flex-row items-center py-2 px-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  :class="{
                    'text-red-800 font-medium bg-gray-100':
                      $route.name == 'import',
                  }"
                  @click="close"
                >
                  <span class="flex items-center justify-center ml-2 text-lg">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="ml-3 text-sm">Import from file</span>
                </router-link>
              </li>
              <li class="my-px">
                <router-link
                  :to="{ name: 'new_device' }"
                  class="flex flex-row items-center py-2 px-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  :class="{
                    'text-red-800 font-medium bg-gray-100':
                      $route.name === 'new_device',
                  }"
                  @click="close"
                >
                  <span class="flex items-center justify-center ml-2 text-lg">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="ml-3 text-sm">Device</span>
                </router-link>
              </li>
              <li class="my-px">
                <router-link
                  :to="{ name: 'new_accessory' }"
                  class="flex flex-row items-center py-2 px-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-b-md"
                  :class="{
                    'text-red-800 font-medium bg-gray-100':
                      $route.name === 'new_accessory',
                  }"
                  @click="close"
                >
                  <span class="flex items-center justify-center ml-2 text-lg">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="ml-3 text-sm">Accessory</span>
                </router-link>
              </li>
            </popover-panel>
          </popover>
        </li>
        <hr class="border border-b-0 border-t-1 border-gray-400 mt-4 mb-0" />
        <li class="my-px mt-0">
          <span class="flex font-bold text-sm text-red-700 px-4 my-4"
            >Admin</span
          >
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'sales' }"
            class="flex flex-row items-center h-10 px-5 rounded-lg"
            :class="[
              $route.name === 'sales'
                ? 'text-white bg-gray-900 font-semibold hover:bg-gray-700 hover:text-white'
                : 'text-gray-700 font-medium hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <span class="flex items-center justify-center text-lg">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3 text-sm tracking-wide">Sales</span>
            <!-- <span
              class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
              >1k</span
            > -->
          </router-link>
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'users' }"
            class="flex flex-row items-center h-10 px-5 rounded-lg"
            :class="[
              $route.name === 'users'
                ? 'text-white bg-gray-900 font-semibold hover:bg-gray-800 hover:text-white'
                : 'text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <span class="flex items-center justify-center text-lg">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3 text-sm tracking-wide">Users</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-footer mt-auto px-4 xl:px-6 2xl:px-8 py-6 w-full">
      <hr class="border border-b-0 border-t-1 border-gray-400 mt-2 mb-4" />
      <ul class="flex flex-col w-full mb-4">
        <li class="my-px px-3 mb-1">
          <router-link
            :to="{ name: 'profile' }"
            class="flex flex-row items-center h-14 px-4 py-4 rounded-lg"
            :class="[
              $route.name == 'profile'
                ? 'text-white bg-gray-900 font-semibold hover:bg-gray-700 hover:text-white'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            ]"
          >
            <img
              :src="require('@/assets/images/graphics/user2.jpg')"
              alt
              class="h-10 w-10 bg-red-200 border rounded-full"
            />
            <span class="flex flex-col ml-3">
              <span
                class="truncate w-20 font-semibold text-sm"
                >{{ name }}</span
              >
              <span class="truncate w-20 text-xs leading-none mt-1">{{
                role
              }}</span>
            </span>
          </router-link>
        </li>
        <li class="my-px px-3">
          <button
            type="button"
            class="flex flex-row items-center h-10 w-full px-5 rounded-lg text-red-600 font-semibold hover:bg-red-100 hover:text-red-800"
            @click="logout()"
          >
            <span class="flex items-center justify-center text-lg ml-1">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="ml-5 text-sm tracking-wide">Log Out</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { ref } from 'vue';
import { useCookie } from 'vue-cookie-next';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
export default {
  name: 'Sidebar',
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    const cookie = useCookie;

    let isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
  data() {
    return {
      name: '',
      role: '',
    };
  },
  mounted() {
    this.setUser();
  },
  methods: {
    setUser() {
      return (
        (this.name = this.$cookie.getCookie('user').username),
        (this.role = this.$cookie.getCookie('user').role)
      );
    },
    logout() {
      this.$cookie.removeCookie('token');
      this.$cookie.removeCookie('refresh');
      this.$cookie.removeCookie('user');
      this.$router.push({ name: 'auth' });
    },
  },
};
</script>
