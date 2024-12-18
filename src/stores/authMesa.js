export const actions = {
    async validarNumeroMesa({ commit }, numeroMesa) {
      try {
        const response = await axios.get(`mesa/`, {
          params: { numeroMesa },
        });
  
        if (response.data.length > 0) {
          commit('SET_NUMERO_MESA', numeroMesa); 
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Erro ao validar número da mesa:', error);
        return false;
      }
    },
  };
  