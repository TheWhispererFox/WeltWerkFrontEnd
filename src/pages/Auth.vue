<template>
  <q-page class="row">
    <q-card class="col-10 col-md-3 absolute-center">
      <q-card-section>
        <div class="text-h3 text-center">Sign in</div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md row justify-center">
          <q-input v-model="login" class="col-10" label="Login" />
          <q-input
          v-model="password"
          class="col-10" :type="showPass ? 'password' : 'text'" label="Password">
            <template v-slot:append>
              <q-icon
                :name="showPass ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPass = !showPass"
              />
            </template>
          </q-input>
          <q-btn label="Submit" class="col-10" type="submit" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Auth extends Vue {
  login = '';

  password = '';

  showPass = true;
}
</script>

<style lang="stylus">

</style>
