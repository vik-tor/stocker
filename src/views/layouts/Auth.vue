<template>
  <div class="min-h-screen flex flex-col lg:flex-row items-center bg-white">
    <div
      class="flex mt-12 lg:mt-0 mb-12 h-6/12 lg:h-auto lg:w-4/12 xl:w-5/12 lg:pr-8 xl:pr-16 justify-end"
    >
      <div class="flex flex-col items-center">
        <img
          :src="require('@/assets/logo.png')"
          width="280"
          class="text-red-400"
          alt="Rikel Technologies logo"
        />

        <div class="mt-12 text-center">
          <span class="text-sm">Powered by</span>
          <h1 class="text-2xl font-bold mb-4">
            <span class="text-red-700">R</span>ikel
            <span class="text-red-700">T</span>echnologies
          </h1>
        </div>
      </div>
    </div>
    <div
      class="w-11/12 xs:w-10/12 md:w-8/12 lg:w-8/12 h-6/12 lg:h-auto lg:mr-auto lg:border-l-2 border-t-2 lg:border-t-0 border-gray-300 pt-8 lg:pt-0"
    >
      <TabGroup
        as="div"
        class="w-12/12 lg:w-8/12 2xl:w-6/12 lg:mr-auto lg:ml-24 py-6"
      >
        <TabList class="flex justify-center p-1 bg-blue-900/20 rounded-xl">
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'w-1/3 py-2 text-sm leading-5 tracking-wider uppercase rounded-lg rounded-r-none shadow-xl',
                'focus:outline-none focus:ring-2',
                selected
                  ? 'bg-gray-900 text-white font-extrabold ring-2 ring-gray-900'
                  : 'bg-gray-300 text-black font-bold ring-2 ring-gray-300 hover:bg-gray-300 hover:text-gray-700',
              ]"
            >
              Log in
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'w-1/3 py-2 text-sm leading-5 tracking-wider uppercase rounded-lg rounded-l-none shadow-lg',
                'focus:outline-none focus:ring-2',
                selected
                  ? 'bg-gray-900 text-white font-bold ring-2 ring-gray-900'
                  : 'bg-gray-300 text-gray-900 font-bold ring-2 ring-gray-300 hover:bg-gray-300 hover:text-gray-700',
              ]"
            >
              Sign up
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-8 bg-gray-100 shadow-xl rounded-xl p-4">
          <TabPanel :class="['focus:outline-none focus:ring-0']">
            <div class="py-6 pl-3 pr-6 lg:w-4/5 mx-auto">
              <div class="w-full mb-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700 ml-1"
                >
                  Username <span class="text-red-700">*</span>
                </label>
                <div class="flex flex-col">
                  <input
                    type="text"
                    v-model="login.username"
                    id="username"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="w-full mb-2">
                <div class="flex flex-col">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Password <span class="text-red-700">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    v-model="login.password"
                    id="password"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="mt-10 flex justify-between items-center">
                <button
                  type="submit"
                  class="bg-red-700 text-sm font-bold text-white rounded-lg px-4 py-2 w-40 lg:w-48 mr-8"
                  @click="checkLogin"
                >
                  SIGN IN
                </button>
                <a href="#" class="text-sm text-red-600 hover:text-red-800">
                  Forgot username/password?</a
                >
              </div>
            </div>
          </TabPanel>
          <TabPanel :class="['focus:outline-none focus:ring-0']">
            <div class="py-6 pl-4 pr-6 lg:w-4/5 mx-auto">
              <div class="w-full flex gap-2 mb-4">
                <div class="flex flex-col col-span-6">
                  <label
                    for="f_name"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    First name <span class="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    v-model="user.first_name"
                    id="f_name"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
                <div class="flex flex-col col-span-6">
                  <label
                    for="l_name"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Last name <span class="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    v-model="user.last_name"
                    id="l_name"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="w-full mb-4">
                <div class="flex flex-col">
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Username <span class="text-red-700">*</span>
                    <span class="text-xs text-gray-500"> (3+ chars)</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    v-model="user.username"
                    id="username"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="w-full mb-4">
                <div class="flex flex-col">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Email <span class="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    v-model="user.email"
                    id="email"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="w-full flex flex-row gap-2 mb-2">
                <div class="flex flex-col">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Password <span class="text-red-700">*</span>
                    <span class="text-xs text-gray-500"> (6+ chars)</span>
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    v-model="user.password"
                    id="password"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="c_password"
                    class="block text-sm font-medium text-gray-700 ml-1"
                  >
                    Confirm password <span class="text-red-700">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder=""
                    v-model="user.c_password"
                    id="c_password"
                    class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700 shadow focus:shadow-lg focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="submit"
                  class="bg-red-700 text-sm font-bold text-white rounded-lg px-4 py-2 w-full"
                  @click="checkUser"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { signIn, signUp } from '@/api/users';

export default {
  name: 'Auth',
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      error: '',
      login: {
        username: '',
        email: '',
        password: '',
      },
      user: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        c_password: '',
      },
    };
  },
  methods: {
    async checkLogin() {
      await signIn(this.login, (err, res) => {
        if (err) {
          this.error = err;
          return;
        }
        this.$cookie
          .setCookie('token', res.token)
          .setCookie('refresh', res.refresh)
          .setCookie('user', res.user);
        this.$router.push({ name: 'home' });
      });
    },
    async checkUser() {
      await signUp(this.user, (err, res) => {
        if (err) {
          this.error = err;
          return;
        }
        this.$cookie
          .setCookie('token', res.token)
          .setCookie('refresh', res.refresh)
          .setCookie('user', res.user);
        this.$router.push({ name: 'home' });
      });
    },
  },
};
</script>
