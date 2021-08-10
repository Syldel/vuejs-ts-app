<template>
  <div class="about-page">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header />
    <Title msg="This is an about page" />
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
export default class About extends Vue {}
</script>
