<template>
  <section>
    <h2 class="highlight-first">Peatus<span v-if="activeStop">: {{ activeStop.stop_name }}</span><template v-else>ed</template></h2>

    <template v-if="id">
      <p>Allpool näed selle peatuse viimaseid väljumisaegu,
        et teaksid, millal jope selga ajada või mitu klaasi veel
        rüübata jõuab!</p>

      <p>Turvalist liiklemist!</p>

      <time-table :stop="activeStop" :times="times" />
    </template>
    <template v-else>
      <p>Vali mõni peatus, et selle aegu näha:</p>

      <stops-list v-if="stops.length" :stops="stops" />
    </template>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import StopsList from '@/components/StopsList'
  import TimeTable from '@/components/TimeTable'

  export default {
    name: 'stop',
    props: ['id'],
    components: { StopsList, TimeTable },
    computed: {
      ...mapState(['stops']),
      ...mapGetters(['activeStop'])
    },
    data () {
      return {
        times: []
      }
    },
    methods: {
      ...mapActions(['setActiveStop'])
    },
    created () {
      this.id && this.setActiveStop(this.id)
      // console.log('Active stop:', this.stop.stop_name, this.stop.stop_id)
      // TODO: List stop times by arrival_time, display only latest
      // TODO: Figure out how to show 1 time per route (& per direction)

      fetch(`${this.$api}/times/stop/${this.id}`)
        .then(res => res.json())
        .then(data => { this.times = data })
        .catch(err => console.error('Could not fetch central stops:', err))
    }
  }
</script>

<style>

</style>
