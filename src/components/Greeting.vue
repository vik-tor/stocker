<template>
  <div class="card col-span-1">
    <div class="card-body h-full flex flex-col justify-between">
      <div>
        <h1 class="text-xl font-extrabold text-red-800 mb-4">
          {{ greeting }}, Moe!
        </h1>
      </div>

      <blockquote
        class="relative px-3 mt-4 text-md border-l-2 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
      >
        <p className="mb-1">"{{ quote.content }}</p>
        <cite>
          <span className="mb-1 text-sm italic font-bold">{{
            quote.author
          }}</span>
        </cite>
      </blockquote>

      <div class="flex flex-col justify-left gap-2 mt-4">
        <h3
          class="pt-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
        >
          Quick links
        </h3>
        <div class="flex flex-wrap justify-left gap-2">
          <div
            class="p-2 w-11 flex items-center space-x-2 rounded saturate-50 hover:saturate-100"
          >
            <a href="https://jiji.co.ke" target="_blank"
              ><img :src="require('@/assets/social/jiji.png')" alt="Jiji.ke"
            /></a>
          </div>

          <div
            class="p-2 w-10 flex items-center space-x-2 rounded saturate-50 hover:saturate-100"
          >
            <a href="https://facebook.com" target="_blank">
              <img
                :src="require('@/assets/social/facebook.png')"
                alt="Facebook"
            /></a>
          </div>

          <div
            class="p-2 w-11 flex items-center space-x-2 rounded saturate-100 hover:saturate-100"
          >
            <a href="https://pigiame.co.ke" target="_blank">
              <img
                :src="require('@/assets/social/pigiame.png')"
                alt="pigiame.co.ke"
            /></a>
          </div>

          <div
            class="p-2 w-10 flex items-center space-x-2 rounded saturate-50 hover:saturate-100"
          >
            <a href="https://instagram.com" target="_blank">
              <img
                :src="require('@/assets/social/instagram.png')"
                alt="Instagram"
            /></a>
          </div>

          <div
            class="p-2 w-9 flex items-center space-x-2 rounded saturate-50 hover:saturate-100"
          >
            <a href="https://tiktok.com" target="_blank">
              <img :src="require('@/assets/social/tiktok.png')" alt="Tiktok"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { randomQuote } from '@/api/quotes';

export default {
  name: 'Greeting',
  setup() {
    const quote = ref({});
    const greeting = ref('');
    const getQuote = async () => {
      quote.value = await randomQuote();
    };
    const greet = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        greeting.value = 'Good morning';
      } else if (hour >= 12 && hour < 17) {
        greeting.value = 'Good afternoon';
      } else if (hour >= 17 && hour < 21) {
        greeting.value = 'Good evening';
      } else {
        greeting.value = 'Good night';
      }
    };

    onMounted(getQuote);
    onMounted(greet);

    return {
      quote,
      greeting,
    };
  },
};
</script>
