import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.token = '';
      state.user = {};
      localStorage.removeItem('token');
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/token/', { username, password });
        commit('setToken', response.data.access);
        return true;
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false;
      }
    },
    async getUser({ commit }) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/user/', {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        });
        commit('setUser', response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
});
