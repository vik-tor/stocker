<template>
  <aside
    class="sidebar w-64 lg:fixed h-full md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-black flex flex-col"
  >
    <div class="sidebar-header flex items-center justify-center py-4 lg:mt-6">
      <div class="inline-flex">
        <router-link
          :to="{ name: 'Home' }"
          class="inline-flex flex-col items-center gap-2 text-center"
        >
          <img
            :src="require('@/assets/logo.png')"
            width="140"
            class="text-red-400 mb-2"
            alt=""
          />
          <span class="leading-10 text-gray-100 text-2xl font-bold"
            >Rikel
          </span>
          <span class="text-gray-100 text-xl">Technologies</span>
        </router-link>
      </div>
    </div>
    <div class="sidebar-content px-4 py-6 my-auto">
      <ul class="flex flex-col w-full">
        <li class="my-px">
          <router-link
            :to="{ name: 'Home' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300"
            :class="{ 'text-gray-700 bg-gray-100': $route.name === 'Home' }"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </span>
            <span class="ml-3">Dashboard</span>
          </router-link>
        </li>
        <li class="my-px">
          <span
            class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
          ></span>
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'devices' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'text-gray-700 bg-gray-100': $route.name === 'devices' }"
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
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{
              'text-gray-700 bg-gray-100': $route.name === 'accessories',
            }"
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
        <li class="my-px">
          <router-link
            :to="{ name: 'repairs' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{
              'text-gray-700 bg-gray-100': $route.name === 'repairs',
            }"
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
            <span class="ml-3">Repairs</span>
          </router-link>
        </li>
        <li class="my-px">
          <a
            href="#"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
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
          </a>
        </li>
        <li class="my-px">
          <span
            class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
          ></span>
        </li>
        <li class="my-px">
          <router-link
            :to="{ name: 'sales' }"
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'text-gray-700 bg-gray-100': $route.name === 'sales' }"
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
            class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'text-gray-700 bg-gray-100': $route.name === 'users' }"
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
        <div class="my-px flex px-3">
          <a href class="flex flex-row items-center">
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
          </a>
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
