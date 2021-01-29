<template>
  <q-page class="column q-mx-sm">
    <div class="q-pa-sm">
      <div class="column no-wrap">
        <!-- <article-card
        class="q-ma-sm"
        routeAddress="character"
        :article="articlePlaceholder"
        v-for="i in 5"
        :key="i" /> -->
        <article-card
        :article="articlePlaceholder"
        routeAddress="article"
        class="q-ma-sm"
        v-for="i in 25"
        :key="i" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ArticleCard from 'components/ArticleCard.vue';
import { defineComponent } from '@vue/composition-api';
import { Article } from 'src/components/models';

export default defineComponent({
  name: 'Articles',
  components: {
    ArticleCard,
  },
  data() {
    return {
      articlePlaceholder: {
        title: 'Title',
        subtitle: 'Subtitle',
        category: 'Category',
      } as Article,
    };
  },
});
</script>

<style></style>
