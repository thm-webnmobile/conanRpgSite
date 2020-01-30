<template>
    <b-container class="Home">
        Willkommen auf der Conan Rollenspiel Seite, der Seite für Spieler, Spielleiter, Clans und Co.. <br/>
        Wir bieten sowohl Informationen über Conan Rollenspiele, als auch ein Forum und einige nützliche Tools um euren Spielspaß zu verdoppeln.<br/>
        Starte einfach gleich durch: Woran hast du am meisten Interesse?
        <ul>
            <li><button v-on:click="state=1">Conan Universum</button></li>
            <li><button v-on:click="state=2">Conan RPG</button></li>
            <li><button v-on:click="App.state=3">Conan Exiles</button></li>
        </ul>

        <div class="DiscordLoginButton">
            <a href="../../../server/routes/api/discord/login">Login through discord</a>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "Home",
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
</style>