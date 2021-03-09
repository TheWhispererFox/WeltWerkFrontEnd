<template>
  <q-layout view="hHh lpR fFf">
      <q-page-container class="layoutContainer">
          <q-btn to="/" text-color="white" size="xl" icon="arrow_back" />
          <router-view />
      </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MinimalisticLayout extends Vue {

}
</script>

<style lang="stylus" scoped>
.layoutContainer
    background-image: url('~assets/purple_and_dreamy_sunrise.jpg')
    background-attachment: fixed
</style>
