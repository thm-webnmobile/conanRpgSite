<template>
    <b-container class="Home" style="padding:30px">
        <img src="../assets/ConanLogo.jpg" width="640" height="360">
        <br/><br/>
        <p style="margin: 30px">
        Willkommen auf der Conan Rollenspiel Seite, der Seite für Spieler, Spielleiter, Clans und Co.. <br/>
        Wir bieten sowohl Informationen über Conan Rollenspiele, als auch ein Forum und einige nützliche Tools um euren Spielspaß zu verdoppeln.<br/></p>
        <p>Starte einfach gleich durch: Woran hast du am meisten Interesse?</p>
        <ul>
            <li><button v-on:click="$emit('update-state', 1)">Conan Universum</button></li>
            <li><button v-on:click="$emit('update-state', 2)">Conan RPG</button></li>
            <li><button v-on:click="$emit('update-state', 3)">Conan Exiles</button></li>
        </ul>
        <br/>


        <iframe src="https://discordapp.com/widget?id=648574191708274691&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
    </b-container>
</template>

<script>
    export default {
        name: "Home",
        props: {
            state: Number
        }
    }

</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        align-content: center;
    }
    li {
        display: inline-block;
        text-align: center;
        padding: 16px;
    }
    button {
        background-color: black;
        color: white;
        border-radius: 4px;
        padding: 10px 20px;
        border: none;
    }
</style>