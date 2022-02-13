<template>
  <div class="container w-full max-w-5xl mx-auto px-2 py-8 sm:px-0">
    <div
      :class="[
        'bg-white rounded-xl p-3',
        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
      ]"
    >
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-4 gap-6">
                <div class="col-span-1">
                  <label
                    for="brand"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Brand
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <select
                      name="brand"
                      id="brand"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow leading-tight appearance-none bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                    >
                      <option class="text-gray-500">Select...</option>
                      <option value="hp">HP</option>
                      <option>Dell</option>
                      <option>Lenovo</option>
                      <option>Toshiba</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-2">
                  <label
                    for="model"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Model
                  </label>
                  <div class="mt-1 shadow-sm">
                    <input
                      type="text"
                      name="model"
                      id="model"
                      class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="e.g. EliteBook 850 G1"
                    />
                  </div>
                </div>
                <div class="col-span-1">
                  <label
                    for="serial"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Serial No.
                  </label>
                  <div class="mt-1 border-gray-500">
                    <input
                      type="text"
                      name="serial_no"
                      id="serial"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm shadow rounded-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="CND-XXXX"
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6 mt-2">
                <div class="col-span-1">
                  <label class="block text-sm font-medium text-gray-700"
                    >Device type</label
                  >
                  <div class="mt-1 mr-2 inline-block align-middle py-2">
                    <input
                      type="radio"
                      name="device_type"
                      id="laptop"
                      value="1"
                    />
                    <label class="ml-2 text-sm text-gray-500" for="laptop"
                      >Laptop</label
                    >
                  </div>

                  <div class="mt-1 ml-2 inline-block align-middle py-2">
                    <input
                      type="radio"
                      name="device_type"
                      id="phone"
                      value="2"
                    />
                    <label class="ml-2 text-sm text-gray-500" for="phone"
                      >Phone</label
                    >
                  </div>
                </div>

                <div class="col-span-2">
                  <label
                    for="condition"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Condition
                  </label>
                  <div class="mt-1 border-gray-500">
                    <input
                      type="text"
                      name="condition"
                      id="condition"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm shadow rounded-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="Good, faulty, scratches on screen..."
                    />
                  </div>
                </div>

                <div class="col-span-1">
                  <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <div class="mt-1 border-gray-500">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm shadow rounded-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="17000"
                    />
                  </div>
                </div>
              </div>

              <div class="grid">
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <div class="mt-1 flex items-center">
                  <span
                    class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <button
                    type="button"
                    class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div
                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let categories = ref({
      Recent: [
        {
          id: 1,
          title: 'Does drinking coffee make you smarter?',
          date: '5h ago',
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
      ],
      Popular: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    });

    return { categories };
  },
};
</script>
