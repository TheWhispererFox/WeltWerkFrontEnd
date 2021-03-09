import {
  Action, getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';
import { Preferences } from '../components/models';

@Module({
  dynamic: true,
  store: storeInstance,
  namespaced: true,
  name: 'PersonalPreferencesModule',
})
class PersonalPreferencesModule extends VuexModule {
preferences: Preferences = { Language: 'en', DarkMode: false }

@Mutation
SET_LANGUAGE(lang: string) {
  this.preferences.Language = lang;
}

@Mutation
SET_DARKMODE(dark: boolean) {
  this.preferences.DarkMode = dark;
}

@Action
setLanguage(lang: string) {
  this.SET_LANGUAGE(lang);
}

@Action
setDarkMode(dark: boolean) {
  this.SET_DARKMODE(dark);
}
}

export const PersonalPreferencesStore = getModule(PersonalPreferencesModule);
