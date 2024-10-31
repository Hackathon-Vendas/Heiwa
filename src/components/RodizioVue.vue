        <script setup>
        import { ref } from "vue";

        const showWelcomeScreen = ref(true)
        function closeWelcomeScreen() {
            showWelcomeScreen.value = false
        }

        const evento = ref(null)
        function selecionar(valor) {
            evento.value = valor
        }
</script>

        <template>
            <main>
                <div v-if="showWelcomeScreen" class="welcome-screen">
                    <div class="welcome-content">
                        <h1>ESCOLHA A OPÇÃO DESEJADA:</h1>
                        <div class="input-container">
                            <div class="alacarte" @click="selecionar('alacarte')">
                                <span>À la carte</span>
                                <input type="radio" name="opção" v-model="evento" value="alacarte">
                            </div>
                            <div class="alacarte" @click="selecionar('rodizio')">
                                <span>Rodízio</span>
                                <input type="radio" name="opção" v-model="evento" value="rodizio">
                            </div>
                        </div>
                        <hr>
                        <button @click="closeWelcomeScreen" class="continue-button">VOLTAR</button>
                    </div>
                </div>
            </main>
        </template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

.alacarte {
    background-color: #6B6B6B;
    margin-left: 32px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    width: calc(500px - 120px);
    border-radius: 14px;
    padding: 20px 40px;
    cursor: pointer;
}


hr {
    margin-top: 25px;
    border: 1.8px solid white;
    border-radius: 50px;
}

.input-container {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 500;
}

input[type="radio" i] {
    accent-color: #85DE66;
    cursor: pointer;
    transform: scale(2.5);
}


.welcome-screen {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.425);
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome-content {
    text-align: center;
    color: white;
}

.welcome-content h1 {
    font-family: "Inter", serif;
    letter-spacing: 3px;
    max-width: 450px;
    font-size: 35px;
    padding: 20px;
}

.continue-button {
    margin: auto;
    margin-top: 25px;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    background-color: #1e1e1e00;
    border: solid #1e1e1e00;
}
</style>