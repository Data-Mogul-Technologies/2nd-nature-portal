<template>
  <div id="app" class="container is-max-desktop">
    <webapp-header />
    
    <router-view />
  </div>
</template>
 
<script>
import Header from './views/Header'
export default {
  name: "App",
  components: {
    'webapp-header':Header
  }
};
</script>
 
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>