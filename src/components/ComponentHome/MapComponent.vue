<template>
    <div id="map"></div>
</template>

<script>
  if(window.location.href.split('/').slice(-1)[0] === ''){
      ymaps.ready(init);
  }

  function init() {
    let myMap = new ymaps.Map("map", {
        center: [50.086487, 45.378732],
        zoom: 17,
        controls:['default', 'routeButtonControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [50.08657, 45.3787]
        },
        // Свойства.
        properties: {
          // Контент метки.
          iconContent: 'Автомойка на партизанской'
        }
      }, {
        preset: 'islands#blackStretchyIcon'
      });
    myMap.behaviors
      .disable(['rightMouseButtonMagnifier','ruler','scrollZoom']);

    myMap.geoObjects
      .add(myGeoObject)
  }
  export {init as map}
  export default {
        name: "map-component"
    }
</script>

<style scoped>

  #map
  {
    overflow: hidden;
    margin: 0 0 -1px;
    width: 100%;
    height: 400px;
  }
</style>
