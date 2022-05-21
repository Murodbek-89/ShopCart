export default {
  state: {
    cart: [],
  },
  getters: {
    CART(state) {
      return state.cart;
    },
  },
  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProduct = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProduct = true;
            item.id++;
          }
        });
        if (!isProduct) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT: (state, i) => {
      state.cart[i].id++;
    },
    DECREMENT: (state, i) => {
      if (state.cart[i].id > 1) {
        state.cart[i].id--;
      }
    },

    REMOVE_CART: (state, i) => {
      state.cart.splice(i, 1);
    },
  },
  actions: {
    ADD_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    DELETE_CART({ commit }, i) {
      commit('REMOVE_CART', i);
    },
    INCREMENT_CART({ commit }, i) {
      commit('INCREMENT', i);
    },
    DECREMENT_CART({ commit }, i) {
      commit('DECREMENT', i);
    },
  },
  modules: {},
};
