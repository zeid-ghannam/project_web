<template>
  <div>
    <!-- Hero Section -->
    <div class="hero">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/155ecHNwd-0"
        title="Kazan Travel 4K"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Introduction Section -->
    <div class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">{{ $t("about.introduction.title", $store.state.language)}}</h2>
        <p class="text-lg text-justify">{{ $t("about.introduction.text", $store.state.language) }}</p>
      </div>
    </div>

    <!-- Geography Section -->
    <div class="intro-section bg-gray-100">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8">
            <h2 class="text-2xl font-bold mb-8">{{ $t("about.geography.title", $store.state.language)}}</h2>
            <p class="text-lg text-justify">{{ $t("about.geography.text", $store.state.language)}}</p>
          </div>
          <div
            v-motion  
            :initial="{ opacity: 0, x: 100 }"
            :visible="{opacity: 1, x: 0, transition: {
          duration: 300,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
            :delay="100"
            class="md:w-1/2 md:pr-8 mb-4 md:mb-0"
            >
            <img :src="require('@/assets/images/kazan_map.png')" alt="Geography Image" class="w-full h-auto">
          </div>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <div class="history-section">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row items-center">
          <div
            v-motion  
            :initial="{ opacity: 0, x: -100 }"
            :visible="{opacity: 1, x: 0, transition: {
          duration: 300,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
            :delay="100"
            class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <img :src="require('@/assets/images/kazan_flag.png')" alt="History Image" class="w-full h-auto">
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-4">{{ $t("about.history.title", $store.state.language)}}</h2>
            <p class="text-lg text-justify">{{ $t("about.history.text", $store.state.language)}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Architecture Section -->
    <div class="intro-section bg-gray-100">
      <div class="container mx-auto px-4 py-8">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-8">
              <h2 class="text-2xl font-bold mb-8">{{ $t("about.architecture.title", $store.state.language)}}</h2>
              <p class="text-lg text-justify">{{ $t("about.architecture.text", $store.state.language)}}</p>
            </div>
            <div
              v-motion  
              :initial="{ opacity: 0, x: 100 }"
              :visible="{opacity: 1, x: 0, transition: {
          duration: 400,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
              :delay="100"
              class="md:w-1/2 md:pr-8 mb-4 md:mb-0">
              <img :src="require('@/assets/images/kazan_arch.jpg')" alt="Architecture Image" class="w-full h-auto">
            </div>
        </div>
      </div>
    </div>

  </div>
</template>
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>