<template>
  <div class="container mx-auto py-8 space-y-12">
    <!-- Local Cuisine Section -->
    <div
        v-motion  
        :initial="{ opacity: 0, x: -100 }"
        :enter="{opacity: 1, x: 0,
          transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
        :delay="100"
        class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
      >
				<img :src="require('@/assets/images/chakchak.jpg')" alt="Local Cuisine Image"  class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<h3 class="text-3xl font-bold">{{ $t("culture.local_cuisine.title", $store.state.language) }}</h3>
					<p class="my-6 dark:text-gray-400">{{ $t("culture.local_cuisine.text", $store.state.language) }}</p>
				</div>
    </div>

    
    <!-- Traditional Customs Section -->
    <div
      v-motion  
      :initial="{ opacity: 0, x: 100 }"
      :enter="{opacity: 1, x: 0 , transition: {
          duration: 500,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
      :delay="500"
      class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse  bg-gray-100">
				<img :src="require('@/assets/images/dress.jpg')" alt="Traditional Customs Image" class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<h3 class="text-3xl font-bold">{{ $t("culture.traditional_costumes.title", $store.state.language) }}</h3>
					<p class="my-6 dark:text-gray-400">{{ $t("culture.traditional_costumes.text", $store.state.language) }}</p>
				</div>
    </div>

    <!-- Traditions -->
    <div
      v-motion  
      :initial="{ opacity: 0, x: -100 }"
      :visible="{opacity: 1, x: 0, transition: {
          duration: 400,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
      :delay="300"  
      class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
				<img :src="require('@/assets/images/traditions.jpg')" alt="" class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<h3 class="text-3xl font-bold">{{ $t("culture.traditions.title", $store.state.language) }}</h3>
					<p class="my-6 dark:text-gray-400">{{ $t("culture.traditions.text", $store.state.language) }}</p>
				</div>
    </div>

    <!-- Special Rituals Section -->
    <div
      v-motion  
      :initial="{ opacity: 0, x: 100 }"
      :visible="{opacity: 1, x: 0, transition: {
          duration: 400,
          type: 'keyframes',
          ease: 'easeIn',
        },}"
      :delay="300"
    class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse  bg-gray-100">
				<img

        :src="require('@/assets/images/wedding.jpg')" alt="Special Rituals Image"
        class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<h3 class="text-3xl font-bold">{{ $t("culture.special_rituals.title", $store.state.language) }}</h3>
					<p class="my-6 dark:text-gray-400">{{ $t("culture.special_rituals.text", $store.state.language) }}</p>
				</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CulturePage',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>