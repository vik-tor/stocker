<template>
  <aside
    class="sidebar w-64 lg:fixed h-full lg:shadow-lg ease-in bg-black flex-col z-10"
  >
    <div class="sidebar-header flex items-center justify-center py-4 lg:mt-6">
      <div class="inline-flex">
        <router-link
          :to="{ name: 'Home' }"
          class="inline-flex flex-col items-left text-left"
        >
          <img
            :src="require('@/assets/logo.png')"
            width="160"
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
    <div class="sidebar-content px-4 py-6 my-auto">
      <ul class="flex flex-col w-full">
        <li class="my-px text-center">
          <router-link
            :to="{ name: 'Home' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg"
            :class="[
              $route.name === 'Home'
                ? 'text-white bg-red-800 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
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
                class="h-6 w-6"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <hr class="border border-b-0 border-t-1 border-gray-500 mt-6 mb-0" />
        <li class="my-px mt-0">
          <span class="flex font-bold text-sm text-gray-300 px-4 my-4 uppercase"
            >Stock</span
          >
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'devices' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg"
            :class="[
              $route.name === 'devices'
                ? 'text-white bg-red-600 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
            ]"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </span>
            <span class="ml-3">Devices</span>
          </router-link>
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'accessories' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg"
            :class="[
              $route.name === 'accessories'
                ? 'text-white bg-red-600 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
            ]"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span class="ml-3">Accessories</span>
          </router-link>
        </li>
        <hr class="border border-b-0 border-t-1 border-gray-500 mt-2 mb-4" />
        <li class="my-px">
          <popover class="relative" v-slot="{ open }">
            <popover-button
              class="flex flex-row items-center h-10 w-full px-3"
              :class="[
                (open && $route.name == 'new_accessory') ||
                (open && $route.name == 'new_device') ||
                (open && $route.name == 'import')
                  ? 'text-white bg-red-800 font-semibold rounded-t-md'
                  : (open && $route.name !== 'new_accessory') ||
                    (open && $route.name !== 'new_device') ||
                    (open && $route.name !== 'import')
                  ? 'text-gray-800 bg-gray-100 font-medium rounded-t-md'
                  : (!open && $route.name == 'new_accessory') ||
                    (!open && $route.name == 'new_device') ||
                    (!open && $route.name == 'import')
                  ? 'text-white bg-red-600 font-semibold hover:bg-red-700 hover:text-white rounded-md'
                  : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700 rounded-md',
              ]"
            >
              <span
                class="flex items-center justify-center text-lg text-green-400"
              >
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span class="ml-3">Add new</span>
            </popover-button>

            <popover-panel
              class="absolute z-10 text-gray-500 bg-gray-200 shadow-lg rounded-b-md w-full"
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
                  <!-- <span
                    class="flex items-center justify-center ml-7 text-lg text-gray-400"
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span> -->
                  <span class="ml-9">Import from file</span>
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
                  <!-- <span
                    class="flex items-center justify-center ml-7 text-lg text-gray-400"
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span> -->
                  <span class="ml-9">Device</span>
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
                  <!-- <span
                    class="flex items-center justify-center ml-7 text-lg text-gray-400"
                  >
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span> -->
                  <span class="ml-9">Accessory</span>
                </router-link>
              </li>
            </popover-panel>
          </popover>
        </li>
        <hr class="border border-b-0 border-t-1 border-gray-500 mt-4 mb-0" />
        <li class="my-px mt-0">
          <span class="flex font-bold text-sm text-gray-300 px-4 my-4 uppercase"
            >Admin</span
          >
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'sales' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg"
            :class="[
              $route.name === 'sales'
                ? 'text-white bg-red-800 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
            ]"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Sales</span>
            <span
              class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
              >1k</span
            >
          </router-link>
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'users' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg"
            :class="[
              $route.name === 'users'
                ? 'text-white bg-red-600 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
            ]"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Users</span>
          </router-link>
        </li>

        <!-- <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="ml-3">Profile</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span class="ml-3">Settings</span>
          </a>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="flex items-center justify-center text-lg text-red-400">
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
            <span class="ml-3">Logout</span>
          </a>
        </li> -->
      </ul>
    </div>
    <div class="sidebar-footer px-4 py-6 mt-auto">
      <div class="flex flex-col w-full">
        <div class="my-px"></div>
        <div class="my-px flex px-3">
          <router-link
            :to="{ name: 'profile' }"
            class="flex flex-row items-center h-10 rounded-lg"
            :class="[
              $route.name == 'profile'
                ? 'text-white bg-red-600 font-semibold hover:bg-red-600 hover:text-white'
                : 'text-gray-100 hover:bg-gray-100 hover:text-gray-700',
            ]"
          >
            <img
              :src="require('@/assets/images/graphics/user2.jpg')"
              alt
              class="h-10 w-10 bg-red-200 border rounded-full"
            />
            <span class="flex flex-col ml-2">
              <span
                class="truncate w-20 text-gray-100 font-semibold tracking-wide leading-none"
                >John Doe</span
              >
              <span
                class="truncate w-20 text-gray-500 text-xs leading-none mt-1"
                >Manager</span
              >
            </span>
          </router-link>
        </div>
        <!-- <div class="my-px flex flex-row text-gray-200">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p>Yes</p>
        </div> -->
      </div>
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
};
</script>
