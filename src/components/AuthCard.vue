<template>
  <TransitionRoot appear :show="isOpen" as="div">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto bg-black/30">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg text-center font-medium leading-6 text-gray-900 mb-6"
              >
                Welcome <br />
                Rikel Technologies Inc.
              </DialogTitle>
              <TabGroup>
                <TabList
                  class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl bg-gray-200"
                >
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        'w-full py-2.5 leading-5 rounded-lg',
                        'focus:outline-none focus:ring-0',
                        selected
                          ? 'bg-white shadow text-red-800 font-bold'
                          : 'text-blue-700 font-medium hover:bg-white/[0.12] hover:text-gray-900',
                      ]"
                    >
                      Log in
                    </button>
                  </Tab>
                  <Tab as="template" v-slot="{ selected }">
                    <button
                      :class="[
                        'w-full py-2.5 leading-5 font-medium rounded-lg',
                        'focus:outline-none focus:ring-0',
                        selected
                          ? 'bg-white shadow text-red-800 font-bold'
                          : 'text-blue-700 hover:bg-white/[0.12] hover:text-gray-900',
                      ]"
                    >
                      Sign up
                    </button>
                  </Tab>
                </TabList>

                <TabPanels class="mt-2">
                  <TabPanel
                    :class="[
                      'bg-gray-100 rounded-xl p-3',
                      'focus:outline-none focus:ring-0',
                    ]"
                  >
                    <div class="px-3 py-4">
                      <div class="w-full mb-4">
                        <div class="flex flex-col">
                          <input
                            type="text"
                            placeholder="Username"
                            v-model="login.username"
                            id="username"
                            class="w-full rounded-md mt-1 px-3 py-2 bg-white text-gray-700"
                          />
                        </div>
                      </div>
                      <div class="w-full mb-2">
                        <div class="flex flex-col">
                          <input
                            type="password"
                            placeholder="Password *"
                            v-model="login.password"
                            id="password"
                            class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700"
                          />
                        </div>
                      </div>
                      <div class="mt-6">
                        <button
                          type="text"
                          class="bg-yellow-400 text-sm text-gray-700 rounded px-4 py-2 w-full"
                        >
                          SIGN IN
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel
                    :class="[
                      'bg-gray-100 rounded-xl p-3',
                      'focus:outline-none focus:ring-0',
                    ]"
                  >
                    <div class="px-3 py-4">
                      <div class="w-full mb-4">
                        <div class="flex flex-col">
                          <label
                            for="username"
                            class="block text-sm font-medium text-gray-700 ml-1"
                          >
                            Username <span class="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            v-model="login.username"
                            id="username"
                            class="w-full rounded-md mt-1 px-3 py-2 bg-white text-gray-700"
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
                            <span class="text-xs text-gray-500">
                              (6+ chars)</span
                            >
                          </label>
                          <input
                            type="password"
                            placeholder=""
                            v-model="login.password"
                            id="password"
                            class="w-full rounded mt-1 px-3 py-2 bg-white text-gray-700"
                          />
                        </div>
                      </div>
                      <div class="mt-6">
                        <button
                          type="text"
                          class="bg-yellow-400 text-sm text-gray-700 rounded px-4 py-2 w-full"
                        >
                          SIGN IN
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { signIn, signUp } from '@/api/users';

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue';
export default {
  name: 'AuthCard',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
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
        email: '',
        password: '',
      },
    };
  },
  methods: {
    closeModal() {
      this.$props.isOpen = false;
    },
    openModal() {
      this.$props.isOpen = true;
    },
    async checkLogin() {
      signIn(this.login, (err, res) => {
        if (err) {
          this.error = err;
          return;
        }
        this.$cookie
          .setCookie('token', res.token)
          .setCookie('refresh', res.refresh)
          .setCookie('user', res.user);
        this.$router.push({ name: this.dest });
      });
    },
    async checkUser() {
      signUp(this.user, (err, res) => {
        if (err) {
          this.error = err;
          return;
        }
        this.$cookie
          .setCookie('token', res.token)
          .setCookie('refresh', res.refresh)
          .setCookie('user', res.user);
        this.$router.push({ name: this.dest });
      });
    },
  },
};
</script>
