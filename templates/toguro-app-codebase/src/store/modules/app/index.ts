import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const storeOfApp = {
  state,
  getters,
  mutations,
  actions
};

export default storeOfApp;
