<template>
  <q-page class="column q-mx-sm">
    <div class="q-pa-sm">
      <div class="column no-wrap">
        <article-card class="q-ma-sm" v-for="i in 25" :key="i" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ArticleCard from 'components/ArticleCard.vue';

export default {
  components: {
    ArticleCard,
  },
};
</script>

<style></style>
