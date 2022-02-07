<template class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <the-sidebar />
    <main
      class="main flex flex-col flex-grow lg:ml-64 transition-all duration-150 ease-in lg:px-8"
    >
      <router-view />
      <footer class="footer px-4 py-6 sat">
        <div class="footer-content">
          <p class="text-sm text-gray-600 text-center">
            © Brandname 2020. All rights reserved.
            <a href="https://twitter.com/iaminos">by iAmine</a>
          </p>
        </div>
      </footer>
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
