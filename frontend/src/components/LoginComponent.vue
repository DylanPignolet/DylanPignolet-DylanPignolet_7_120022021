<template>
    <v-container fluid>
        <v-app>
            <v-app-bar flat max-height="65">
                <Header />
            </v-app-bar>
        </v-app>
        <v-row class="loginBody">
            <v-col cols="6" class="blocLogin">
                <v-row class="welcomeLogin">
                    <v-col cols="12">
                    Bienvenue sur la page de connexion du réseau Groupomania.
                    </v-col>
                </v-row>
                <v-form @submit.prevent="login" v-model="valid" class="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="email" dark clearable required v-model.trim="user.email" id="email" placeholder="email" type="email" class="form" />                                       
                        </v-col>
                    </v-row>    
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="mot de passe" dark clearable required v-model.trim="user.password" id="password" placeholder="mot de passe" type="password" class="form" />                                       
                        </v-col>
                    </v-row>
                    <v-row class="logBtn">
                        <v-row>
                            <v-col cols="12">
                                <v-btn @click="login" :disabled="!valid" dark elevation="3" color=white class="loginBtn">
                                        Se connecter
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="notSigned">
                                Vous avez déjà un compte ?
                            </v-col>
                        </v-row>
                    </v-row>
                </v-form>
                <v-row class="connectDiv">
                    <v-col cols="12">
                        <router-link to="/signup" class="signup">
                            Connectez-vous
                        </router-link>
                    </v-col>  
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Header from "./HeaderComponent.vue";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'

export default {
    name: 'Login',
    components: {
    Header
    },
    data(){
        return{
            user: {
                email:'',
                password:'',
            },
            valid: true,
            rules: [
                value => !!value  || 'Champs obligatoire',
                value => (value || '').length <= 50 || '50 charactères max',
            ],
        }           
    },
    methods: {
        login: function() {
            
            let user = {
                email: this.user.email,
                password: this.user.password,
            }
            axios.post('auth/login', user)
                .then((response) => {console.log(response)
                    if(response.status == 200){
                        localStorage.setItem('userInfo', JSON.stringify(response.data.user))
                        localStorage.setItem('token', response.data.token)
                        this.$router.push('feed')
                    }
                    else{
                        this.$router.push('signup')
                    } 
                }) 
        }
    }
};
</script>

<style>

.loginBody {
    display: flex;
    justify-content: center;
}

.welcomeLogin {
    color: white;
    margin: 40px 0;
    font-weight: bold;
    font-size: 1.5rem;
}

.notSigned {
    margin: 15px 0;
    color: #cac7c7;
}

.loginBtn {
    margin-top: 20px !important;
    color: #091F43 !important;
}

.signup {
    text-decoration: none;
    color: white !important;
}

.connectDiv {
    margin-bottom: 30px;
}

.blocLogin {
    background-color: #091F43;
    width: 50%;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    color: white;
}

input {
    border-color: white !important;
}

input::placeholder {
    color: #cac7c7;
}

.logBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.theme--dark.v-btn.v-btn--has-bg {
    background-color: white;
}

</style>