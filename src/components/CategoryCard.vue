<template>
  <router-link class="cardLink" to="categories">
    <q-card>
      <q-img src="~assets/whisper_ref.png" transition="scale" />
      <div class="text-subtitle2 text-center">Header</div>
    </q-card>
  </router-link>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CategoryCard'
});
</script>

<style lang="stylus">
.cardLink {
  text-decoration: none;
  color: black;
}
</style>
