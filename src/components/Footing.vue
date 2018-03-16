<template>
  <footer class="footer">
    <a title="See the source code" href="https://github.com/andreasvirkus/viimane" class="footer-link">
      <SourceIcon class="footer-icon" />
    </a>
    <a title="Visit my personal site" href="https://andreasvirkus.me" class="footer-link">ajv</a> /2018
  </footer>
</template>

<script>
  import SourceIcon from '@/assets/svg/github.svg'

  export default {
    name: 'footing',
    components: { SourceIcon }
  }
</script>

<style>
  .footer {
    display: block;
    text-align: center;
    padding: 2em 0;
  }
  .footer-link {
    border-color: var(--theme-red);
  }
  .footer-link:hover {
    border-color: inherit;
  }

  .footer-icon {
    height: 2em;
    transform: translateY(11px);
  }
</style>
