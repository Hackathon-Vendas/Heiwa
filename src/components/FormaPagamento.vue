<script setup>
import { ref, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import QRCode from 'qrcode';

const cartStore = useCartStore()
const input = ref(''); 
const FuncaoEspansao = ref(true);
const confirmar = ref(true);
const qrCodeUrl = ref(''); 




function FuncaoContinuar() {
    confirmar.value = false;
    emit('FinalModal')
}

function voltarPagina() {
    FuncaoEspansao.value = true;
    emit('voltarParaMesa');
    cartStore.$state.isPagamentoVisible = false
}

const emit = defineEmits([
    'voltarParaMesa',
    'FinalModal'
]);

function gerarQRCode() {
    if (input.value === 'pix') {
        const pixData = "Restaurante HEWA";
        QRCode.toDataURL(pixData, { errorCorrectionLevel: 'H' }, (err, url) => {
            if (err) {
                console.error('Erro ao gerar o QR Code:', err);
            } else {
                qrCodeUrl.value = url;
            }
        });
    }
}

watch(input, (newValue) => {
    if (newValue === 'pix') gerarQRCode();
});

</script>

<template>
    <div v-if="cartStore.$state.isPagamentoVisible" class="bem-vindo">
        <div class="container">
            <h1>ESCOLHA A OPÇÃO DESEJADA:</h1>
            <div class="input-container">
                <div class="input-group">
                    <label class="FPagamento" for="pix">
                        <span>Pix</span>
                        <input type="radio" id="pix" v-model="input" name="opção" value="pix" />
                    </label>
                    <div v-if="input === 'pix'">
                        <div class="qr-code" v-if="qrCodeUrl">
                            <p>000.000.000-00</p>
                            <img :src="qrCodeUrl" alt="QR Code" />
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <label class="FPagamento" for="cartao">
                        <span>Cartão</span>
                        <input type="radio" id="cartao" v-model="input" name="opção" value="cartao" />
                    </label>
                </div>
                <div class="input-group">
                    <label class="FPagamento" for="dinheiro">
                        <span>Dinheiro</span>
                        <input type="radio" id="dinheiro" v-model="input" name="opção" value="dinheiro" />
                    </label>
                    <hr class="divider" />
            <button v-if="input === 'pix'" @click="aguardandoPix" class="wait-button-1">AGUARDANDO PIX...</button>
            <button v-if="input === 'cartao' || input === 'dinheiro'" @click="FuncaoContinuar" class="confirm-button-2">CHAMAR GARÇOM</button>
            <button @click="voltarPagina" class="continue-button3">VOLTAR</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    z-index: 1000;
}

.aviso {
    width: calc(500px - 60px);
    font-family: 'Inter';
    font-size: 15px;
}

.divider2 {
    margin: 15px 20px;
    border: 0.10rem solid var(--cor-letra-bottom-border);
    border-radius: 8px;
}

.contador-rodizio {
    background-color: #404040;
    border-radius: 10px;
    padding: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: 'Inter';
    font-size: 18px;
    font-weight: bold;
    margin-left: 32px;
    width: calc(500px - 120px);
}

.contador-rodizio button {
    background: none;
    border: none;
    color: white;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
}

.FPagamento {
    background-color: var(--cor-fundo-input);
    margin-left: 32px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    width: calc(500px - 120px);
    border-radius: 10px;
    padding: 16px 40px;
    cursor: pointer;
    align-items: center;
}

.FPagamento span {
    user-select: none;
}
.qr-code {
    background-color: rgba(64, 64, 64, 1);
    filter: drop-shadow(-1px 6.5px 25px rgba(0, 0, 0, 0.84));
    width: 84%;
    margin-left: 32px;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.qr-code img {
    width: 150px;
    height: 150px;
    margin: 10px 0;
}

.qr-code p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    margin-top: 10px;
}
.divider {
    margin: 15px 20px;
    border: 0.10rem solid var(--cor-letra-bottom-border);
    border-radius: 8px;
}

.input-container {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 500;
}

input[type='radio' i] {
    cursor: pointer;
    appearance: none;
    width: 29px;
    height: 30px;
    border: 3px solid var(--cor-letra-bottom-border);
    border-radius: 45%;
}

input[type='radio' i]:checked {
    background-color: var(--cor-borda-input-radio);
}

.bem-vindo {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--cor-fundoSite-icon);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    backdrop-filter: blur(5px);
}

.container {
    text-align: center;
    color: var(--cor-letra-bottom-border);
}

.container h1 {
    font-family: 'Inter', serif;
    letter-spacing: 3px;
    max-width: 450px;
    font-size: 35px;
    padding: 20px;
    color: var(--cor-letra-bottom-border);
}

.continue-button {
    width: 85%;
    height: 55px;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: var(--cor-letra-bottom-border);
    background-color: var(--cor-voltar);
    border: 1px solid white;
    border-radius: 14px;
    cursor: pointer;
    display: block;
    outline-color: var(--cor-letra-bottom-border);
}

.confirm-button-2 {
    width: 85%;
    height: 55px;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: var(--cor-letra-bottom-border);
    background-color: var(--cor-fundo-bottom);
    border: 1px solid var(--cor-fundo-bottom);
    border-radius: 14px;
    cursor: pointer;
    display: block;
    outline-color: var(--cor-letra-bottom-border);
}
.wait-button-1{
    width: 85%;
    height: 55px;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: var(--cor-letra-bottom-border);
    background-color: rgba(185, 51, 51, 0.67);
    border: 1px solid var(--cor-fundo-bottom);
    border-radius: 14px;
    cursor: pointer;
    display: block;
    outline-color: var(--cor-letra-bottom-border);
}


.continue-button3 {
    width: 85%;
    height: 55px;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    color: var(--cor-letra-bottom-border);
    background-color: var(--cor-voltar);
    border: 1px solid white;
    border-radius: 14px;
    cursor: pointer;
    display: block;
    outline-color: var(--cor-letra-bottom-border);
}
</style>