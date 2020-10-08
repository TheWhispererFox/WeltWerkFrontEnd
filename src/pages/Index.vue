<template>
  <q-page class="column q-mx-sm">
    <div class="row q-gutter-md justify-evenly q-mt-sm q-mb-md">
      <q-btn class="col" color="primary" :label="$t('language')" />
      <q-btn class="col" color="secondary" :label="$t('library')" />
      <q-btn class="col" color="accent" :label="$t('user')" />
    </div>
    <div class="row">
      <div class="column col">
        <p class="text-h1">Nyria</p>
        <p class="text-h3">23 October 20XX</p>
        <p class="text-body1">
          Nyria is a magical planet in the {solar system} solar system, with a
          wide variety of creatures.
        </p>
      </div>
      <q-scroll-area
        visible
        :style="'height: ' + $q.screen.height + 'px'"
        class="col"
      >
        <block
          class="q-mb-sm"
          v-for="i in 10"
          :key="i"
          :header="'Announcement #' + i"
          :content="'Content for announcement #' + i"
        />
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import Block from 'components/Block.vue';

export default {
  components: {
    Block,
  },
};
</script>

<style></style>
