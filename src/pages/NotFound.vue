<template>
  <section>
    <h1 class="highlight-first">Ohohh!</h1>

    <h3>
      Nii me küll kuhugi ei jõua...
    </h3>
    <p>Tundub, et otsitud lehte ei eksisteeri.</p>
    <p><router-link to="/">Tagasi esilehele</router-link></p>

    <Cone class="not-found-svg" />
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
  .not-found-svg {
    height: 10em;
  }
</style>
