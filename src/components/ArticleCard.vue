<template>
  <router-link :to="routeAddress">
    <q-card>
      <q-img src="~assets/whisper_ref.png" transition="scale">
        <div class="text-subtitle1 absolute-bottom" >{{ article.Title }}</div>
        <div class="text-subtitle2">{{ article.Subtitle }}</div>
      </q-img>
    </q-card>
  </router-link>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { Article } from './models';

@Component
export default class ArticleCard extends Vue {
  @Prop({ type: String, required: true }) readonly routeAddress!: string;

  @Prop({ type: Object, required: true, default: { Title: 'Title', Subtitle: 'Subtitle', Category: 'Category' } }) article!: Article;
}
</script>

<style lang="stylus"></style>
