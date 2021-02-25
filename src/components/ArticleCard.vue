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
import Vue from 'vue';
import Component from 'vue-class-component';
import { Article } from 'components/models';

const ArticleCardProps = Vue.extend({
  props: {
    article: {
      type: Article,
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
  }
});

@Component
export default class ArticleCard extends ArticleCardProps {};
</script>

<style lang="stylus"></style>
