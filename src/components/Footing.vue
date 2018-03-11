<template>
  <footer class="footer">
    <CreativeCommons class="footer-icon" />
    <a href="https://andreasvirkus.me" class="footer-link">ajv</a> /2018
  </footer>
</template>

<script>
  import CreativeCommons from '@/assets/svg/ccommons.svg'

  export default {
    name: 'footing',
    components: { CreativeCommons }
  }
</script>

<style>
  .footer {
    display: block;
    text-align: center;
    padding: 2em 0;
  }
  .footer-link {
    color: #ff3d00;
  }
  .footer-icon {
    height: 2em;
    transform: translateY(11px);
  }
</style>
