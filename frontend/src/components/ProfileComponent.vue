<template>
    <v-row class="profileBlock">
        <v-col cols="6" class="profilePicture">
                <div class="pictureTitle">Photo de profil</div>
                <img @click="updatePicture" v-if="this.user.imageUrl !== '' || null" :src=this.user.imageUrl class="picture">
                <img @click="updatePicture" v-if="this.user.imageUrl == '' || null" src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" class="picture">
                <div v-if="pictureInput == true">
                    <input type="file" @change="sendPicture" name="image" id="photo" placeholder="">
                    <v-btn @click="updatePicture">Modifier</v-btn>
                </div>
                <v-btn v-if="pictureInput == false" @click="showPictureInput" class="modifyBtn" dark>Modifier la photo de profil</v-btn>
        </v-col>
        <v-col cols="6" class="cardBlock">
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
                            <v-btn tile dark color=#091F43 @click="updateFirstName" class="modify">
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
                            <v-btn tile dark color=#091F43 @click="updateEmail" class="modify">
                                Modifier
                            </v-btn>
                        </div>
                    </div>
                    <div class="text-center">
                        <v-chip class="ma-2 deleteColor" dark>
                            <div class="infoChip">
                                <div>
                                Supprimer le compte
                                </div>
                                <button @click="deleteAccount" class="modifBtn"><v-icon class="deleteIcon">mdi-delete-forever</v-icon></button>
                            </div>
                        </v-chip>
                    </div>
                </v-card-text>
                <v-card-actions class="newPostBtn">
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
        </v-col>
    </v-row>
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
            picture: '',
            pictureInput: false,
            file:'',
            user:{
                userLastName: '',
                userFirstName: '',
                email:'',
                imageUrl: '',
                password:'',
                id: JSON.parse(localStorage.getItem('userInfo')).id
            }
        }  
    },
    methods:{
        postView() {
        this.$router.push('feed');
    },
    deleteAccount(){
            axios.delete('auth/users/' + JSON.parse(localStorage.getItem('userInfo')).id, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}} )
            .then(response => {
                console.log(response)
                localStorage.clear()
                this.$router.push('signup')
            })
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
    showPictureInput(){
        this.pictureInput = true
    },
                getProfile: function() {
                    axios.get('auth/users/'+ JSON.parse(localStorage.getItem('userInfo')).id, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
                    .then((response) => {
                        console.log(response.data)
                        this.user.userLastName = response.data.lastname
                        this.user.userFirstName = response.data.firstname
                        this.user.password = response.data.password
                        this.user.imageUrl = response.data.imageUrl
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
        updateFirstName(){
            axios.put('auth/users/' + JSON.parse(localStorage.getItem('userInfo')).id  + '/firstname', { firstname: this.firstname}, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
            .then((res) =>{
                console.log(res)
                window.location.reload()
            })
        },
        updateEmail(){
            axios.put('auth/users/' + JSON.parse(localStorage.getItem('userInfo')).id  + '/email', { email: this.email}, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
            .then((res) =>{
                console.log(res)
                window.location.reload()
            })
        },
        updatePicture(){
            const newPost = new FormData()
            console.log(this.picture)
            
            if(this.picture){
                newPost.append('image', this.picture)
                console.log(newPost)
            
                axios.put('/auth/users/' + JSON.parse(localStorage.getItem('userInfo')).id +'/photo' , newPost, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
                .then ((response) => {
                    console.log(response)
                    window.location.reload()
                })
            }   
        },
        sendPicture(event) 
        {
        if(event.target.files.length === 0) {return}

        this.picture = event.target.files[0]         
        }, 
    },
    beforeMount(){
        this.getProfile()
    }
}
</script>

<style>

.text-center {
    margin: 5px 0
}

.modify {
    font-size: 0.7rem !important;
    height: 26px !important;
    padding: 0 10px !important;
}

.modifIcon {
    font-size: 15px !important;
    margin-left: 15px;
}

.deleteIcon {
    font-size: 20px !important;
    margin-left: 10px;
}

.deleteColor {
    background-color: rgb(153, 0, 0) !important;
}

.infoChip {
    display: flex;
}

.newPostBtn {
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
    justify-content: center;
}

.profileCard {
    display: flex;
    flex-direction: column;
    height: 450px;
}

.profileElts {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 0 16px !important;
}

.picture{
    width: 20rem;
    height: 20rem;
    border-radius: 10rem 10rem;
    object-fit: cover;
    margin: 0 0 30px 0;
}

.profilePicture {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pictureTitle {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 30px;
}

.modifyBtn {
    background-color: #091F43 !important;
}

</style>