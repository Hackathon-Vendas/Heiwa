import { defineStore } from "pinia";
import { computed, reactive } from "vue";

import OrderService from "../services/order"

export const useOrderStore = defineStore("order", () => {
    const state = reactive({
        orders: []
    })

    const orders = computed(() => state.orders)


    const getAllOrder = async () => {
        const data = await OrderService.getAllOrders()
         state.orders = data
    }


    return {
        getAllOrder,
        orders
    }
})