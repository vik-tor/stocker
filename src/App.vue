<template>
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <the-sidebar class="hidden lg:flex" />
    <main
      class="main flex flex-col flex-grow lg:ml-64 transition-all duration-150 ease-in"
    >
      <router-view />
      <footer class="footer px-4 py-6 sat">
        <div class="footer-content">
          <p class="text-sm text-gray-600 text-center">
            &copy; <span class="italic">Chiras</span>, 2022. All rights reserved
          </p>
        </div>
      </footer>
    </main>
    <Dialog :open="isOpen" @close="setIsOpen">
      <dialog-overlay />

      <dialog-title>Deactivate account</dialog-title>
      <dialog-description>
        This will permanently deactivate your account
      </dialog-description>

      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>

      <button @click="setIsOpen(false)">Deactivate</button>
      <button @click="setIsOpen(false)">Cancel</button>
    </Dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useCookie } from 'vue-cookie-next';
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue';

import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  components: {
    TheNavbar,
    TheSidebar,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  },
  setup() {
    const cookie = useCookie;

    let isOpen = ref(true);

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value;
      },
    };
  },
};
</script>

<style>
#app {
  background-color: #efefef;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.saturate-0 {
  filter: saturate(0);
}
.saturate-50 {
  filter: saturate(0.5);
}
.saturate-100 {
  filter: saturate(1);
}
.saturate-150 {
  filter: saturate(1.5);
}
.saturate-200 {
  filter: saturate(2);
}
.grayscale-0 {
  filter: grayscale(0);
}
.grayscale-50 {
  filter: grayscale(0.5);
}
.grayscale-100 {
  filter: grayscale(1);
}
.grayscale-150 {
  filter: grayscale(1.5);
}
.grayscale-200 {
  filter: grayscale(2);
}
</style>
