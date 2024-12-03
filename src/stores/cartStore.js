import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isRodizioVisible: false
  }),
  actions: {
    addItem(product, rodizio) {
      this.items.push(product, rodizio);
    },
    removeItem(productId, contadorRodizio) {
      this.items = this.items.filter(item => item.id !== productId && rodizio);
    }
  },
  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.totalPrice, 0)
  }
});
