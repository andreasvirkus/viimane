<template>
  <section>
    <h2>Hei-hopsti!</h2>

    <p>Allpool näed vastava ühistranspordi viimaseid aegu,
      et teaksid, millal jope selga ajada või mitu klaasi veel
      rüübata jõuab!</p>

    <p>Turvalist liiklemist!</p>

    <ul>
      <li v-for="stop in uniqueStops" :key="stop">{{ stop }}</li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'landing',
    computed: {
      ...mapGetters(['uniqueStops'])
    }
  }
</script>
