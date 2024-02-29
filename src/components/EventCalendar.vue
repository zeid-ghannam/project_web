<!-- src/components/EventCalendar.vue -->
<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div class="flex flex-wrap">
        <!-- Your event cards go here -->
        <!-- Example: -->
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div class="bg-white shadow-md rounded-lg p-4">
            <h3 class="text-lg font-bold mb-2">Event Name</h3>
            <p>Date: 01 January 2025</p>
            <p>Location: Kazan, Russia</p>
          </div>
        </div>
        <!-- Add more event cards as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  </style>
  