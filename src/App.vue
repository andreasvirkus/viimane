<template>
  <div id="app" class="app-container">
    <navbar />

    <main>
      <Logo class="hero-logo" />

      <transition name="view" mode="out-in">
        <router-view :key="$router.fullPath" />
      </transition>
    </main>

    <footing />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footing from '@/components/Footing'
import Logo from '@/assets/svg/logo.svg'
import { mapActions } from 'vuex'

const apiEndpoint = process.env.API_HOST

export default {
  name: 'app',
  components: { Navbar, Logo, Footing },
  methods: {
    ...mapActions(['setStops'])
  },
  created () {
    // TODO: Move this to state action?
    fetch(`${apiEndpoint}/api/stops/center`)
      .then(res => res.json())
      .then(data => this.setStops(data))
      .catch(err => console.error('Could not fetch central stops:', err))
  }
}
</script>

<style>
  /* TODO: Move these to a global.css file */
  :root {
    --theme-main: #35495E;
    --theme-white: #f1f3f5;
    --theme-red: #ff3d00;
    --theme-bright-one: #706fd3;
    --theme-bright-two: #B33771;
    --theme-bright-three: #34ace0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    margin-left: calc(100vw - 100%);
  }

  body {
    font-family: Cousine,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color: var(--theme-white);
    letter-spacing: .44px;
    line-height: 1.76;
    padding: 0;
    margin: 0;
  }

  .app-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(17,17,17);
    font-weight: 200;
  }

  main {
    text-align: center;
    margin-top: 80px;
    flex: 1;
    overflow-x: hidden;
  }

  h2 {
    font-weight: 200;
  }

  .highlight-first::first-letter {
    color: var(--theme-red);
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 3px solid;
    transition: border-color 0.125s ease-out, text-decoration-color 0.125s ease-out;
  }

  a:hover {
    border-color: var(--theme-red);
  }

  @supports (text-decoration-skip: ink) {
    a {
      border-bottom: none;
      text-decoration: underline;
      text-decoration-skip: ink;
    }
    a:hover {
      text-decoration-color: var(--theme-red);
    }
  }

  .bg-bright-one {
    background-color: var(--theme-bright-one);
    color: #fff;
  }
  .bg-bright-two {
    background-color: var(--theme-bright-two);
    color: #fff;
  }
  .bg-bright-three {
    background-color: var(--theme-bright-three);
    color: #fff;
  }

  section {
    padding: 40px;
    max-width: 740px;
    width: 90%;
    margin: 10px auto 45px;
    background-color: var(--theme-white);
    box-shadow: 0 16px 24px 0 rgba(118,143,255,0.2);
  }

  .hero-logo {
    width: 60px;
  }

  .view-enter {
    transform: translateX(100%);
  }
  .view-leave {
    transform: translateX(-100%);
  }
  .view-enter-active {
    transition: transform 0.4s ease-out;
  }
  /* .view-back-enter, .view-back-leave {
    transform: translateX(100%);
  } */

  @media (max-width: 35em) {
    .view-enter-active {
      transition: transform 0.2s ease-out;
    }
  }
</style>
