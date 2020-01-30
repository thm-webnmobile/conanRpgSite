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

</style>