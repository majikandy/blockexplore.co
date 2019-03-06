<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/nako_logo.png">
    <HelloWorld msg="B l o c k E x p l o r e . c o"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
