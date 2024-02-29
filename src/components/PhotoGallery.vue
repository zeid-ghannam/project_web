<template>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" :transition="900">
      <Slide v-for="image in images" :key="image.id">
        <div class="carousel__item mb-4"><img :src="require(`@/assets/images/gallery/${image.id}.png`)" /></div>
      </Slide>
    </Carousel>
  
    <Carousel
      :autoplay="3500"
      id="thumbnails"
      :items-to-show="3.5"
      :transition="800"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(image, index) in images" :key="image.id">
        <img :src="require(`@/assets/images/gallery/${image.id}.png`)" class="carousel__item h-48" @click="slideTo(index)"/>
      </Slide>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'PhotoGallery',
    components: {
      Carousel,
      Slide,
    },
    data: () => ({
      currentSlide: 0,
      images: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14}
      ]
    }),
    methods: {
      slideTo(val) {
        this.currentSlide = val
      },
      getImage(imagePath) {
        return require(imagePath);
      }
    },
  })
  </script>