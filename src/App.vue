<template>
  <div id="app">

    <Reactive msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Reactive from "./components/Reactive.vue";

export default {
  name: "app",
  components: {
    Reactive
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
