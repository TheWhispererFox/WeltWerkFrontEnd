import { store } from 'quasar/wrappers';
import Vuex, { Store } from 'vuex';
// import { ExampleStateInterface } from './module-example/state';

// eslint-disable-next-line import/no-mutable-exports
export let storeInstance: Store<unknown>;

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const localStore = new Vuex.Store<unknown>({
    modules: {},

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });
  storeInstance = localStore;
  return localStore;
});
