<template>

  <div class="hello container">
    <h1>{{ msg }} </h1>
    
    <br>
    <br>
    <table class="table table-striped table-border">
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Height</th>
          <th scope="col">Age</th>
          <th scope="col">Transactions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="chain in chains">
          <th scope="">{{chain}}</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </table>
    <br/><br/><br/><br/>
    <div>Powered by <a href="https://github.com/CoinVault/Nako">Nako</a></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import chainsJson from '../chains.json';

@Component
export default class HelloWorld extends Vue {

  @Prop() private msg!: string;

    chains = [chainsJson.chains[0].name, 'another chain'];

    mounted(){

     let url = 'http://' + chainsJson.chains[0].name + '.blockexplore.co/api/query/block/latest';
     fetch(url, { mode: 'cors' })
        .then(result => result.json())
        .then(block => console.log(block));

    
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
