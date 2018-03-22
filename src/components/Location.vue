<template>
  <section>
    User is currently at: {{ lat }} | {{ lon}}
  </section>
</template>

<script>
  export default {
    data() {
      return {
        lat: 0,
        lon: 0,
      }
    },
    created () {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          console.log('User position:', lat, lon)
          // TODO: Get API/stops/area/${lat}/${lon}
        })
      }
    }
  }
</script>

<style>

</style>
