<template>
  <div id="app">
    <b-navbar tag="nav" type="dark" variant="dark" sticky>
      <b-navbar-brand tag="h1" v-on:click="state=0">
        Conan RPG Site
      </b-navbar-brand>
        <b-navbar-nav>
          <b-collapse id="nav-text-collapse" is-nav>
            <b-nav-item v-on:click="state=0">Home</b-nav-item>
            <b-nav-item v-on:click="state=1">Universum</b-nav-item>
            <b-nav-item v-on:click="state=2">Pen and Paper</b-nav-item>
            <b-nav-item v-on:click="state=3">Conan Exiles</b-nav-item>
            <b-nav-item align="right">
            <a href="http://localhost:5000/routes/api/discord/login"
               style="
            color: white;
            padding: 5px 10px;
            background: #7289DA;
            line-height: 35px;
            color: #fff;
            font-family: 'Helvetica', 'Arial', sans-sefir;
            border-radius: 3px;
        ">
              Login through discord
            </a></b-nav-item>
          </b-collapse>
        </b-navbar-nav>
    </b-navbar>

    <div class="main">
      <Home :state="state" v-on:update-state="state=$event" v-if="state===0"></Home>
      <Universum v-if="state===1"></Universum>
      <PNP v-if="state===2"></PNP>
      <Exiles v-if="state===3"></Exiles>
      <Profil v-if="state===4"></Profil>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Exiles from './components/Exiles.vue'
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue'
  import PNP from './components/PNP.vue'
  import Profil from './components/Profil.vue'
  import Universum from './components/Universum.vue'

  export default {
    name: 'app',
    data: function() {
      return {
        state: 0
      }
    },
    components: {
      Exiles,
      Footer,
      Home,
      PNP,
      Profil,
      Universum
    },
    mounted() {
      let fontAwesomeScript = document.createElement('script');
      fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/013612868e.js');
      fontAwesomeScript.setAttribute('async', 'async');
      fontAwesomeScript.setAttribute('defer', 'defer');
      fontAwesomeScript.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(fontAwesomeScript);
    }
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
body {
  min-height: 100vh;

  background-image: url("assets/backgroundPic.jpg");
  background-size: 100% 100%;
    

}
div.main {
  margin: 40px 0px;
}
ul{
list-style:none;
}
</style>
