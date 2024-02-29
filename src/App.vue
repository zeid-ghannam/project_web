<template>
  <div id="app" :class="{ 'rtl': $store.state.isRTL }">
    <NavBar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script type="text/javascript">
import NavBar from "./components/NavBar.vue";
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: {
    NavBar, 
    FooterComponent
  },
  data() {
    return {
      isRTL: false
    }
  }
};
</script>
<style scoped>
.rtl {
  direction: rtl;
}
</style>