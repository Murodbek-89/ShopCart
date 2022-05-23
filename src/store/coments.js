import axios from 'axios';

export default {
  state: {
    coment: [],
  },
  getters: {
    COMENT(state) {
      return state.coment;
    },
  },
  mutations: {
    SET_COMENT: (state, coment) => {
      state.coment = coment;
    },
  },
  actions: {
    GET_COMENT({ commit }) {
      return axios('https://jsonplaceholder.typicode.com/comments?_limit=10', {
        method: 'GET',
      })
        .then((coment) => {
          commit('SET_COMENT', coment.data);
          return coment;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
};
