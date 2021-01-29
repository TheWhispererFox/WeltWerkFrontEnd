<template>
  <q-page class="column q-mx-sm">
    <p class="text-h4">{{ $t('randomArticles') }}</p>
    <q-scroll-area horizontal class="full-width" style="height: 300px">
      <div class="q-pa-sm">
        <div class="row no-wrap">
          <article-card
            class="q-ma-sm"
            style="width: 300px"
            v-for="i in 5"
            :key="i"
            :article="{ title: 'TheWhisperer', subtitle: 'Western dragon', category: 'Characters' }"
            routeAddress="character"
          />
          <article-card
            class="q-ma-sm"
            style="width: 300px"
            v-for="i in 25"
            :key="i"
          />
        </div>
      </div>
    </q-scroll-area>
    <p class="text-h4">{{ $t('categories') }}</p>
    <div class="q-pa-sm">
      <div v-for="j in 5" :key="j" class="row">
        <category-card class="col q-ma-sm" v-for="i in 2" :key="i" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ArticleCard from 'components/ArticleCard.vue';
import CategoryCard from 'components/CategoryCard.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Index',
  components: {
    ArticleCard,
    CategoryCard,
  },
});
</script>

<style></style>
