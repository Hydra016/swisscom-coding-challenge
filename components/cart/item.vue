<template>
    <div class="cart-item grid grid-cols-4 py-5 items-start bg-gray-200 rounded p-4">
        <div class="flex flex-col col-span-3 justify-between">
            <div class="flex flex-col mb-3">
                <span class="font-semibold text-lg">{{ item.title }}</span>
                <span class="text-sm" style="color: gray">{{ item.description }} each</span>
            </div>
            <p>${{ item.price }} <span class="text-sm" style="color: gray">each</span></p>
        </div>
        <div class="flex flex-col justify-between h-full">
            <div 
            class="flex justify-end cursor-pointer"
            @click="$emit('delete-item', item.id)"
        >
            <Icon icon="mdi-light:delete" width="24" height="24" class="mr-2" />
        </div>
            <div class="flex items-center bg-gray-300 justify-center rounded-lg">
                <button 
                    class="px-2 py-1 bg-gray-300 rounded-l text-gray-700 hover:bg-gray-400" 
                    @click="$emit('decrement-item-quantity', item.id)"
                >
                    -
                </button>
                <span class="font-semibold text-lg mx-2">{{ item.quantity }}</span>
                <button 
                    class="px-2 py-1 bg-gray-300 rounded-r text-gray-700 hover:bg-gray-400" 
                    @click="$emit('increment-item-quantity', item.id)"
                >
                    +
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
function defineProps<T>() {
  throw new Error('Function not implemented.');
}

function defineEmits<T>() {
  throw new Error("Function not implemented.");
}


defineProps<{
    item: { quantity: number; id: number; title: string; description: string; price: number };
}>();

defineEmits<{ 
    (e: 'delete-item', id: number): void; 
    (e: 'increment-item-quantity', id: number): void; 
    (e: 'decrement-item-quantity', id: number): void; 
}>();
</script>

<style scoped>

</style>