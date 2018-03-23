<template>
  <section>
    <h2 class="highlight-first">Veel jõuad!</h2>

    <p>Allpool näed vastava ühistranspordi viimaseid aegu,
      et teaksid, millal jope selga ajada või mitu klaasi veel
      rüübata jõuab.</p>

    <p>Turvalist liiklemist!</p>

    <stops-list v-if="stops.length" :stops="stops" />
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import StopsList from '@/components/StopsList'

  export default {
    name: 'landing',
    components: { StopsList },
    computed: {
      ...mapState(['stops'])
    }
  }
</script>
