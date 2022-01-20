<template>
  <the-navbar />
  <div class="h-screen flex flex-row flex-wrap">
    <the-sidebar />
    <router-view />
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
