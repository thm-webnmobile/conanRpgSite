<template>
  <div id="app">
    <b-navbar tag="nav" type="dark" variant="dark" sticky="true" >
      <b-navbar-brand tag="h1" v-on:click="state=0">
        Conan Rollenspiele
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-on:click="state=0">Home</b-nav-item>
        <b-nav-item v-on:click="state=1">Universum</b-nav-item>
        <b-nav-item v-on:click="state=2">Pen and Paper</b-nav-item>
        <b-nav-item v-on:click="state=3">Conan Exiles</b-nav-item>
        <b-nav-item v-on:click="state=4">Profil</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <div class="main">
      <Home v-if="state===0"></Home>
      <Universum  v-if="state===1"></Universum>
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
        state:0
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
  margin-top: 60px;
}
ul{
list-style:none;
}

/*====================
SVG
====================== */
svg {
  background-color: #e6f2f7;
}

path {
  fill: #c32e04;
  stroke: #333;
  stroke-width: 0.4;
}

path:hover {
  fill: #dfac20;
}

text {
  opacity: 0;
  font-size: 8px;
  fill: black;
  pointer-events: none;
}

path:hover ~ text {
  opacity: 1;
}

#headline {
  opacity: 1;
  font-size: 16px;
  fill: #3983ab;
}
/*====================
Footer
====================== */

/* Main Footer */
footer .main-footer{	padding: 20px 0;	background: #252525;}
footer ul{	padding-left: 0;	list-style: none;}

/* Copy Right Footer */
.footer-copyright {	background: #343a40;	padding: 5px 0;}
.footer-copyright .logo {    display: inherit;}
.footer-copyright nav {    float: right;    margin-top: 5px;}
.footer-copyright nav ul {	list-style: none;	margin: 0;	padding: 0;}
.footer-copyright nav ul li {	border-left: 1px solid #505050;	display: inline-block;	line-height: 12px;	margin: 0;	padding: 0 8px;}
.footer-copyright nav ul li a{	color: #969696;}
.footer-copyright nav ul li:first-child {	border: medium none;	padding-left: 0;}
.footer-copyright p {	color: #969696;	margin: 2px 0 0;}

/* Footer Top */
.footer-top{	background: #343a40;	padding-bottom: 30px;	margin-bottom: 30px;	border-bottom: 3px solid #343a40;}

/* Footer transparent */
footer.transparent .footer-top, footer.transparent .main-footer{	background: transparent;}
footer.transparent .footer-copyright{	background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3) ;}

/* Footer light */
footer.light .footer-top{	background: #f9f9f9;}
footer.light .main-footer{	background: #f9f9f9;}
footer.light .footer-copyright{	background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3) ;}

/* Footer 4 */
.footer- .logo {    display: inline-block;}

/*====================
	Widgets
====================== */
.widget{	padding: 20px;	margin-bottom: 40px;}
.widget.widget-last{	margin-bottom: 0px;}
.widget.no-box{	padding: 0;	background-color: transparent;	margin-bottom: 40px;
    box-shadow: none; -webkit-box-shadow: none; -moz-box-shadow: none; -ms-box-shadow: none; -o-box-shadow: none;}
.widget.subscribe p{	margin-bottom: 18px;}
.widget li a{	color: #ffffff;}
.widget li a:hover{	color: #4b92dc;}
.widget-title {margin-bottom: 20px;}
.widget .badge{	float: right;	background: #7f7f7f;}

.typo-light h1,
.typo-light h2,
.typo-light h3,
.typo-light h4,
.typo-light h5,
.typo-light h6,
.typo-light p,
.typo-light div,
.typo-light small{	color: #fff;}

ul.social-footer2 {	margin: 0;padding: 0;	width: auto;}
ul.social-footer2 li {display: inline-block;padding: 0;}
ul.social-footer2 li a:hover {background-color:#ffffff;}
ul.social-footer2 li a {display: block;	height:30px;width: 30px;text-align: center;}
.btn{background-color: #000000; color:#fff;}
.btn:hover, .btn:focus, .btn.active {background: #4b92dc;color: #fff;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 250ms ease-in-out 0s;
    -moz-transition: all 250ms ease-in-out 0s;
    -ms-transition: all 250ms ease-in-out 0s;
    -o-transition: all 250ms ease-in-out 0s;
    transition: all 250ms ease-in-out 0s;

}
</style>
