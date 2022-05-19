<template>
<TransitionRoot :show="isOpen" as="template">
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
  <!-- The backdrop, rendered as a fixed sibling to the panel container -->
  <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

    <!-- Full-screen container to center the panel -->
    <!-- Wrap your panel in a `TransitionChild`. -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <!-- The actual dialog panel -->
      <DialogPanel class="w-full max-w-sm rounded bg-white">
        <DialogTitle>Complete your order</DialogTitle>

        <!-- ... -->
      </DialogPanel>
    </div>
  </TransitionChild>
  </Dialog>
  </TransitionRoot>
</template>

<script setup>
  import { ref } from 'vue'
  import { Dialog, DialogTitle, DialogDescription } from '@headlessui/vue'

  const isOpen = ref(true)

  function setIsOpen(value) {
    isOpen.value = value
  }
</script>