<script setup>

 import {ref} from 'vue'

 const nombre = ref("Rachel joseph") ; 
 const status_code = ref("404")
 const learning_Vue  = ref("learning Vue") ; 


 defineProps({
  msg: {
    type: String,
    required: true,
  },
  learningVue: {
    type: String,
    required: true,
  },
})

</script>

<template>
    <div class="greetings">
        <div style="text-align: center;">
            <p class="green">{{ nombre }}</p>
            <p class="green">{{ status_code }}</p>
            <h1 class="green">{{ learningVue }}</h1>
      </div>
    </div>
  </template>