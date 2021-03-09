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

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class Block extends Vue {
  @Prop({ type: String, required: true }) readonly header!: string;

  @Prop({ type: String, required: true }) readonly content!: string;

  @Prop({ type: String, required: true }) readonly coverSrc!: string;
}
</script>

<style lang="stylus">
</style>
