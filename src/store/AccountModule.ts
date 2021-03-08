import {
  Action, getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';
import { User } from '../components/models';

@Module({
  dynamic: true,
  store: storeInstance,
  namespaced: true,
  name: 'AccountModule',
})
class AccountModule extends VuexModule {
  user: User = { Username: 'TheWhisperer', Tagline: 'Web developer' }

  @Mutation
  SET_USER(user: User) {
    this.user = user;
  }

  @Action
  setUser(user: User) {
    this.SET_USER(user);
  }
}

export const AccountStore = getModule(AccountModule);
