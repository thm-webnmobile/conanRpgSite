<template>
    <b-container class="Exiles" style="padding:30px;
        color: #ffffff;
        background-color: #382517;
        border-radius: 5px;
        padding-bottom: 30px;
        padding-top: 30px;">
        <p>
            Suche, finde und gründe Clans und lass dir zeigen, wo aktuell eure Basis steht.
        </p>
        <carousel></carousel>
    </b-container>
</template>

<script>
    import Carousel from "./CarouselExiles";
    export default {
        name: "Exiles",
        components: {
            Carousel
        }
    }
</script>

<style scoped>

</style>