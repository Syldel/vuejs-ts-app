<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">À propos</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
