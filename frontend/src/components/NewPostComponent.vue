<template>
    <v-container fluid>
        <v-app>
            <v-app-bar flat max-height="65">
                <HeaderIn />
            </v-app-bar>
        </v-app>
        <v-row class="rowCenter">
            <v-col  sm="6" md="4" lg="4" xl="4" class="newPost">
                <form @submit.prevent="createPost" class="createPost">
                    <v-row>
                        <v-col cols="12">
                            <v-textarea v-model.trim="postContent.text" name="text" placeholder="Texte" class="textPost" required></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4" class="labelCol">
                            <label class="labelImg" for="file">Sélectionner une image</label>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <input  @change="sendImage" type="file" name="image" class="imageInput">
                        </v-col>
                    </v-row>
                    <v-row class="rowBtn">
                        <v-col cols="3" class="colSend">
                            <v-btn @click="createPost" dark tile color=#091F43>
                                <v-icon right>
                                    mdi-send
                                </v-icon>
                                Publier
                            </v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HeaderIn from "./HeaderInComponent.vue";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'

export default {
  name: 'newPost',
  props: {
    msg: String
  },
  components: {
      HeaderIn
  },
  data(){
    return{
        picture:'',
        pictureUrl:'',
        image: '',
        imageUrl: '',
        postContent: {
            text: '',
            imageUrl: '',
            userId: JSON.parse(localStorage.getItem('userInfo')).id
        }
      }
    },
    methods: {
        createPost() {
            const createPost = new FormData()
            console.log(this.picture)
            if(this.picture) {
                createPost.append('image', this.picture)
                createPost.append('text', this.postContent.text)
                createPost.append('userId', this.postContent.userId)

                axios.post('auth/post', createPost, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
                .then((response) => {
                    console.log(response)
                    window.location.reload()
                })
            }
            else {
                createPost.append('text', this.postContent.text)
                createPost.append('userId', this.postContent.userId)
        
                axios.post('auth/post', createPost, {headers:{'Authorization': 'Bearer '  + localStorage.getItem('token')}})
                .then ((response) => {
                    console.log(response)
                    window.location.reload()
                })
            }
        },

        sendImage(event) 
    {
      if(event.target.files.length === 0) {return}

      this.picture = event.target.files[0]         
    },   
    }
  }
</script>

<style>

.rowCenter {
    justify-content: center;
    margin-top: 20px;
}

.newPost {
    border: solid;
    padding: 16px;
}

.labelImg {
    color: black;
}

.textPost {
    padding: 8px 12px;
    min-height: 122px;
    width: 100%;
}

.labelCol {
    padding: 0 0 0 12px;
}

.rowBtn {
    justify-content: flex-end;
}

.colSend {
    max-width: 100%
}



</style>