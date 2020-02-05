<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                    caption="Riders of Hyboria-Pack jetzt erhältlich"
                    text="Das Debüt der Reittiere in Conan Exiles! Personalisiert und stilvoll durch das Land der Verbannten."
                    >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/NewsRidersofHyboria.jpg"
                         alt="NewsRidersofHyboria">
                </template>
            </b-carousel-slide>

            <b-carousel-slide
                    caption="Drittes DLC nun endlich verfügbar!"
                    text="Lange haben die Spieler darauf gewartet und nun ist es endlich verfügbar."
            >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/NewsdrittesDLC.png"
                         alt="NewsDrittesDLC">
                </template>
            </b-carousel-slide>

            <b-carousel-slide
                caption="Blood and Sand Pack"
                text="Kämpft wie die Gladiatoren im alten Rom. Neue Tunnel, Arenen und Waffen."
            >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/NewsBloodAndSand.jpg"
                         alt="NewsBloodAndSand">
                </template>
            </b-carousel-slide>

            <b-carousel-slide
                caption="Update 37"
                text="Werte Verbannte, das nächste größere Update ist jetzt auf allen Plattformen erhältlich.
                 Neue Waffen und Einführung der Kampfstandarten."
                style="text-shadow: 2px 2px 5px black;"
            >
                <template v-slot:img>
                    <img id="LowContrast" class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/NewsUpdate37.jpg"
                         alt="NewsUpdate37">
                </template>
            </b-carousel-slide>

            <b-carousel-slide
                caption="Sucher der Morgenröte"
                text="Neues Paket - erkundet das Land der Yamatai. Neue Häuserbauoptionen."
            >
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                         width="1024"
                         height="480"
                         src="../assets/NewsSucherDerMorgenröte.jpg"
                         alt="NewsSucherDerMorgenröte">
                </template>
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

<style scoped>
</style>