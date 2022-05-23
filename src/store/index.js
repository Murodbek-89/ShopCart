import { createStore } from 'vuex';
import products from './products';
import coments from './coments';
import cart from './cart';

export default createStore({
  modules: { products, cart, coments },
});
