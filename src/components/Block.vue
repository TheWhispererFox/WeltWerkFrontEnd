<template>
  <q-card class="row">
    <q-card-section horizontal>
      <q-img
        img-class="col-5"
        src="~assets/bubbles_by_peppermint64nyria_de5ko13-fullview.jpg"
      />
      <q-card-section class="col">
        <div class="column">
          <p class="text-h6 col">{{ header }}</p>
          <p class="text-body1 col">{{ content }}</p>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Block',
  props: {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverSrc: {
      type: String,
      required: false,
    },
  },
});
</script>

<style>
</style>
