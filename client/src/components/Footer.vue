<template>
    <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget subscribe no-box">
                            <h5 class="widget-title">ConanRpgSite</h5>
                            <p>Conan Server, News und Community </p>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Quick Links</h5>
                            <ul class="thumbnail-widget">
                                <li>
                                    <div class="thumb-content"><a href="#." v-on:click="state=0">Home</a></div>
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="#." v-on:click="state=1">Universum</a></div>
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="#." v-on:click="state=2">Pen and Paper</a></div>
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="#." v-on:click="state=3">Conan Exiles</a></div>
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="#." v-on:click="state=4">Profil</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="widget no-box">
                            <h5 class="widget-title">Loslegen</h5>
                            <p>Werde Teil der Community</p>
                            <a class="btn" href="#." target="_blank">Jetzt registrieren!</a>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">

                        <div class="widget no-box">
                            <h5 class="widget-title">Kontakt</h5>

                            <p><a href="conanRpgSite@iem.thm.de">conanRpgSite@iem.thm.de</a></p>
                            <ul class="social-footer2">
                                <li class=""><a title="youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                <li class=""><a title="Facebook" href="https://www.facebook.com/" target="_blank" ><i class="fab fa-facebook-f"></i></a></li>
                                <li class=""><a title="Twitter" href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li class=""><a title="instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p>Copyright ConanRpgSite © 2020. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
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