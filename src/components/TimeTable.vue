<template>
  <div class="time-table">
    <ol v-if="times.length" v-for="route in times"
      :key="route" :aria-label="route.destination"
      class="time-table__listing">
      <li v-for="(time, j) in route.times" :key="route.destination + j" class="time-table__time"
        :class="'bg-bright-' + (i % 2 ? 'two' : 'three')">{{ time }}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'time-table',
    props: ['stop'],
    data () {
      return {
        times: []
      }
    },
    created () {
      // TODO: Query API for this.stop latest times
      // TODO: Ask for route/direction for stop OR
      // Display both times in columns (since there's plenty
      // of space for it actually (could even show them on
      // 2 cols each on desktop, separated by colour).
      this.times.push({
        destination: 'Metsakooli',
        times: [
          '23:22',
          '23:32',
          '23:42',
          '23:52',
          '00:02'
        ]
      })
      this.times.push({
        destination: 'Männiku',
        times: [
          '23:27',
          '23:37',
          '23:47',
          '23:57',
          '00:07'
        ]
      })
    }
  }
</script>

<style>
  .time-table {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3em;
  }

  .time-table__listing {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    padding: 0;
    --listing-background: var(--theme-bright-three);
  }
  .time-table__listing:last-child {
    --listing-background: var(--theme-bright-two);
  }
  .time-table__listing::before {
    content: '\021D2 ' attr(aria-label);
    font-size: 1.2em;
    grid-column: 1 / span 2;
    color: #fff;
  }
  .time-table__listing:first-child::before {
    background-color: #34ace0;
  }
  .time-table__listing:last-child::before {
    background-color: #B33771;
  }

  .time-table__time {
    background-color: var(--listing-background);
  }

  @media (max-width: 35em) {
    .time-table {
      grid-template-columns: repeat(1, 1fr);
    }
    /* .time-table__listing::before {
      transform: translate(50%, -5px);
    } */
  }
</style>
