<template>
<div>
    <v-app>
        <v-app-bar flat max-height="65">
            <Header />
        </v-app-bar>
    </v-app>
    <div class="loginBody">
        <div class="blocLogin">
            <div class="welcomeLogin">
                Bienvenue sur la page de connexion du réseau Groupomania.
            </div>
            <v-form @submit.prevent="login" v-model="valid" class="form">
                <div>
                    <v-text-field :rules='rules' label="email" dark clearable required v-model.trim="user.email" id="email" placeholder="email" type="email" class="form" />                                       
                </div>    
                <div>
                    <v-text-field :rules='rules' label="mot de passe" dark clearable required v-model.trim="user.password" id="password" placeholder="mot de passe" type="password" class="form" />                                       
                </div>
                <div class="logBtn">
                    <v-btn @click="login" :disabled="!valid" dark elevation="3" color=white class="loginBtn">
                            Se connecter
                    </v-btn>
                    <div class="notSigned">
                        Vous avez déjà un compte ?
                    </div>
                </div>
            </v-form>
            <div class="connectDiv">
                <router-link to="/signup" class="signup">
                    Connectez-vous
                </router-link>  
            </div>
        </div>
    </div>
</div>
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