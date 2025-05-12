<template>
    <div class="p-5 bg-gray-100 h-full">
        <h1>Your Cart</h1>
        <div v-if="cartItems.length > 0" class="flex flex-col gap-5 overflow-y-scroll h-full scrollbar-hidden">
            <div v-for="item in cartItems" :key="item.id">
            <CartItem :item="item" @delete-item="deleteItem" @increment-item-quantity="incrementItemQuantity" @decrement-item-quantity="decrementItemQuantity"/>
        </div>
        </div>
        <div v-else class="flex items-center justify-center mt-50 gap-5">
            <span>Your cart is empty </span>
            <Icon icon="noto-v1:sad-but-relieved-face" color="#f95e5e" width="22" />
        </div>
        <div class="flex justify-between mt-5 fixed left-0 right-0 bottom-0 bg-gray-100 p-5 cart-fixed">
            <h2>Total</h2>
            <p>${{ cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) }}</p>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { Icon } from "@iconify/vue";

const { cartItems, deleteItem, incrementItemQuantity, decrementItemQuantity } = useCart();
</script>

<style scoped>
.scrollbar-hidden {
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    height: calc(100vh - 210px);
}

.scrollbar-hidden::-webkit-scrollbar {
    display: none;
}

.cart-fixed {
    z-index: 10;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>