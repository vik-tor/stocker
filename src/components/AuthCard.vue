<template>
  <div>
    <div class="inset-0 flex">
      <button
        type="button"
        @click="openModal"
        class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Open dialog
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="div">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto">
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
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </DialogTitle>
                <TabGroup>
                  <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                    <Tab as="template" v-slot="{ selected }">
                      <button
                        :class="[
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          selected
                            ? 'bg-white shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]"
                      >
                        Log in
                      </button>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                      <button
                        :class="[
                          'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          selected
                            ? 'bg-white shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                        ]"
                      >
                        Sign up
                      </button>
                    </Tab>
                  </TabList>

                  <TabPanels class="mt-2">
                    <TabPanel
                      :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      ]"
                    >
                      <div class="px-12 py-10">
                        <div class="w-full mb-2">
                          <div class="flex items-center">
                            <i
                              class="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"
                            ></i>
                            <input
                              type="text"
                              placeholder="username"
                              class="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
                            />
                          </div>
                        </div>
                        <div class="w-full mb-2">
                          <div class="flex items-center">
                            <i
                              class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"
                            ></i>
                            <input
                              type="text"
                              placeholder="password"
                              class="-mx-6 w-full border rounded px-3 py-1 text-gray-700"
                            />
                          </div>
                        </div>
                        <div class="mt-8 flex justify-between">
                          <div class="flex items-center">
                            <input type="checkbox" class="w-4 h-4 mr-2" />
                            <span class="text-xs text-gray-700"
                              >Remember Me</span
                            >
                          </div>
                          <div>
                            <button
                              type="text"
                              class="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
                            >
                              SIGN IN
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel
                      :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      ]"
                    >
                      <div class="px-12 py-10">
                        <div class="w-full mb-2">
                          <div class="flex items-center">
                            <i
                              class="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"
                            ></i>
                            <input
                              type="text"
                              placeholder="username"
                              class="-mx-6 px-8 w-full border rounded py-1 text-gray-700"
                            />
                          </div>
                        </div>
                        <div class="w-full mb-2">
                          <div class="flex items-center">
                            <i
                              class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"
                            ></i>
                            <input
                              type="text"
                              placeholder="password"
                              class="-mx-6 w-full border rounded px-3 py-1 text-gray-700"
                            />
                          </div>
                        </div>
                        <div class="mt-8 flex justify-between">
                          <div class="flex items-center">
                            <input type="checkbox" class="w-4 h-4 mr-2" />
                            <span class="text-xs text-gray-700"
                              >Remember Me</span
                            >
                          </div>
                          <div>
                            <button
                              type="text"
                              class="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
                            >
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCookie } from 'vue-cookie-next';

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
  name: 'Sidebar',
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
