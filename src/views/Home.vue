<template>
  <div class="home-page">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header />
    <Title msg="Welcome to my Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Title from '@/components/Title.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Header,
    Title,
  },
})
export default class Home extends Vue {}
</script>
