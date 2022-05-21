import axios from 'axios';

export default {
  state: {
    products: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
};
