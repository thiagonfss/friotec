import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from 'vue-meta'

const vue = createApp(App)

vue.use(store).use(router).use(VueMeta).mount("#app");
