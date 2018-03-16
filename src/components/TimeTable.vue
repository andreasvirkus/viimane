<template>
  <dl v-if="times.length" class="time-table">
    <li v-for="(time, i) in times" :key="i" class="time-table__time">{{ time }}</li>
  </dl>
</template>

<script>
  export default {
    name: 'time-table',
    props: ['stop'],
    data () {
      return {
        times: {
        }
      }
    },
    created () {
      // TODO: Query API for this.stop latest times
      // TODO: Ask for route/direction for stop OR
      // Display both times in columns (since there's plenty
      // of space for it actually (could even show them on
      // 2 cols each on desktop, separated by colour).
      this.times = [
        '23:22',
        '23:32',
        '23:42',
        '23:52',
        '00:02'
      ]
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
  }

  @media (max-width: 35em) {
    .time-table {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
