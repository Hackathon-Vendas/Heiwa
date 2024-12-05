// stores/modalStore.js
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modals', {
state: () => ({
    isPedidoModalVisible: false,
    isContaModalVisible: false,
}),
actions: {
    abrirContaModal() {
      this.isPedidoModalVisible = false;
    },
    fecharContaModal() {
    this.isContaModalVisible = false;
    }
  },
});
