<template>
  <div class="card col-span-1">
    <div class="card-body h-full flex flex-col justify-between">
      <div>
        <h1 class="text-lg font-bold text-red-800 tracking-wide mb-2">
          {{ greeting }}, Moe!
        </h1>
        <blockquote
          class="relative p-4 text-lg italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote"
        >
          <p className="mb-1">"{{ quote.content }}</p>
          <cite>
            <span className="mb-1 text-sm italic font-bold">{{
              quote.author
            }}</span>
          </cite>
        </blockquote>
      </div>

      <div class="mt-5">
        <h3 class="font-bold text-md">Quick links</h3>
      </div>

      <div class="flex flex-wrap justify-left gap-2 mt-4">
        <button
          class="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
          <img
            src="https://img.icons8.com/ios/50/000000/facebook-new.png"
            alt="Facebook"
          />
        </button>

        <button
          class="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
          <img
            src="https://img.icons8.com/ios/50/000000/instagram.png"
            alt="Twitter"
          />
        </button>

        <button
          class="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
        >
          <img
            src="https://img.icons8.com/ios/50/000000/tiktok.png"
            alt="Twitter"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { randomQuote } from '@/api/quotes';

export default {
  name: 'Home',
  setup() {
    const quote = ref({});
    const greeting = ref('');
    const getQuote = async () => {
      quote.value = await randomQuote();
    };
    const getGreet = () => {
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
    onMounted(getGreet);

    return {
      quote,
      getQuote,
      greeting,
    };
  },
};
</script>
