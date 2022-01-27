<template class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <the-sidebar />
    <main
      class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  components: {
    TheNavbar,
    TheSidebar,
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
</style>
