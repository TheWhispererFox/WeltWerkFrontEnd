<template>
  <router-link :to="routeAddress">
    <q-card>
      <q-img src="~assets/whisper_ref.png" transition="scale" />
      <div class="text-subtitle2 text-center">{{ this.article.title }}</div>
      <div class="text-subtitle3 text-center">{{ this.article.subtitle }}</div>
    </q-card>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Article } from 'components/models';

export default defineComponent({
  name: 'ArticleCard',
  props: {
    article:
    {
      type: Object as PropType<Article>,
      required: true,
    },
    routeAddress: String,
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="stylus"></style>
