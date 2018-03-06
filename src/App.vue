<template>
  <div id="app" class="app-container">
    <navbar />

    <main>
      <Logo class="hero-logo" />

      <transition name="view" mode="out-in">
        <router-view :key="$router.fullPath" />
      </transition>
    </main>

    <footer>
      &copy; <a href="https://andreasvirkus.me">ajv</a> /2018
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Logo from '@/assets/svg/logo.svg'
import { mapActions } from 'vuex'

const apiEndpoint = 'https://tallinn-transport-api.herokuapp.com'
// const apiEndpoint = 'http://localhost:5000'

export default {
  name: 'app',
  components: { Navbar, Logo },
  methods: {
    ...mapActions(['setCentralStops'])
  },
  created () {
    fetch()
    fetch(`${apiEndpoint}/api/center`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setCentralStops(data)
      })
  }
}
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: Cousine,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color: #f1f3f5;
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
    margin-top: 40px;
    flex: 1;
  }

  h2 {
    font-weight: 200;
  }

  h1::first-letter,
  h2::first-letter {
    color: #ff3d00;
  }

  a {
    color: inherit;
  }

  section {
    padding: 40px;
    max-width: 740px;
    /* width: 90%; */
    margin: 10px auto 45px;
    background-color: #fff;
    box-shadow: 0 16px 24px 0 rgba(118,143,255,0.2);
  }

  footer {
    display: block;
    text-align: center;
  }
  footer a {
    color: #ff3d00;
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
</style>
