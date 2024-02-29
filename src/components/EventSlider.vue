<template>
   <div class="carousel-container">
    <carousel :perPage="2" :perPageCustom="[[480, 1], [768, 3]]" :autoplay="3000" :wrapAround="true" :transition="500" v-bind="settings">
      <slide v-for="(event, slide) in events" :key="slide">
        <div class="bg-white shadow-md rounded-lg p-6 carousel__item">
          <h3 class="text-xl font-semibold mb-4">{{ $t(`home.upcoming_events[${slide}].name`, $store.state.language)}}</h3>
          <p class="text-gray-600 mb-4">{{ $t(`home.upcoming_events[${slide}].date`, $store.state.language)}}</p>
          <p class="text-gray-600 mb-8">{{ $t(`home.upcoming_events[${slide}].description`, $store.state.language)}}</p>
          <div class="flex justify-around">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded">{{ $t('button.home__events_details', $store.state.language) }}</button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded">{{ $t('button.home__events_add_to_calender', $store.state.language) }}</button>
          </div>
          
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
   </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      events: [
        {
          name: "Kazan City Day",
          date: "Date: July 25, 2024",
          description: "Celebrate the anniversary of Kazan's founding with parades and festivities."
        },
        {
          name: "Kazan International Festival of Muslim Cinema",
          date: "Date: March 01-05, 2024",
          description: "Enjoy screenings of films from around the Muslim world."
        },
        {
          name: "Kazan Summer Music Festival",
          date: "Date: April 10-15, 2024",
          description: "Experience concerts and performances by local and international artists."
        }
        // A
        // Add more events as needed
      ],
      settings: {
        snapAlign: 'center',
        infinite: true,
        itemsToShow: 3
      }
    };
  }
}
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>