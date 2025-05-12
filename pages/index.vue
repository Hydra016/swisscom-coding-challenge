<template>
   <div class="min-h-screen py-10">
    <div class="">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Products</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" @toggle-cart="openCart" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "#imports";
import { useCart } from "~/composables/useCart";

const { data: products, status, error } = await useFetch("/api/items");
const { addToCart, openCart, isCartOpen } = useCart();

</script>

<style scoped>

</style>