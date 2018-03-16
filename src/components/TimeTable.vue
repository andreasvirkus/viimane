<template>
  <dl v-if="times.length" class="time-table">
    <template v-for="(route, i) in times" class="time-table__time">
      <dt :key="i" class="time-table__destination">{{ route.destination }}</dt>
      <dd v-for="(time, j) in route.times" :key="j" class="time-table__time">{{ route.destination }}</dd>
    </template>
  </dl>
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
    grid-gap: 1em;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
  }

  .time-table__time {
    background-color: var(--theme-bright-three);
    display: block;
    color: #fff;
    margin: 0;
  }

  @media (max-width: 35em) {
    .time-table {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
