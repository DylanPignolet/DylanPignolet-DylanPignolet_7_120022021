<template>
    <div>
        <v-app>
            <v-app-bar flat max-height="65">
                <Header />
            </v-app-bar>
        </v-app>
        <div class="loginBody">
            <div class="blocLogin">
                <div class="welcome">
                    Bienvenue sur la page d'inscription du réseau Groupomania !
                </div>
                <v-form @submit.prevent="signup" v-model="valid" class="form">
                    <div>
                        <v-text-field :rules='rules' label="Nom" dark clearable required v-model="name" id="name" placeholder="nom" type="text" class="form" />                                     
                    </div>
                    <div>
                        <v-text-field :rules='rules' label="Prénom" dark clearable required v-model="firstName" id="firstName" placeholder="prénom" type="text" class="form" />                                
                    </div>          
                    <div>
                        <v-text-field :rules='rules' label="email" dark clearable required v-model="email" id="email" placeholder="email" type="email" class="form" />                                       
                    </div>    
                    <div>
                        <v-text-field :rules='rules' label="mot de passe" dark clearable required v-model="password" id="password" placeholder="mot de passe" type="password" class="form" />                                       
                    </div>
                    <div class="signBtn">
                        <v-btn @click="signup" :disabled="!valid" dark elevation="3" color=white class="loginBtn">
                            S'inscrire
                        </v-btn>
                        <div class="alreadySigned">
                            Vous avez déjà un compte ?
                        </div>
                    </div>
                </v-form>
                <div class="connectDiv">
                    <router-link to="/" class="connect">
                        Connectez-vous
                    </router-link>  
                </div>
            </div>
        </div>
    </div>
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
                this.$router.push('feed')
            }
        }) 
        }
    }
};
</script>

<style>

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