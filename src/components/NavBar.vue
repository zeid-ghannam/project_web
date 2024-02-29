<!--./src/components/NavBar.vue -->

<template>
    <header class="p-6 bg-white shadow-md">
      <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-gray-800 flex space-x-2">
          <img :src="require('@/assets/images/Flag_of_Tatarstan.png')" alt="Logo" class="w-12 h-8">
          <router-link to="/">{{ $t("message.welcome", $store.state.language) }}</router-link>
        </h1>
        <nav>
        <ul class="flex space-x-4">
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/">{{ $t("nav.home", $store.state.language) }}</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/about">{{ $t("nav.about", $store.state.language) }}</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/culture">{{ $t("nav.culture", $store.state.language) }}</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/events">{{ $t("nav.events", $store.state.language) }}</router-link>
          </li>
          <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/visit">{{ $t("nav.visit", $store.state.language) }}</router-link>
          </li>
          <li class="hover:text-red-500 cursor-pointer px-4">
            <button @click="setLanguage('ru')" class="text-gray-400 hover:italic hover:text-red-500 hover:underline focus:outline-none">Ру</button>
          </li>
          <li class="hover:text-red-500 cursor-pointer px-4">
            <button @click="setLanguage('ar')" class="text-gray-400 hover:italic hover:text-red-500 hover:underline focus:outline-none">العربية</button>
          </li>
          <li class="hover:text-red-500 cursor-pointer px-4">
            <button @click="setLanguage('en')" class="text-gray-400 hover:italic hover:text-red-500 hover:underline focus:outline-none">EN</button>
          </li>
        </ul>
      </nav>
      </div>

    </header>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "NavBar",
    computed: {
      ...mapState(['isRTL'])
    },
    
    methods: {
      ...mapActions(['setLanguageAndRTL']),
      setLanguage(language) {
        const isRTL = language === 'ar';
        this.setLanguageAndRTL({ language, isRTL });
      }
    }
  };
  </script>