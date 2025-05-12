<template>
    <div class="flex justify-between items-center py-5">
        <img class="sc-83wl6d-0 dJmyRn custom-css-style-navigation-logo-image w-[120px]"
            data-cy="navigation-section-logo-image" alt="Swisscom - LV logo"
            src="https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_400,c_limit/production/images/Bk6M/HWmfV_kejQ5x.gif">
        <button @click="toggleCart" class="focus:outline-none relative">
            <Icon v-if="cartItems.length > 0" icon="material-symbols:shopping-cart-rounded" width="24" height="24" />
            <Icon v-else icon="material-symbols:shopping-cart-outline-sharp" width="24" height="24" />
            <div class="cart-items-badge"
                v-if="cartItems.length > 0">
                {{ cartItems.length }}
            </div>
        </button>
        
    </div>
    <div v-if="isCartOpen" class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        @click="toggleCart"></div>

    <div class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50"
        :class="{ 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen }">
        <Cart />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useCart } from "~/composables/useCart";


const { toggleCart, isCartOpen, cartItems } = useCart();


</script>

<style scoped>
.cart-items-badge {
    position: absolute;
    top: -7px;
    right: -5px;
    background-color: #ff0000;
    color: white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
</style>