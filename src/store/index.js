// store/index.js
import { createStore } from 'vuex'


export default createStore({
  state: {
    isRTL: false,
    language: 'ru',
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    },
    setIsRTL(state, isRTL) {
      state.isRTL = isRTL;
    }
  },
  actions: {
    setLanguageAndRTL({ commit }, { language, isRTL }) {
      commit('setLanguage', language);
      commit('setIsRTL', isRTL);
      // You can also perform additional actions related to language setting here
    }
  }
});
