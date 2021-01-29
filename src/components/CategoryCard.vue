<template>
  <router-link class="cardLink" :to="routeAddress">
    <q-card>
      <q-img src="~assets/bury_the_light.png" transition="scale">
        <div class="text-subtitle1 absolute-bottom">Header</div>
      </q-img>
    </q-card>
  </router-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CategoryCard',
  props: {
    routeAddress: {
      type: String,
      required: true,
      default: 'articles',
    },
  },
});
</script>

<style lang="stylus">
.cardLink {
  text-decoration: none;
  color: black;
}
</style>
