<template>
  <section>
    <h1 class="highlight-first">Ohohh!</h1>

    <h3>Nii me küll kuhugi ei jõua...</h3>

    <Cone />

    <router-link to="/">Esilehele</router-link>
  </section>
</template>

<script>
import Cone from '@/assets/svg/cone.svg'

export default {
  name: 'not-found',
  components: { Cone }
}
</script>

<style>

</style>
