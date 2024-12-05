import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], 
    isRodizioVisible: false
  }),
  actions: {
    addItem(product) {
      // Verifica se o rodízio já está no carrinho, se sim, apenas atualiza a quantidade
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;  // Atualiza a quantidade
        existingItem.totalPrice = existingItem.quantity * existingItem.price;  // Atualiza o preço total
      } else {
        this.items.push(product);  // Adiciona o item se não existir no carrinho
      }
    },
    removeItem(itemId) {
      // Remove item do carrinho pelo id
      this.items = this.items.filter(item => item.id !== itemId);
    },
    addRodizio(rodizio) {
      const existingRodizio = this.items.find(item => item.id === rodizio.id);
      if (existingRodizio) {
        existingRodizio.quantity += rodizio.quantity;  
        existingRodizio.totalPrice = existingRodizio.quantity * existingRodizio.price;  total
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