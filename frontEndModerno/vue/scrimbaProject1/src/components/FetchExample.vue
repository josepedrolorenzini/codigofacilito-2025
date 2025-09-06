<script setup>
import { ref } from 'vue';
import axios from 'axios';

let datos  = ref([]) ; 



const fetchGitUsers = async () => {
    try {
        const response = await axios.get('https://api.github.com/users');
        //console.log(response.data);
        datos.value = response.data ; 
     //   setDatos(datos) ; 
       console.log( datos.value)
      //  return datos;
       // return response.data;
        
    } catch (error) {
        console.error('Error creating post:', error);

    }
}

</script>





<template>
    <h1>Fetch VUE.js Example</h1>
    <button
        @click="fetchGitUsers"
    >click to fetch data</button>

    <div v-if="datos.length > 0" class="users-container">
            <div v-for="user in datos" :key="user.id" class="user-card">
                <div class="user-header">
                    <img :src="user.avatar_url" :alt="user.login" class="user-avatar">
                    <div class="user-info">
                        <h3>{{ user.login }}</h3>
                        <p>ID: {{ user.id }}</p>
                        <p>Type: {{ user.type }}</p>
                    </div>
                </div>
                <a :href="user.html_url" target="_blank" class="user-link">
                    View Profile
                </a>
            </div>
        </div>
</template>
 