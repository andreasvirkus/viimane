<template>
  <headroom>
    <nav>
      <router-link to="/" class="highlight-first">viimane</router-link>
      
      <router-link to="/buss">buss</router-link>
      <router-link to="/tramm">tramm</router-link>
      <router-link to="/troll">troll</router-link>
    </nav>
  </headroom>
</template>

<script>
  import Logo from '@/assets/svg/logo.svg'
  import { headroom } from 'vue-headroom'

  export default {
    name: 'navbar',
    components: { Logo, headroom }
  }
</script>

<style>
  nav {
    display: flex;
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: var(--theme-main);
    color: #fff;
    align-items: center;
    /* box-shadow: 0 16px 24px 0 rgba(118,143,255,0.2); */
  }

  nav > a:first-child {
    margin-right: auto;
  }

  nav a + a {
    margin-left: 2.5em;
  }

  @media (max-width: 35em) {
    nav {
      width: 100%;
      justify-content: space-around;
    }

    nav a:first-child {
      margin: 0;
    }

    nav a + a {
      margin-left: 0;
    }
  }
</style>
