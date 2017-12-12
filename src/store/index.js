// ./src/store/index
import Vue from 'vue'
import Vuex from 'vuex'

// Import getters
import { productGetters, manufacturerGetters } from './getters'
// Import mutations
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
// Import actions
import { productActions, manufacturerActions } from './actions'

Vue.use(Vuex)

// ./src/store/index
export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters),
  // MUTATIONS
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  // ACTOINS
  actions: Object.assign({}, productActions, manufacturerActions)
});