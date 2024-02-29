import { createApp } from 'vue';
import {createI18n} from 'vue-i18n';
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue';
import router from "./router";
import store from "./store";

import en from "./translations/en.json";
import ar from "./translations/ar.json";
import ru from "./translations/ru.json";



import './assets/css/tailwind.css';
  
  const i18n = createI18n({
    locale: "ru",
    fallbackLocale: "en",
    messages: { en, ar, ru },
  })

createApp(App).use(router).use(store).use(i18n).use(MotionPlugin).mount("#app")
