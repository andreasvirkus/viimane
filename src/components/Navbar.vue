<template>
  <headroom>
    <header>
      <router-link to="/" class="highlight-first">viimane</router-link>

      <nav>
        <router-link to="/buss">buss</router-link>
        <router-link to="/tramm">tramm</router-link>
        <router-link to="/troll">troll</router-link>
      </nav>
    </header>
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
  header {
    display: flex;
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: var(--theme-main);
    color: #fff;
    align-items: center;
    /* box-shadow: 0 16px 24px 0 rgba(118,143,255,0.2); */
  }

  header > a {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    margin-right: auto;
    text-decoration: none;
  }

  header a + a {
    margin-left: 2.5em;
  }

  header nav {
    display: flex;
  }

  @media (max-width: 35em) {
    header > a {
      display: none;
    }

    header nav {
      width: 100%;
      justify-content: space-around;
    }

    header a + a {
      margin-left: 0;
    }
  }
</style>
