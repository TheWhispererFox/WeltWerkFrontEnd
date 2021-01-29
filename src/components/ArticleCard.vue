<template>
  <router-link :to="routeAddress">
    <q-card>
      <q-img src="~assets/whisper_ref.png" transition="scale">
        <div class="text-subtitle1 absolute-bottom" >{{ article.title }}</div>
        <div class="text-subtitle2">{{ article.subtitle }}</div>
      </q-img>
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
      type: (Object as unknown) as PropType<Article>,
      required: true,
      default: {
        title: 'Title',
        subtitle: 'Subtitle',
        category: 'Category',
      },
    },
    routeAddress: {
      type: String,
      required: true,
      default: 'article',
    },
  },
  data() {
    return {
    };
  },
  setup(props) {
    return { ...props };
  },
});
</script>

<style lang="stylus"></style>
