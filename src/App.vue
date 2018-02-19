<template>
  <div id="app" class="app-container">
    <navbar />

    <main>
      <Logo class="hero-logo" />

      <router-view></router-view>
    </main>

    <footer>
      &copy; <a href="https://andreasvirkus.me">ajv</a> /2018
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'app',
  components: { Navbar, Logo }
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
    color: #2c3e50;
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
    color: tomato;
  }

  a {
    color: inherit;
  }

  footer {
    display: block;
    text-align: center;
  }
  footer a {
    color: tomato;
  }

  .hero-logo {
    width: 60px;
  }
</style>
