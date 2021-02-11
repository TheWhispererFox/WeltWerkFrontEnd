import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { User } from './state';

const getters: GetterTree<User, StateInterface> = {
  getUser(context: User) {
    return context;
  },
};

export default getters;
