<template>
  <div class="container mx-auto py-8">
    <!-- Search bar and date picker -->
    <div class="flex space-x-4 items-center mb-8">
      <input type="text" v-model="searchQuery" :placeholder="$t('forms.search.placeholder', $store.state.language)" class="px-4 py-2 border border-gray-300 rounded-md">
      <input type="date" v-model="selectedDate" class="px-4 py-2 border border-gray-300 rounded-md">
    </div>

    <!-- Event grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in events" :key="event.id" class="p-4 border border-gray-300 rounded-md">
        <h2 class="text-lg font-bold mb-2">{{ event.name }}</h2>
        <p class="text-sm text-gray-500 mb-2">{{ event.category }}</p>
        <p class="text-sm text-gray-700 mb-2">{{ event.date }}</p>
        <p class="text-sm text-gray-700 mb-2">{{ event.location }}</p>
        <p class="text-sm text-gray-700">{{ event.description }}</p>
        <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">{{ $t("button.events__attend", $store.state.language) }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import enEvents from '@/data/events_en.json';
import ruEvents from '@/data/events_ru.json';
import arEvents from '@/data/events_ar.json';

export default {
  name: 'EventsPage',
  computed: {
    ...mapState(['language'])
  },
  data() {
    return {
      searchQuery: '',
      selectedDate: '',
      events: []
    };
  },
  created() {
    this.getEventsByLocale(this.language);
  },
  watch: {
    language: {
      handler(newLocale) {
        this.getEventsByLocale(newLocale);
      },
      immediate: true
    },
    searchQuery() {
      this.events = this.filterEvents(this.events);
    },
    selectedDate() {
      this.events = this.filterEvents(this.events);
    }
  },
  methods: {
    getEventsByLocale(language) {
      switch(language) {
        case 'en':
          this.events = enEvents;
          break;
        case 'ru':
          this.events = ruEvents;
          break;
        case 'ar':
          this.events = arEvents;
          break;
        default:
          this.events = enEvents;
      }
    },
    filterEvents() {
        this.getEventsByLocale(this.language)
        
        return this.events.filter(event => {
          const nameMatchesSearchQuery = event.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          const descMatchesSearchQuery = event.description.toLowerCase().includes(this.searchQuery.toLowerCase());
          
          const catMatchesSearchQuery = event.category.toLowerCase().includes(this.searchQuery.toLowerCase());
          return (nameMatchesSearchQuery || descMatchesSearchQuery || catMatchesSearchQuery ) &&
            (!this.selectedDate || event.date >= this.selectedDate);
        });
    }
  }
};
</script>

<style>
</style>

