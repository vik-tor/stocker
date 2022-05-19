<template>
  <div class="app min-h-screen text-gray-700">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300;400;500;600;700&display=swap');

#app {
  background-color: #fff;
  font-family: 'Radio Canada', sans-serif;
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
