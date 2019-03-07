<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/nako_logo.png"> 
    <h2>B&nbsp;l&nbsp;o&nbsp;c&nbsp;k&nbsp;&nbsp;E&nbsp;x&nbsp;p&nbsp;l&nbsp;o&nbsp;r&nbsp;e</h2>
    <div>Simple, fast, multi-chain block explorer</div>
    <AllChains/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllChains from '@/components/AllChains.vue'; // @ is an alias to /src

@Component({
  components: {
    AllChains,
  },
})
export default class Home extends Vue {}
</script>
