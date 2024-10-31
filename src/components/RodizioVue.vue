        <script setup>
        import { ref } from "vue";

        const showWelcomeScreen = ref(true)
        function closeWelcomeScreen() {
            showWelcomeScreen.value = false
        }
</script>

        <template>
            <main>
                <div v-if="showWelcomeScreen" class="welcome-screen">
                    <div class="welcome-content">
                        <h1>ESCOLHA A OPÇÃO DESEJADA:</h1>
                        <div class="input-container">
                            <label class="alacarte" for="alacarte">
                                <span>À la carte</span>
                                <input type="radio" id="alacarte" name="opção" value="alacarte">
                            </label>
                            <label class="alacarte" for="rodizio">
                                <span>Rodízio</span>
                                <input type="radio" id="rodizio" name="opção" value="rodizio">
                            </label>
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
    padding: 16px 40px;
    cursor: pointer;
    align-items: center;
}
margin-top
.alacarte span {
    user-select: none   ;
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
    cursor: pointer;
    appearance: none;
    width: 29px;
    height: 30px;
    border: 3px solid white;
    border-radius: 45%;
}

input[type="radio" i]:checked {
    background-color: #85DE66;
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
    padding: 25px;
    font-weight: bold;
    font-size: 25px;
    color: #ffffff;
    cursor: pointer;
    background-color: #1e1e1e00;
    border: solid #1e1e1e00;
}
</style>