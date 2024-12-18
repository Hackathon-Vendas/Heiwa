import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isPedidoVisible: false,
    isContaVisible: false,  
    isPagamentoVisible: false,
    isRodizioVisible: false
  }),
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;  
        existingItem.totalPrice = existingItem.quantity * existingItem.price;  
      } else {
        this.items.push(product); 
      }
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    addRodizio(rodizio) {
      const existingRodizio = this.items.find(item => item.id === rodizio.id);
      if (existingRodizio) {
        existingRodizio.quantity += rodizio.quantity;  
        existingRodizio.totalPrice = existingRodizio.quantity * existingRodizio.price;
      } else {
        this.items.push(rodizio); 
      }
    },
    removeRodizio(rodizioId) {
      this.items = this.items.filter(item => item.id !== rodizioId);
    }
  },
  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.totalPrice, 0)
  }
});