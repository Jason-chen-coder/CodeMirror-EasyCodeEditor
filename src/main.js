import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
Vue.config.productionTip = false
import jshint from "jshint";
window.JSHINT = jshint.JSHINT;
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";

Vue.use(ElementUI);
Vue.use(codemirror);
new Vue({
  render: h => h(App),
}).$mount('#app')
