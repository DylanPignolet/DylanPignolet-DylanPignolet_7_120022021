<template>
    <div class="cardBlock">
        <v-card elevation="6" outlined class="profileCard">
            <v-card-title>
                Votre profil
            </v-card-title>
            <v-card-text class="profileElts">
                <div class="text-center">
                    <v-chip class="ma-2" color=#091F43 dark>
                        <v-avatar left class="profileIcon">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        <div class="infoChip">
                            <div>
                                {{this.user.userLastName}}
                            </div>
                            <button v-if="lastnameInput == false" @click="showLastNameInput" class="modifBtn"><v-icon class="modifIcon">mdi-pencil</v-icon></button>
                        </div>
                    </v-chip>
                    <div v-if="lastnameInput == true">
                        <input v-model.trim="lastname" id="lastname" placeholder="Nouveau nom" type="text">
                        <v-btn tile dark color=#091F43 @click="updateLastName" class="modify">
                            Modifier
                        </v-btn>
                    </div>
                </div>
                <div class="text-center">
                    <v-chip class="ma-2" color=#091F43 dark>
                        <v-avatar left class="profileIcon">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-avatar>
                        <div class="infoChip">
                            <div>
                                {{this.user.userFirstName}}
                            </div>
                            <button v-if="firstnameInput == false" @click="showFirstNameInput" class="modifBtn"><v-icon class="modifIcon">mdi-pencil</v-icon></button>
                        </div>
                    </v-chip>
                    <div v-if="firstnameInput == true">
                        <input v-model.trim="firstname" id="firstname" placeholder="Nouveau prénom" type="text">
                        <v-btn tile dark color=#091F43 class="modify">
                            Modifier
                        </v-btn>
                    </div>
                </div>
                <div class="text-center">
                    <v-chip class="ma-2" color=#091F43 dark>
                        <v-avatar left class="profileIcon">
                            <v-icon>mdi-email</v-icon>
                        </v-avatar>
                        <div class="infoChip">
                            <div>
                            {{this.user.email}}
                            </div>
                            <button v-if="emailInput == false" @click="showEmailInput" class="modifBtn"><v-icon class="modifIcon">mdi-pencil</v-icon></button>
                        </div>
                    </v-chip>
                    <div v-if="emailInput == true">
                        <input v-model.trim="email" id="email" placeholder="Nouvel email" type="email">
                        <v-btn tile dark color=#091F43 class="modify">
                            Modifier
                        </v-btn>
                    </div>
                </div>
                <div class="text-center">
                    <v-chip class="ma-2" color=#091F43 dark>
                        <v-avatar left class="profileIcon"> 
                            <v-icon>mdi-cake</v-icon>
                        </v-avatar>
                        <div class="infoChip">
                            <div>
                            date anniversaire
                            </div>
                            <button v-if="birthdayInput == false" @click="showBirthdayInput" class="modifBtn"><v-icon class="modifIcon">mdi-pencil</v-icon></button>
                        </div>
                    </v-chip>
                    <div v-if="birthdayInput == true">
                        <input v-model.trim="birthday" id="birthday" placeholder="Date d'anniversaire" type="text">
                        <v-btn tile dark color=#091F43 class="modify">
                            Modifier
                        </v-btn>
                    </div>
                </div>
                <div class="text-center">
                    <v-chip class="ma-2" color=#091F43 dark>
                        <v-avatar left class="profileIcon">
                            <v-icon>mdi-post</v-icon>
                        </v-avatar>
                        Nombre de posts
                    </v-chip>
                </div>
            </v-card-text>
            <v-card-actions class="newPost">
                <div class="text-center">
                    <v-chip @click="postView" class="ma-2 postIcon">
                        <v-avatar left>
                            <v-icon class="fireIcon">mdi-fire</v-icon>
                        </v-avatar>
                        Nouveau post
                    </v-chip>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'
export default {
    name:'profile',
    data(){
        return{
            lastname: '',
            lastnameInput: false,
            firstname: '',
            firstnameInput: false,
            email: '',
            emailInput: false,
            birthday: '',
            birthdayInput: false,
            user:{
                userLastName: '',
                userFirstName: '',
                email:'',
                password:'',
                id: JSON.parse(localStorage.getItem('userInfo')).id
            }
        }  
    },
    methods:{
        postView() {
        this.$router.push('feed');
    },
    showLastNameInput() {
        this.lastnameInput = true
    },
    showFirstNameInput() {
        this.firstnameInput = true
    },
    showEmailInput() {
        this.emailInput = true
    },
    showBirthdayInput() {
        this.birthdayInput = true
    },
                getProfile: function() {
                    axios.get('auth/users/'+ JSON.parse(localStorage.getItem('userInfo')).id, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
                    .then((response) => {
                        console.log(response.data)
                        this.user.userLastName = response.data.lastname
                        this.user.userFirstName = response.data.firstname
                        this.user.password = response.data.password
                        this.user.email = response.data.email
            })
            .catch(() => {
                console.log()
            })
        },
        updateLastName() {
        axios.put('auth/users/' + JSON.parse(localStorage.getItem('userInfo')).id  + '/lastname', { lastname: this.lastname}, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
        .then((response) => {
            console.log(response)
            window.location.reload()
        })
    },
    },
    beforeMount(){
        this.getProfile()
    }
}
</script>

<style>

.modify {
    font-size: 0.7rem !important;
    height: 26px !important;
    padding: 0 10px !important;
}

.modifIcon {
    font-size: 15px !important;
    margin-left: 15px;
}

.infoChip {
    display: flex;
}

.newPost {
    background-color: #091F43;
    display: flex;
    justify-content: center;
}

.postIcon {
    font-size: 1.1rem !important;
    background-color: white !important;
    color: #091F43 !important;
    padding: 0 50px !important;
}

.profileIcon {
    margin-right: 10px;
}

.v-chip.v-size--default {
    height: 38px !important;
    border-radius: 22px !important;
}

.fireIcon {
    color: #091F43 !important;
}

.v-card__title {
    background-color: #091F43;
    color: white;
}

.cardBlock {
    display: flex;
    justify-content: flex-end;
    margin-right: 25%;
}

.profileCard {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 350px;
}

.profileElts {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 0 16px !important;
}

</style>