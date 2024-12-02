import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isVisible: false
  }),
  actions: {
    addItem(product) {
      this.items.push(product);
    },
    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    }
  },
  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.totalPrice, 0)
  }
});
