<script>
export default {
    data() {
        return {
            showWelcomeScreen: true,
        };
    },
    methods: {
        closeWelcomeScreen() {
            this.showWelcomeScreen = false;
        }
    }
};
</script>

<template>
    <main>
        <div v-if="showWelcomeScreen" class="welcome-screen">
            <div class="welcome-content">
                <h1>DIGITE O NÚMERO DA MESA</h1>
                <img class="logo-principal" src="/public/logoH.png">
                <div class="logo-secundaria">SUSHI & BAR</div>
                <input type="text">
                <label for=""></label>
                <button @click="closeWelcomeScreen" class="continue-button">CONTINUAR</button>
            </div>
        </div>

    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

input {
    width: 200px;
    height: 30px;
    background-color: #D9D9D9;
    border-radius: 14px;
    border: 1px solid #ffffff
}

input:focus {
    outline: none;
}

.container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
}

.logo-principal {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: px;
    justify-content: center;
    align-items: center;
    height: 105px;
    width: 444px;
}

.logo-secundaria {
    font-size: 25px;
}

.welcome-screen {
    position: fixed;
    top: 0;
    left: 0;
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
    left: calc(50% - 489px/2 + 0.5px);
    top: 350px;
    font-family: 'Inter', 'san-siref';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;


    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.welcome-content h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
}

.continue-button {
    display: flex;
    margin: auto;
    margin-top: 10px;
    height: 46px;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    background-color: #000000;
    border: 2px solid #ffffff;
    border-radius: 20px;
}

.continue-button:hover {
    background-color: #e63e3e;
}
</style>