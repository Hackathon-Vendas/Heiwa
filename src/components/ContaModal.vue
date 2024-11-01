<script setup>
import { ref } from 'vue';

const isModalOpen = ref(true);
</script>

<template>
    <div v-if="isModalOpen" class="modal-over lay">
        <div class="modal">
            <button @click="closemodal" class="close-btn"> </button>
            <h2>Conta</h2>
            <div class="item-list">
                <div v-for="iten in cardItens" :key="item.id" class="item">
                    <span>{{ item.quality }}X</span>
                    <span> {{ item.name }}</span>
                    <span>R$ {{ item.price.toFixed(2) }}</span>

                </div>
            </div>
            <div class="subtotal">
                <span>SUBTOTAL:</span>
                <span>R$ {{ item.subtotal.toFixed(2) }}</span>
            </div>
            <div class="total">
                <span>TOTAL:</span>
                <span>R$ {{ item.total.toFixed(2) }}</span>
            </div>
            <button class="finalizar"></button>
        </div>
    </div>
</template>