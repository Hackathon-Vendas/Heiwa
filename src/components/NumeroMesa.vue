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
                <h1>DIGITE O NÚMERO DA SUA MESA</h1>
                <input type="text">
                <label for=""></label>
                <button @click="closeWelcomeScreen" class="continue-button">CONTINUAR</button>
            </div>
        </div>

    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@300;400;500;600;700&display=swap');

input {
    margin-top: 30px;
    width: 75%;
    height: 50px;
    background-color: #D9D9D9;
    border-radius: 14px;
    border: 1px solid #ffffff;
    padding-left: 40px;
    font-size: 16px;
}

input:focus {
    outline: none;
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

.welcome-content h2 {
    left: calc(50% - 489px/2 + 0.5px);
    top: 350px;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 0.5rem;
}

.welcome-content h1{
    font-family: "Inter", serif;
    letter-spacing: 2px;
    font-size: 35px;
    max-width: 500px;
}

.continue-button {
    width: 72%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    background-color: #B93333;
    border: 2px solid #B93333;
    border-radius: 14px;
    cursor: pointer;
    display: block;
}


.continue-button:hover {
    background-color: #b40c0c;
    transition: background-color 0.3s ease;
}
</style>