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

              <div class="grid grid-cols-4 gap-6">
                <div class="col-span-2">
                  <label
                    for="brand"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Processor
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <select
                      name="processor"
                      id="processor"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow leading-tight appearance-none bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                    >
                      <option class="text-gray-500">Select...</option>
                      <option value="hp">Intel Celeron</option>
                      <option>Intel Pentium</option>
                      <option>Intel Core i3</option>
                      <option>Intel Core i5</option>
                      <option>Intel Core i7</option>
                      <option>AMD Ryzen</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-2">
                  <label
                    for="processor_speed"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Processor Speed
                  </label>
                  <div class="mt-1 shadow-sm">
                    <input
                      type="number"
                      name="processor_speed"
                      id="processor_speed"
                      class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="e.g. EliteBook 850 G1"
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6 mt-2">
                <div class="col-span-1">
                  <label
                    for="ram"
                    class="block text-sm font-medium text-gray-700"
                  >
                    RAM
                  </label>
                  <div class="mt-1 border-gray-500">
                    <input
                      type="number"
                      name="ram"
                      id="ram"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm shadow rounded-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="CND-XXXX"
                    />
                  </div>
                </div>

                <div class="col-span-2">
                  <label
                    for="storage_size"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Storage
                  </label>
                  <div class="mt-1 border-gray-500">
                    <input
                      type="number"
                      name="storage_size"
                      id="storage_size"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm shadow rounded-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="Good, faulty, scratches on screen..."
                    />
                  </div>
                </div>

                <div class="col-span-1">
                  <label
                    for="storage_type"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Storage Type
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <select
                      name="storage_type"
                      id="storage_type"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow leading-tight appearance-none bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                    >
                      <option class="text-gray-500">Select...</option>
                      <option value="hdd">HDD</option>
                      <option value="ssd">SSD</option>
                      <option value="emmc">eMMC</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6">
                <div class="col-span-2">
                  <label
                    for="screen_size"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Screen Size
                  </label>
                  <div class="mt-1 shadow-sm">
                    <input
                      type="number"
                      name="screen_size"
                      id="screen_size"
                      class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="e.g. EliteBook 850 G1"
                    />
                  </div>
                </div>
                <div class="col-span-2">
                  <label
                    for="graphics"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Graphics
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <select
                      name="graphics_type"
                      id="graphics"
                      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow leading-tight appearance-none bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                    >
                      <option class="text-gray-500">Select...</option>
                      <option value="hp">Intel HD/UHD</option>
                      <option value="amd">AMD/ATI Radeon</option>
                      <option value="nvidia">Nvidia GeForce/GTX/RTX</option>
                      <option value="apple">Apple Metal</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-4 gap-6">
                <div class="col-span-2">
                  <label
                    for="screen_size"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Main Camera
                  </label>
                  <div class="mt-1 shadow-sm">
                    <input
                      type="number"
                      name="screen_size"
                      id="screen_size"
                      class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="e.g. EliteBook 850 G1"
                    />
                  </div>
                </div>
                <div class="col-span-2">
                  <label
                    for="screen_size"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Selfie Camera
                  </label>
                  <div class="mt-1 shadow-sm">
                    <input
                      type="number"
                      name="screen_size"
                      id="screen_size"
                      class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                      placeholder="e.g. EliteBook 850 G1"
                    />
                  </div>
                </div>
              </div>

              <div class="col-span-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Shop</label
                >
                <div class="mt-1 mr-2 inline-block align-middle py-2">
                  <input type="radio" name="shop" id="shop_a" value="a" />
                  <label class="ml-2 text-sm text-gray-500" for="shop_a"
                    >Shop A</label
                  >
                </div>

                <div class="mt-1 ml-2 inline-block align-middle py-2">
                  <input
                    type="radio"
                    name="device_type"
                    id="shop_f"
                    value="f"
                  />
                  <label class="ml-2 text-sm text-gray-500" for="shop_f"
                    >Shop F</label
                  >
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
