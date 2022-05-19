<template>
  <div class="card col-span-1 border-none">
    <div
      class="card-body h-full flex flex-col justify-between bg-gray-50 shadow"
    >
      <div>
        <h1 class="text-xl font-extrabold text-red-800 mb-4">
          {{ greeting }}, <slot name="name"></slot>
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
        greeting.value = 'Top of the morning to you';
      } else if (hour >= 12 && hour < 17) {
        greeting.value = 'Good afternoon';
      } else if (hour >= 17 && hour < 21) {
        greeting.value = 'Good evening';
      } else {
        greeting.value = 'Sweet dreams';
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
