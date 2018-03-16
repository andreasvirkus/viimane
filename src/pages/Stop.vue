<template>
  <section>
    <h2 class="highlight-first">Peatus<span v-if="name">: {{ name }}</span><template v-else>ed</template></h2>

    <template v-if="name">
      <p>Allpool näed selle peatuse viimaseid väljumisaegu,
        et teaksid, millal jope selga ajada või mitu klaasi veel
        rüübata jõuab!</p>

      <p>Turvalist liiklemist!</p>

      <time-table :stop="name" />
    </template>
    <template v-else>
      <p>Vali mõni peatus, et selle aegu näha:</p>
      
      <stops-list v-if="uniqueStops.length" :stops="uniqueStops" />
    </template>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import StopsList from '@/components/StopsList'
  import TimeTable from '@/components/TimeTable'

  export default {
    name: 'stop',
    props: ['name'],
    components: { StopsList, TimeTable },
    computed: {
      ...mapGetters(['uniqueStops'])
    }
  }
</script>

<style>

</style>
