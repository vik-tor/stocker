<template>
  <div class="container w-full max-w-5xl mx-auto px-2 py-2 sm:px-0">
    <div class="pl-2 mt-4 mb-6">
      <h1 class="font-bold text-xl">Add new device</h1>
      <small class="text-gray-500">Laptop/Phone</small>
    </div>
    <div class="mt-8 md:mt-0 md:col-span-2 bg-white rounded-lg shadow-lg">
      <form action="#" method="POST">
        <div class="sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 space-y-6 sm:p-6">
            <div class="grid grid-cols-4 gap-6">
              <div class="col-span-1">
                <label
                  for="brand"
                  class="block text-sm font-medium text-gray-700"
                >
                  Brand
                </label>
                <div class="mt-1 flex rounded-md">
                  <!-- <combobox
                    as="div"
                    v-model="selectedBrand"
                    id="brand"
                    class="block w-full sm:text-sm border border-gray-200 focus:border-gray-800 rounded shadow appearance-none bg-transparent hover:border-gray-500 px-4 py-2 pr-8"
                  >
                    <combobox-input
                      as="input"
                      @change="query = $event.target.value"
                    />
                    <combobox-options>
                      <combobox-option
                        as="li"
                        v-slot="{ active, selected }"
                        v-for="brand in filteredBrands"
                        :key="brand"
                        :value="brand"
                        class="capitalize"
                        :class="{
                          'bg-blue-500 text-white': active,
                          'bg-white text-black': !active,
                        }"
                      >
                        <CheckIcon v-show="selected" />
                        {{ brand }}
                      </combobox-option>
                    </combobox-options>
                  </combobox> -->
                  <combobox v-model="selectedBrand">
                    <div class="relative mt-1">
                      <div
                        class="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden"
                      >
                        <combobox-input
                          class="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                          @change="query = $event.target.value"
                        />
                        <combobox-button
                          class="absolute inset-y-0 right-0 flex items-center pr-2"
                        >
                          <SelectorIcon
                            class="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          Sel
                        </combobox-button>
                      </div>
                      <transition-root
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        @after-leave="query = ''"
                      >
                        <combobox-options
                          class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <div
                            v-if="filteredBrands.length === 0 && query !== ''"
                            class="cursor-default select-none relative py-2 px-4 text-gray-700"
                          >
                            Nothing found.
                          </div>

                          <combobox-option
                            v-for="brand in filteredBrands"
                            as="template"
                            :key="brand"
                            :value="brand"
                            v-slot="{ selected, active }"
                          >
                            <li
                              class="cursor-default select-none relative py-2 pl-10 pr-4"
                              :class="{
                                'text-white bg-teal-600': active,
                                'text-gray-900': !active,
                              }"
                            >
                              <span
                                class="block truncate"
                                :class="{
                                  'font-medium': selected,
                                  'font-normal': !selected,
                                }"
                              >
                                {{ brand }}
                              </span>
                              <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                :class="{
                                  'text-white': active,
                                  'text-teal-600': !active,
                                }"
                              >
                                <CheckIcon class="w-5 h-5" aria-hidden="true" />
                              </span>
                            </li>
                          </combobox-option>
                        </combobox-options>
                      </transition-root>
                    </div>
                  </combobox>
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
                    v-model="device.model"
                    class="focus:ring-indigo-500 rounded-md focus:border-indigo-500 block w-full sm:text-sm shadow border border-gray-200 px-4 py-2 pr-8 hover:border-gray-500"
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
                    v-model="device.serial_no"
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
                <div
                  class="mt-1 mr-2 inline-block align-middle py-2"
                  v-for="type in types"
                  :key="type.id"
                >
                  <input
                    type="radio"
                    :id="type.name"
                    :value="type.id"
                    v-model="device.device_type"
                  />
                  <label class="ml-2 text-sm text-gray-600" :for="type.name">{{
                    type.name
                  }}</label>
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
                    v-model="device.condition"
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
                <div class="mt-1 flex">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    Ksh
                  </span>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    v-model="device.price"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-r-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                </div>
              </div>
            </div>

            <hr />

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
                    v-model="device.processor"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow appearance-none capitalize bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                  >
                    <option class="text-gray-500">Select...</option>
                    <option
                      v-for="pr in processors"
                      :key="pr.id"
                      :value="pr.id"
                    >
                      {{ pr.brand }} {{ pr.model }}
                    </option>
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
                <div class="mt-1 flex rounded-md shadow">
                  <input
                    type="number"
                    name="processor_speed"
                    id="processor_speed"
                    v-model="device.processor_speed"
                    class="focus:ring-indigo-500 rounded-l-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500"
                    placeholder="e.g. 2.4"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                  >
                    GHz
                  </span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6 mt-2">
              <div class="col-span-1">
                <label
                  for="ram"
                  class="block text-sm font-medium text-gray-700"
                >
                  RAM
                </label>
                <div class="mt-1 flex border-gray-500">
                  <input
                    type="number"
                    name="ram"
                    id="ram"
                    v-model="device.ram"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-l-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    GB
                  </span>
                </div>
              </div>

              <div class="col-span-1">
                <label
                  for="storage_size"
                  class="block text-sm font-medium text-gray-700"
                >
                  Storage
                </label>
                <div class="mt-1 flex border-gray-500">
                  <input
                    type="number"
                    name="storage_size"
                    id="storage_size"
                    v-model="device.storage_size"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-l-md border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    GB
                  </span>
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
                    v-model="device.storage_type"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow appearance-none uppercase bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                  >
                    <option class="text-gray-500 capitalize">Select...</option>
                    <option
                      v-for="str in storage_types"
                      :key="str"
                      :value="str"
                    >
                      {{ str }}
                    </option>
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
                <div class="mt-1 flex">
                  <input
                    type="number"
                    name="screen_size"
                    id="screen_size"
                    v-model="device.screen_size"
                    class="focus:ring-indigo-500 rounded-l-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    inches
                  </span>
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
                    id="graphics"
                    v-model="device.graphics_type"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded shadow leading-tight appearance-none bg-white border hover:border-gray-500 px-4 py-2 pr-8"
                  >
                    <option class="text-gray-500">Select...</option>
                    <option
                      v-for="grp in graphics_types"
                      :key="grp"
                      :value="grp"
                    >
                      {{ grp }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-6">
              <div class="col-span-2">
                <label
                  for="main_camera"
                  class="block text-sm font-medium text-gray-700"
                >
                  Main Camera
                </label>
                <div class="mt-1 flex">
                  <input
                    type="number"
                    id="main_camera"
                    v-model="device.main_camera"
                    class="focus:ring-indigo-500 rounded-l-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    MP
                  </span>
                </div>
              </div>
              <div class="col-span-2">
                <label
                  for="selfie_camera"
                  class="block text-sm font-medium text-gray-700"
                >
                  Selfie Camera
                </label>
                <div class="mt-1 flex">
                  <input
                    type="number"
                    id="selfie_camera"
                    v-model="device.selfie_camera"
                    class="focus:ring-indigo-500 rounded-l-md focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 px-4 py-2 pr-8 hover:border-gray-500 shadow"
                  />
                  <span
                    class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm shadow"
                  >
                    MP
                  </span>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700"
                >Shop</label
              >
              <div class="mt-1 mr-2 inline-block align-middle py-2">
                <input
                  type="radio"
                  id="shop_a"
                  v-model="device.shop"
                  value="A"
                />
                <label class="ml-2 text-sm text-gray-600" for="shop_a"
                  >Shop A</label
                >
              </div>

              <div class="mt-1 ml-2 inline-block align-middle py-2">
                <input
                  type="radio"
                  id="shop_f"
                  v-model="device.shop"
                  value="F"
                />
                <label class="ml-2 text-sm text-gray-600" for="shop_f"
                  >Shop F</label
                >
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-100 text-left sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-2 w-20"
            >
              Save
            </button>
            <button
              type="button"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-red-600 bg-transparent hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-20"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { fetchProcessors } from '@/api/devices';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue';

export default {
  components: {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
  },

  setup() {
    const processors = ref([]);
    const brands = ['HP', 'Dell', 'Apple', 'Lenovo', 'Acer', 'Toshiba', 'Asus'];
    const selectedBrand = ref(brands[0]);
    const query = ref('');

    const filteredBrands = computed(() =>
      query.value === ''
        ? brands
        : brands.filter((item) => {
            return item.toLowerCase().includes(query.value.toLowerCase());
          })
    );
    const storage_types = ref(['hdd', 'ssd', 'emmc']);
    const graphics_types = ref([
      'Intel HD / UHD',
      'AMD Radeon / Ryzen',
      'Nvidia GeForce / RTX / GTX',
      'Apple GPU',
    ]);
    const getProcessors = async () => {
      processors.value = await fetchProcessors();
    };
    let types = ref([
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Phone',
      },
    ]);

    onMounted(getProcessors);

    return {
      processors,
      storage_types,
      graphics_types,
      types,
      selectedBrand,
      filteredBrands,
      query,
    };
  },
  data() {
    return {
      device: {
        brand: '',
        model: '',
        serial_no: '',
        device_type: null,
        price: null,
        processor: null,
        processor_speed: null,
        ram: null,
        storage_size: null,
        storage_type: '',
        graphics_type: '',
        screen_size: null,
        main_camera: null,
        selfie_camera: null,
        fault_free: true,
        condition: '',
        shop: '',
      },
    };
  },
};
</script>
