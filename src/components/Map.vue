<template>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
    <div class="map" ref="myMap"></div>
  </div>
</template>

<script>
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

export default {
  name: "Map",
  setup () {
    const myMap = shallowRef(null);
    const map = shallowRef(null);

    onMounted(() => {
      const apiKey = `${process.env.VUE_APP_API_KEY}`;

      const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

      map.value = markRaw(new Map({
        container: myMap.value,
        style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      }));
      map.value.addControl(new NavigationControl(), 'top-right');
      new Marker({color: "#FF0000"})
        .setLngLat([139.7525,35.6846])
        .addTo(map.value);
    }),
    onUnmounted(() => {
      map.value?.remove();
    })

    return {
      map, myMap
    };
  }
};
</script>


<style scoped>
@import '~maplibre-gl/dist/maplibre-gl.css';

.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>