<template>
  <q-page class="column">
    <q-parallax :height="300" :speed="0.5" class="absolute-top mobile-only">
      <template v-slot:media>
        <img class="mask-image" src="~assets/cover.png" />
      </template>
    </q-parallax>
    <q-card class="q-mx-md mobile-only" style="margin-top: 45%">
      <div class="row q-ma-sm">
        <div class="col">
          <q-avatar size="100px" rounded>
            <q-img src="~assets/whisper_ref_pfp.png" />
          </q-avatar>
        </div>
        <div class="col-8">
          <div class="column q-ma-sm">
            <div class="col text-h6">{{ 'None' }}</div>
            <div class="col">{{ 'None' }}</div>
            <div class="col">
              <q-card class="q-px-md">
                <div class="row">
                  <div class="col">
                    <div class="column">
                      <div class="col text-center">OCs</div>
                      <div class="col text-center">6</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="column">
                      <div class="col text-center">Followers</div>
                      <div class="col text-center">527</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="column">
                      <div class="col text-center">Following</div>
                      <div class="col text-center">23</div>
                    </div>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <q-btn outline class="col q-ma-sm">Additional</q-btn>
        <q-btn class="col q-ma-sm">Follow</q-btn>
      </div>
    </q-card>
    <q-img class="desktop-only" height="300px" src="~assets/AbstractShapes.jpg">
      <div class="column absolute-center items-center transparent desktop-only">
        <q-avatar class="col" size="150px">
          <q-img src="whisper_ref_pfp.png" />
        </q-avatar>
        <div class="col text-h3">{{ 'None' }}</div>
        <div class="col text-h5">{{ 'None' }}</div>
      </div>
    </q-img>
    <p class="text-h4 q-ma-md">Characters</p>
    <q-scroll-area class="full-width q-ma-md" horizontal style="height: 300px">
      <article-card
      style="width: 300px"
      routeAddress="character"
      v-for="i in 25"
      :key="i" />
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import ArticleCard from 'components/ArticleCard.vue';
import { AccountStore } from 'src/store/AccountModule';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { ArticleCard },
})
export default class Profile extends Vue {
  // eslint-disable-next-line class-methods-use-this
  get User() {
    return AccountStore.user;
  }
}
</script>

<style lang="stylus">
.mask-image {
  mask-image: url('~assets/ProfileWaves.svg');
  mask-position: bottom;
  mask-repeat: no-repeat;
  mask-size: 100%;
}
</style>
