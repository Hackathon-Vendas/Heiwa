<script setup>
import { ref, onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
import { useRouter } from 'vue-router';
const orderStore = useOrderStore()
 const router = useRouter()

onMounted(
    orderStore.getAllOrder
) 
import { useStore } from 'vuex';

const store = useStore();
const username = ref('');
const password = ref('');

const login = async () => {
  const success = await store.dispatch('login', { username: username.value, password: password.value });
  if (success) {
    router.push('/admin');
  } else {
    alert('Credenciais inválidas!');
  }
};
</script>

<template>
    <div class="container">
        <div class="login">
            <h1>LOGIN</h1>
            <label class="usernameLabel" for="username">Usuário: </label>
            <input v-model="username"type="text" class="username">
            <label class="passwordLabel" for="password">Senha</label>
            <input v-model="password" type="password" class="password">
            <button @click="login" class="confirmarLogin">CONFIRMAR</button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
*{
    font-family: "Inter", sans-serif;
}
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-fundoSite-icon);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(100px);
    background-image: url(/src/assets/fundoLogin.png);
}
.login{
    display: flex;
    flex-direction: column;
    width: 428px;
    height: 329px;
}
h1{
    color: white;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px
}
label{
    color: white;
    font-size: 26px;
}
.usernameLabel{
    margin-bottom: 4px;
}
.passwordLabel{
    margin-top: 13px;
    margin-bottom: 4px;
}
input{
    border-radius: 12px;
    width: 420px;
    height: 60px;
    font-size: 25px;
    outline: none;
    padding-left: 10px;
    border: none;
}
.confirmarLogin{
    width: 427px;
    height: 65px;
    border-radius: 14px;
    margin-top: 34px;
    font-size: 24px;
    color: white;
    background-color: #B93333;
    font-weight: bold;
    border: none;    
    cursor: pointer;
  }
</style>

