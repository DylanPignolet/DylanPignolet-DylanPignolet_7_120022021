<template>
    <div class="loginBody">
        <div class="blocLogin">
            <div class="welcome">
                Bienvenue sur la page d'inscription du réseau Groupomania !
            </div>
            <form @submit.prevent="onSubmit">
                <div>
                    <label for="name">Nom</label>
                        <br>
                        <input v-model="name" id="name" placeholder="nom" type="text" class="form">
                        <div class="error" v-if="error">Veuillez renseigner votre nom</div>                                        
                </div>
                <div>
                    <label for="firstName">Prénom</label>
                    <br>
                    <input v-model="firstName" id="firstName" placeholder="prénom" type="text" class="form" >
                    <div class="error" v-if="error">Veuillez remplir le champ convenablement.</div>                                        
                </div>          
                <div>
                    <label for="email">E-mail</label>
                    <br>
                    <input v-model="email" id="email" placeholder="email" type="email" class="form">
                    <div class="error" v-if="error">Veuillez remplir le champ convenablement.</div>                                        
                </div>    
                <div>
                    <label for="password">Mot de passe</label>
                    <br>
                    <input v-model="password" id="password" placeholder="mot de passe" type="password" class="form">
                    <div class="error" v-if="error">Veuillez remplir le champ convenablement.</div>                                        
                </div>
                <div>
                    <v-btn elevation="3" color=white class="loginBtn">S'inscrire</v-btn>
                    <div class="alreadySigned">
                        Vous avez déjà un compte ?
                    </div>
                </div>
            </form>
            <div class="connectDiv">
                <router-link to="/" class="connect">
                    Connectez-vous
                </router-link>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data(){
        return{
            name:'',
            firstName:'',
            email:'',
            password:'',
        }           
    },
};
</script>

<style>

.welcome {
    margin: 40px 0;
    font-weight: bold;
    font-size: 1.5rem;
}

input {
    border-style: ridge;
    margin-bottom: 15px;
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


</style>