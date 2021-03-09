<template>
  <q-page>
      <h1>Category</h1>
      <div class="row q-gutter-md">
        <q-card v-for="i in 25" :key="i" flat bordered>
            <q-img
                src="~assets/bury_the_light.png"
            />

            <q-card-section>
                <div class="text-overline text-orange-9">Overline</div>
                <div class="text-h5 q-mt-sm q-mb-xs">Title {{ i }}</div>
                <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </q-card-section>
        </q-card>
      </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Articles extends Vue {}
</script>

<style>

</style>
