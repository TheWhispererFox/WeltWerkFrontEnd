import { Module } from 'vuex';
import state, { User } from './state';
import { StateInterface } from '../index';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const Accounts: Module<User, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default Accounts;
