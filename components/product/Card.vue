<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <div class="p-6 flex-1 flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-2">{{ product.title }}</h2>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
      </div>
      <div class="flex flex-col justify-between mt-auto gap-2">
        <span class="text-lg font-semibold text-blue-700">${{ product.price }}</span>
        <div class="bg-blue-500 text-white px-2 py-1 rounded-md border-none text-center hover:bg-blue-600 transition-colors cursor-pointer"
        @click="$emit('add-to-cart', product), $emit('toggle-cart')"
        >Add to cart</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types';

function defineProps<T>() {
  throw new Error("Function not implemented.");
}
function defineEmits<T>() {
  throw new Error("Function not implemented.");
}

defineProps<{ product: Product }>()

defineEmits<{ 
  (e: 'add-to-cart', product: Product): void;
  (e: 'toggle-cart'): void;
  }>();
</script>

<style scoped>




</style> 