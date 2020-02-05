<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="8000"
                controls
                indicators
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
        >
            <!-- Text slides with image -->
            <b-carousel-slide            >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="512"
                         height="480"
                         src="../assets/ModiphiusLogo.jpg"
                         alt="Modiphius">
                </template>
                <a href="https://www.modiphius.com/conan.html" style="color: black; text-decoration: underline;">Offizieller Publisher des Conan RPGs</a>
            </b-carousel-slide>

            <b-carousel-slide            >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/MonstroeseAlbtraeume.jpg"
                         alt="AlbtraeumeBild">
                </template>
                <a href="https://www.teilzeithelden.de/2017/07/21/ersteindruck-conan-adventures-in-an-age-undreamed-of-modiphius/" style="color: white; text-decoration: underline;">
                    Review des RPGs auf teilzeithelden.de</a>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/QuickstartAdventure.jpg"
                         alt="NewsBloodAndSand">
                </template>
                <a href="https://www.modiphius.net/products/robert-e-howards-conan-adventures-in-an-age-undreamed-of-quickstart?_pos=1&_sid=e9b0b0445&_ss=r"
                    style="color: white; text-decoration: underline;">
                    Quickstart Adventure - starte gleich durch
                </a>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        }
    }
</script>