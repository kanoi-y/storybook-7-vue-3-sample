import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n";
import pinia from "./pinia";
import { createRouter } from "./router";

createApp(App).use(i18n).use(pinia).use(createRouter("history")).mount("#app");
