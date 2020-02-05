<template>
    <b-container class="Home" style="padding:30px;
        color: #ffffff;
        background-color: #382517;
        border-radius: 5px;
        padding-bottom: 30px;
        padding-top: 30px;">
        <img src="../assets/conanlogom1.png"  height="auto" width="auto" style="max-width: 640px; max-height:360px;">
        <br/><br/>
        <p style="margin-bottom: 30px">
        Willkommen auf der Conan Rollenspiel Seite, der Seite für Spieler, Spielleiter, Clans und Co.. <br/>
        Wir bieten sowohl Informationen über Conan Rollenspiele, als auch ein Forum und einige nützliche Tools um euren Spielspaß zu verdoppeln.<br/></p>
        <p>Starte einfach gleich durch: Woran hast du am meisten Interesse?</p>
        <ul style="margin-top: 35px">
            <li><button v-on:click="$emit('update-state', 1)">Conan Universum</button></li>
            <li><button v-on:click="$emit('update-state', 2)">Conan RPG</button></li>
            <li><button v-on:click="$emit('update-state', 3)">Conan Exiles</button></li>
        </ul>
        <br/>


        <iframe style="margin-top: 30px;" src="https://discordapp.com/widget?id=648574191708274691&theme=dark" width="80%" height="500" allowtransparency="true" frameborder="0"></iframe>
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