<script setup>
import {ref} from 'vue'
defineProps({
  msg: {
    type: String,
    required: true,
  },
  greetings: {
    type: String,
    required: true,
  },
})
//const greetings = ref("using ref") ;
const user = {name:"joseph lorenzini" , age:44}
const onSelect = (e) => {
  console.log(e)
}

const count = ref(0) ;
const increment = () => {
  count.value++ ;
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p  class="green">{{ greetings }} </p>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <button
        @click="onSelect"
        :name="user.name"
        :age="user.age"
      >Click me</button>
      <button
        @click="increment"
      >count {{ count }}</button>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings p {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
