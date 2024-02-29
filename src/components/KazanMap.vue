<template>
  <div class="w-full h-64">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :options="{attributionControl: false}">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="kazanKremlin.coordinates">
        <l-tooltip>{{ kazanKremlin.name }}</l-tooltip>
      </l-marker>
      <!-- Kul Sharif Mosque marker -->
      <l-marker :lat-lng="kulSharifMosque.coordinates">
        <l-tooltip>{{ kulSharifMosque.name }}</l-tooltip>
      </l-marker>
      <!-- Bauman Street marker -->
      <l-marker :lat-lng="baumanStreet.coordinates">
        <l-tooltip>{{ baumanStreet.name }}</l-tooltip>
      </l-marker>

      <l-circle-marker :lat-lng="[55.796127, 49.106405]" :radius="35" color="red" />

      <!-- Polyline for Kazan Kremlin -->
      <l-polyline :lat-lngs="[[center, kazanKremlin.coordinates]]" :color="kazanKremlin.polylineColor"></l-polyline>
      <!-- Polyline for Kul Sharif Mosque -->
      <l-polyline :lat-lngs="[[center, kulSharifMosque.coordinates]]" :color="kulSharifMosque.polylineColor"></l-polyline>
      <!-- Polyline for Bauman Street -->
      <l-polyline :lat-lngs="[[center, baumanStreet.coordinates]]" :color="baumanStreet.polylineColor"></l-polyline>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LPolyline, LCircleMarker, LTooltip, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LCircleMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 5,
      center: [55.796127, 49.106405],
      kazanKremlin: {
        name: 'Kazan Kremlin',
        coordinates: [55.7959, 49.1247],
        markerColor: 'red', // Marker color
        polylineColor: 'green', // Polyline color
      },
      kulSharifMosque: {
        name: 'Kul Sharif Mosque',
        coordinates: [55.7992, 49.1056],
        markerColor: 'red', // Marker color
        polylineColor: 'red', // Polyline color
      },
      baumanStreet: {
        name: 'Bauman Street',
        coordinates: [55.7931, 49.1214],
        markerColor: 'red', // Marker color
        polylineColor: 'black', // Polyline color
      }
    };
  }
};
</script>

<style></style>