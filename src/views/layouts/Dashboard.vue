<template>
  <div class="flex flex-row">
    <the-sidebar class="hidden lg:flex" />
    <div
      class="main flex flex-col flex-grow lg:ml-64 xl:ml-72 2xl:ml-80 px-4 transition-all duration-150 ease-in"
    >
      <router-view />
      <footer class="footer px-4 py-6 sat">
        <div class="footer-content">
          <p class="text-sm text-gray-600 text-center">
            &copy; <span class="italic">Chiras</span>, 2022. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar.vue';

export default {
  components: {
    TheSidebar,
  },
};
</script>

<style>
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
</style>
