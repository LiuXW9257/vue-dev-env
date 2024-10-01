<template>
  <div class="container">
    <div>{{ msg }}</div>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const msg = ref('hello world')
const handleClick = () => {
  msg.value = 'hello vue-cli'
}
</script>

<style>
  .container {
    display: flex;
    background-color: pink;
  }
</style>