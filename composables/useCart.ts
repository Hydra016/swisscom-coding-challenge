import { useState, watch } from '#imports';
import type { CartItem, Product } from '~/types';

export const useCart = () => {
  const isCartOpen = useState('isCartOpen', () => false);
  const cartItems = useState<CartItem[]>('cartItems', () => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const openCart = () => {
    isCartOpen.value = true;
  };

  const addToCart = (product: Product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  };

  const deleteItem = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId);
  };

  const incrementItemQuantity = (productId: number) => {
    const item = cartItems.value.find(item => item.id === productId);
    if (item) {
      item.quantity++;
    }
  };

  const decrementItemQuantity = (productId: number) => {
    const item = cartItems.value.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item) {
      deleteItem(productId);
    }
  };

  watch(cartItems, (newCartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  }, { deep: true });

  return {
    cartItems,
    addToCart,
    deleteItem,
    incrementItemQuantity,
    decrementItemQuantity,
    toggleCart,
    openCart,
    isCartOpen
  };
};