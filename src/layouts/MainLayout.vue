<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Nyria </q-toolbar-title>

        <q-btn dense flat round @click="left = !left" class="q-ma-sm">
          <q-avatar size="56px">
            <img :src="this.user == null ? unAuthImg : this.user.ProfilePicture" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="left" side="left" behavior="mobile" elevated>
      <q-img src="~assets/AbstractShapesPurple-01.jpg">
        <div v-if="this.user != null" class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img :src="this.user == null ? unAuthImg : this.user.ProfilePicture" />
          </q-avatar>
          <div class="text-weight-bold">{{ 'None' }}</div>
          <div>{{ 'None' }}</div>
        </div>
        <div class="bg-transparent absolute-center q-px-md" v-else>
          <q-btn color="primary" class="col" to="/auth" label="Sign in" />
          <div class="col text-center text-body1 text-weight-bold">OR</div>
          <q-btn color="secondary" class="col" to="/" label="Sign up" />
        </div>
      </q-img>
      <q-list padding class="q-mx-sm">
        <q-item
          to="/"
          class="navbtn q-mb-sm"
          active-class="selected-navbtn"
          clickable
          exact
          v-ripple:blue
        >
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>
          <q-item-section>{{ $t('library') }}</q-item-section>
        </q-item>

        <q-item
          active-class="selected-navbtn"
          class="navbtn q-mb-sm"
          clickable
          v-ripple:blue
        >
          <q-item-section avatar>
            <q-icon name="insert_photo" />
          </q-item-section>
          <q-item-section>{{ $t('gallery') }}</q-item-section>
        </q-item>

        <q-item
          active-class="selected-navbtn"
          to="/profile"
          class="navbtn q-mb-sm"
          clickable
          v-ripple:blue
        >
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>{{ $t('profile') }}</q-item-section>
        </q-item>
        <q-item class="navbtn q-mb-sm" clickable v-ripple:blue>
          <q-item-section avatar>
            <q-icon name="flag" />
          </q-item-section>
          <q-item-section
            ><q-select
              v-model="lang"
              :options="langOptions"
              map-options
              emit-value
              options-dense
              dense
              :label="$t('language')"
          /></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition name="q-transition--slide-left">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
.selected-navbtn {
  background-color: rgba($primary, 0.4);
  color: $primary;
}

.navbtn {
  border-radius: 10px;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AccountStore } from 'src/store/AccountModule';

@Component
export default class MainLayout extends Vue {
  mounted() {
    this.$i18n.locale = this.$q.lang.getLocale() ?? 'en-us';
  }

  left = false;

  miniState = true;

  // eslint-disable-next-line class-methods-use-this
  get unAuthImg(): string {
    // eslint-disable-next-line global-require
    return require('../assets/UnAuthUser.png');
  }

  get lang() {
    return this.$i18n.locale;
  }

  // eslint-disable-next-line class-methods-use-this
  get user() {
    return AccountStore.user;
  }

  langOptions = [
    {
      value: 'en-us',
      label: this.$t('english'),
    },
    { value: 'de', label: this.$t('german') },
    {
      value: 'ru-ru',
      label: this.$t('russian'),
    },
  ];
}
</script>
