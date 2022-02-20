<template>
<div class="loginBody">
    <div class="blocLogin">
        <div class="welcomeLogin">
            Bienvenue sur la page de connexion du réseau Groupomania.
        </div>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="email">E-mail</label>
                <br>
                <input v-model="email" id="email" placeholder="email" type="email" class="form" color=F5F5F5>
                <div class="error" v-if="error">Veuillez remplir le champ convenablement.</div>                                        
            </div>    
            <div>
                <label for="password">Mot de passe</label>
                <br>
                <input v-model="password" id="password" placeholder="mot de passe" type="password" class="form">
                <div class="error" v-if="error">Veuillez remplir le champ convenablement.</div>                                        
            </div>
            <div>
                <v-btn elevation="3" color=white class="loginBtn">Se connecter</v-btn>
                <div class="notSigned">
                    Vous avez déjà un compte ?
                </div>
            </div>
        </form>
        <div class="connectDiv">
            <router-link to="/signup" class="signup">
                Connectez-vous
            </router-link>  
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email:'',
            password:'',
        }           
    },
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

</style>