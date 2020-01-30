<template>
    <b-container class="Profil">
        <b-row>
            <b-col>
                <img alt="Profilbild" src="../assets/Platzhalter.png">
                <p>Max Musterspieler</p>
            </b-col>
            <b-col>
                <div class="aktiveClans">
                    <p>
                        Aktiv in folgenden Clans:
                    </p>
                    <ul >
                        <li>Clan 1</li>
                        <li>Clan 2</li>
                    </ul>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Profil"
    }
</script>

<style scoped>

</style>