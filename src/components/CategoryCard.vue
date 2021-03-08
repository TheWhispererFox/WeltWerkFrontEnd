<template>
  <router-link class="cardLink" :to="routeAddress">
    <q-card>
      <q-img src="~assets/bury_the_light.png" transition="scale">
        <div class="text-subtitle1 absolute-bottom">Header</div>
      </q-img>
    </q-card>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryCard extends Vue {
  @Prop({ type: String, required: true }) routeAddress!: string;
}
</script>

<style lang="stylus">
.cardLink {
  text-decoration: none;
  color: black;
}
</style>
