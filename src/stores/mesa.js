import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import TableService from '@/services/mesa';


export const useMesaStore = defineStore('mesa', () => {
    const state = reactive({
        mesa: []
    });

    const mesa = computed(() => state.mesa);

    const getAllMesa = async () => {
        try {
            const data = await TableService.getAllMesas();
            state.mesa = data;
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };

    return {
        mesa,
        getAllMesa
    };
});
