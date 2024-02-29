<!-- src/pages/Home.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="relative">
        <div
            :style="{ backgroundImage: `url(${require('@/assets/images/kazan_hero.jpg')})` }"
            class="bg-cover bg-center bg-no-repeat overflow-y-scroll bg-fixed h-screen flex items-center justify-center"
        >
          <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <div class="container mx-auto p-4 text-center text-white">
                  <h2 class="text-4xl font-semibold mb-4" v-motion-fade>{{ $t("message.explore_hero", $store.state.language) }}</h2>
                  <p
                    class="text-lg mb-8"
                    v-motion-fade
                  >
                    {{ $t("message.explore_hero_slogan", $store.state.language) }}
                  </p>
                  <router-link to="/about">
                    <a
                      v-motion
                      :initial="{ opacity: 0, y: 100}"
                      :enter="{opacity: 1, y: 0 }"
                      :delay="300"
                      class="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded" 
                    >
                      {{ $t("button.hero_discover_more", $store.state.language) }}  
                  </a>
                  </router-link>
              </div>
            </div>  
        </div>
    </section>
    
  <!-- Featured Attractions -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-8">{{ $t("section.home_featured_attractions", $store.state.language) }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Attractions cards -->
        <div class="bg-white shadow-md rounded-lg flex flex-col">
          <div :style="{ backgroundImage: `url(${require('@/assets/images/kazan_kremlin.png')})` }" class="h-64 bg-gray-300 bg-cover bg-center rounded-t-lg"></div>
          <div class="p-6 flex-1">
            <h3 class="text-xl font-semibold mb-4">{{ $t("home.featured_attractions[0].name", $store.state.language)}}</h3>
            <p class="text-gray-600">{{ $t("home.featured_attractions[0].description", $store.state.language)}}</p>
          </div>
          <div class="p-4 bg-gray-100 text-center rounded-b-lg">
            <p class="text-blue-500 font-semibold hover:text-blue-700">
              <router-link to="/attractions/1">
                {{ $t("button.home_explore_more", $store.state.language) }}
              </router-link>
            </p>
          </div>
        </div>
        <div class="bg-white shadow-md rounded-lg flex flex-col">
          <div :style="{ backgroundImage: `url(${require('@/assets/images/palace_of_agriculture.jpeg')})` }" class="h-64 bg-gray-300 bg-cover bg-center rounded-t-lg"></div>
          <div class="p-6 flex-1">
            <h3 class="text-xl font-semibold mb-4">{{ $t("home.featured_attractions[3].name", $store.state.language)}}</h3>
            <p class="text-gray-600">{{ $t("home.featured_attractions[3].description", $store.state.language)}}</p>
          </div>
          <div class="p-4 bg-gray-100 text-center rounded-b-lg">
            <a href="/attractions/4" class="text-blue-500 font-semibold hover:text-blue-700">{{ $t("button.home_explore_more", $store.state.language) }}</a>
          </div>
        </div>
        <div class="bg-white shadow-md rounded-lg flex flex-col">
          <div :style="{ backgroundImage: `url(${require('@/assets/images/bauman_street.jpg')})` }" class="h-64 bg-gray-300 bg-cover bg-center rounded-t-lg"></div>
          <div class="p-6 flex-1">
            <h3 class="text-xl font-semibold mb-4">{{ $t("home.featured_attractions[2].name", $store.state.language)}}</h3>
            <p class="text-gray-600">{{ $t("home.featured_attractions[2].description", $store.state.language)}}</p>
          </div>
          <div class="p-4 bg-gray-100 text-center rounded-b-lg">
            <a href="/attractions/3" class="text-blue-500 font-semibold hover:text-blue-700">{{ $t("button.home_explore_more", $store.state.language) }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- Upcoming Events -->
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-semibold mb-8">{{ $t("section.home_upcoming_events", $store.state.language)}}</h2>
            <EventSlider></EventSlider>
        </div>
    </section>


    <KazanMap></KazanMap>
  </div>
</template>

<script>
import KazanMap from '@/components/KazanMap.vue'
import EventSlider from '@/components/EventSlider.vue';

export default {
  name: 'HomePage',
  components: {
    EventSlider,
    KazanMap
  }
};
</script>

<style></style>