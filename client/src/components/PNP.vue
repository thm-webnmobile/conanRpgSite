<template>
    <b-container class="PNP" style="padding:30px;
        color: #ffffff;
        background-color: #382517;
        border-radius: 5px;
        padding-bottom: 30px;
        padding-top: 30px;">
        <p>
            Auf diesen Seiten findest du Neues über das "Pen and Paper" Rollenspiel von Conan.
            Außerdem kannst du nach Gruppen suchen, oder deine eigene Gruppe für das Spiel erstellen
            und all eure kommenden Sitzungen über unsere Seite planen.
        </p>
        <carousel></carousel>
    </b-container>
</template>
<script>
    import Carousel from "./CarouselPnp";
    export default {
        name: "PNP",
        components: {
            Carousel
        }
    }
</script>

<style scoped>

</style>