import 'babel-polyfill'

import Vue from 'vue'
import Test from "./Test";
import Movies from "./Movies";

new Vue({
  el: '#app',
  ...Movies,
})
