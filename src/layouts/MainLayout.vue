<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Nyria </q-toolbar-title>

        <q-btn dense flat round @click="left = !left" class="q-ma-sm">
          <q-avatar size="56px">
            <img src="~assets/UnAuthUser.png" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="left" side="left" behavior="mobile" elevated>
      <q-img class="absolute-top" src="~assets/AbstractShapes.jpg">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="~assets/whisper_ref_pfp.png" />
          </q-avatar>
          <div class="text-weight-bold">TheWhisperer</div>
          <div>Web developer</div>
        </div>
      </q-img>
      <q-list padding class="q-mx-sm" style="margin-top: 200px">
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
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { User } from 'src/components/models';

@Component<MainLayout>({
  watch: {
    lang(lang: string) {
      this.$i18n.locale = lang;
    },
  },
  computed: mapGetters([
    'user',
  ]),
})
export default class MainLayout extends Vue {
  mounted() {
    this.$i18n.locale = this.$q.lang.getLocale() ?? 'en-us';
  }

  left = false;

  miniState = true;

  lang = this.$i18n.locale;

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

  user!: User
}
</script>
