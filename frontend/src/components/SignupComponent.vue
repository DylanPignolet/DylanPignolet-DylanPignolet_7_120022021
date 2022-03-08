<template>
    <v-container fluid>
        <v-app>
            <v-app-bar flat max-height="65">
                <Header />
            </v-app-bar>
        </v-app>
        <v-row class="loginBody">
            <v-col cols="6" class="blocLogin">
                <v-row class="welcome">
                    <v-col cols="12">
                        Bienvenue sur la page d'inscription du réseau Groupomania !
                    </v-col>
                </v-row>
                <v-form @submit.prevent="signup" v-model="valid" class="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="Nom" dark clearable required v-model="name" id="name" placeholder="nom" type="text" class="form" />                                     
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="Prénom" dark clearable required v-model="firstName" id="firstName" placeholder="prénom" type="text" class="form" />                                
                        </v-col>
                    </v-row>          
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="email" dark clearable required v-model="email" id="email" placeholder="email" type="email" class="form" />                                       
                        </v-col>
                    </v-row>    
                    <v-row>
                        <v-col cols="12">
                            <v-text-field :rules='rules' label="mot de passe" dark clearable required v-model="password" id="password" placeholder="mot de passe" type="password" class="form" />                                       
                        </v-col>
                    </v-row>
                    <v-row class="signBtn">
                        <v-row>
                            <v-col cols="12">
                                <v-btn @click="signup" :disabled="!valid" dark elevation="3" color=white class="loginBtn">
                                    S'inscrire
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="alreadySigned">
                                Vous avez déjà un compte ?
                            </v-col>
                        </v-row>
                    </v-row>
                </v-form>
                <v-row>
                    <v-col cols="12" class="connectDiv">
                        <router-link to="/" class="connect">
                            Connectez-vous
                        </router-link>
                    </v-col>  
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Header from './HeaderComponent.vue';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'

export default {
    name: 'Signup',
    components: {
    Header
    },
    data(){
        return{
            name:'',
            firstName:'',
            email:'',
            password:'',
            valid: true,
            rules: [
                value => !!value  || 'Champs obligatoire',
                value => (value || '').length <= 50 || '50 charactères max',
            ],
        }           
    },
    methods: {
        signup: function() {
            
            let user = {
                lastname: this.name,
                firstname: this.firstName,
                email: this.email,
                password: this.password,
            }

        axios.post('auth/signup', user)
        .then((response) => {
            console.log(response)
            if(response.status == 200){
                this.$router.push('/')
            }
        }) 
        }
    }
};
</script>

<style>

.col-12 {
    padding: 0 !important;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.welcome {
    margin: 40px 0;
    font-weight: bold;
    font-size: 1.5rem;
}

#name, #firstName, #email, #password {
    border-style: ridge;
    margin-bottom: 15px;
}



.error--text {
    margin-left: 10px;
}

.signupBtn {
    margin-top: 20px !important;
}

.alreadySigned {
    margin: 15px 0;
    color: #cac7c7
}

.connectDiv {
    margin: 25px 0;
}

.connect {
    text-decoration: none;
    color: white !important;
}

.signBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>