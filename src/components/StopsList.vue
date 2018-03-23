<template>
  <ul v-if="stops.length" class="stops-list">
    <li v-for="(stop, i) in stops" :key="i" class="stops-list__stop">
      <router-link :to="{ name: 'Stop', params: { id: stop.stop_id } }" class="stops-list__link">{{ stop.stop_name }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'stops-list',
    props: {
      stops: Array
    }
  }
</script>

<style>
  .stops-list {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    padding: 0;
  }

  .stops-list__stop {
    background-color: var(--theme-bright-one);
  }

  .stops-list__link {
    display: block;
    color: #fff;
    border-bottom: none;
  }

  @media (max-width: 35em) {
    .stops-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
