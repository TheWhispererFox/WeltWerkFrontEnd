<template>
  <q-page class="row q-mt-md q-px-md">
    <div class="col-8 q-px-md">
        <q-card>
          <q-card-section class="text-h3">
            Brief
          </q-card-section>
          <q-separator inset />
          <q-card-section class="text-body1">
            In the world of Dragon, separated from real human world we living now. There are few large Kingdom of Dragons which leaded by powerful King and Queen. There are few Good Kingdom and also Bad Kingdom who love to take over other Kingdom land, killing many people with out mercy and destroying everything. In order to seize the Bad Kingdom, the Good Kingdom forming some bond with each other Kingdoms in Alliance called 'World-Unity'. All Kingdom in the Alliance, letting all dragons in their territory to living peacefully, not only Dragon, but also any other creatures like humans, centaurs, and other mythical creatures. All of them protected by the Alliance, they living peacefully but even the Alliance already made. The Bad ones still speeding their fearful attack. Even the world seem peace, it is actually not that peace.
          </q-card-section>
        </q-card>

        <q-timeline :layout="layout">
            <q-timeline-entry heading>
                Lifetime
            </q-timeline-entry>

            <q-timeline-entry color="green" icon="cake">
                <template v-slot:title>
                  Birth
                </template>
                <template v-slot:subtitle>
                  February 22, 1986
                </template>

                <div>
                  The birth of the character take place in 80s
                </div>
            </q-timeline-entry>
            <q-timeline-entry>
                <template v-slot:title>
                  Life
                </template>
                <template v-slot:subtitle>
                  July 5, 2015
                </template>

                <div>
                  Character just enjoys his life while he can
                </div>
            </q-timeline-entry>
            <q-timeline-entry color="red" icon="clear">
                <template v-slot:title>
                  Death
                </template>
                <template v-slot:subtitle>
                  October 15, 2033
                </template>

                <div>
                  The Death of the character because of Metro 2033 events
                </div>
            </q-timeline-entry>
        </q-timeline>
    </div>
    <div class="col">
      <q-card>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="~assets/whisper_ref_pfp.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>The Whisperer</q-item-label>
            <q-item-label caption>Reference Sheet</q-item-label>
          </q-item-section>
        </q-item>
        <q-img class="inset-shadow" src="~assets/whisper_ref.png" />
      </q-card>
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h5">General info</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label overline>
                  Species
                </q-item-label>
                <q-item-label>
                  Western Dragon
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>
                  Gender
                </q-item-label>
                <q-item-label>
                  Male
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>
                  Subspecies
                </q-item-label>
                <q-item-label>
                  Noctis Alis
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label overline>
                  Nationality
                </q-item-label>
                <q-item-section thumbnail>
                  <img src="~assets/UK_flag.png" />
                </q-item-section>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CharacterProfile extends Vue {
  get layout(): string {
    return this.$q.screen.lt.sm ? 'dense' : 'comfortable';
  }
}
</script>

<style lang="stylus">
</style>
