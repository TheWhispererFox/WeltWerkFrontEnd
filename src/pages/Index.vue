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
      <div class="row">
        <category-card
        class="col-4 col-md-3 q-ma-sm"
        routeAddress="articles"
        v-for="i in 20"
        :key="i" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ArticleCard from 'components/ArticleCard.vue';
import CategoryCard from 'components/CategoryCard.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component(
  {
    components: {
      ArticleCard,
      CategoryCard,
    },
  },
)
export default class Index extends Vue {}
</script>

<style></style>
