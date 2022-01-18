<template>
  <the-navbar />
  <router-view />
  <the-footer />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/Footer.vue";

export default {
  components: {
    TheNavbar,
    TheFooter,
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
