import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import TableMesa from '@/services/mesa';

export const useMesaStore = defineStore('mesa', () => {
    const state = reactive({
        mesa: []
    });

    const mesa = computed(() => state.mesa);

    const getAllMesa = async () => {
        try {
            const data = await TableMesa.getAllMesas();
            state.mesa = data;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        mesa,
        getAllMesa
    };
});
