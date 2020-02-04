<template>
    <b-container class="PNP">
        <p>
            Auf diesen Seiten findest du Neues über das "Pen and Paper" Rollenspiel von Conan.
            Außerdem kannst du nach Gruppen suchen, oder deine eigene Gruppe für das Spiel erstellen
            und all eure kommenden Sitzungen über unsere Seite planen.
        </p>
        <carousel></carousel>
    </b-container>
</template>
<script>
    import Carousel from "./Carousel";
    export default {
        name: "PNP",
        components: {
            Carousel
        }
    }
</script>

<style scoped>

</style>