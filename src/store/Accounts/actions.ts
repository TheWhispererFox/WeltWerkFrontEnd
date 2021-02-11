import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { User } from './state';

const actions: ActionTree<User, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
