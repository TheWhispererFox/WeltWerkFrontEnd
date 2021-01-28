<template>
<q-page class="column">
    <div class="q-px-lg q-pb-md">
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
</q-page>
</template>

<script lang="ts">

export default {
  computed: {
    layout(): string {
      return this.$q.screen.lt.sm ? 'dense' : 'comfortable';
    },
  },
};
</script>

<style lang="stylus">
.image-gallery
  &__image
    border-radius: 3%/5%
    width: 150px
    max-width: 20vw
    cursor: pointer

    &-full
      width: 800px
      max-width: 70vw
      z-index: 2002
      pointer-events: none

      &--active
        pointer-events: all
  &__blinder
    opacity: 0
    z-index: 2000
    pointer-events: none
    transition: opacity 0.3s ease-in-out

    &--active
      opacity: 0.6
      pointer-events: all

      + div > .image-gallery__image
        z-index: 2001
</style>
