// import something here
import { AddressbarColor } from 'quasar';
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
import { boot } from 'quasar/wrappers';

export default boot((/* { app, router, Vue ... } */) => {
  AddressbarColor.set('#936cec');
});
