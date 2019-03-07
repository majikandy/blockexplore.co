<template>

  <div class="hello container" >

    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        
        <br>
        <br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"><img style="border: 1px #eee solid; border-radius:5px; padding:1px; object-fit: cover; object-position: 0% 0; width: 30px; height: 30px;" src="../assets/nako_logo.png"/></th>
              <th scope="col">Currency</th>
              <th scope="col">Supply</th>
              <th scope="col">Consensus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="chain in chains" v-bind:key="chain.name" class='clickable-row' :data-href="chain.hostedUrl" v-on:click="gotoChain(chain)">
              <th scope="col"><img style="border: 1px #ccc solid; border-radius:5px; padding:2px; object-fit: cover; object-position: 0% 0px; width: 30px; height: 30px; margin-top:-4px" :src="chain.iconUrl"/></th>
              <th>{{chain.name}}</th>
              <td>{{chain.totalSupply}}</td>
              <td>{{chain.consensus}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br/><br/><br/><br/>
    <div>Powered by <a href="https://github.com/CoinVault/Nako">Nako</a></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import chainsJson from '../chains.json';
import router from '../router';


@Component
export default class AllChains extends Vue {

  @Prop() private msg!: string;

    private chains = chainsJson.chains;

    private mounted() {
    //  const url = 'http://' + chainsJson.chains[0].name + '.blockexplore.co/api/query/block/latest';
    //  fetch(url, { mode: 'cors' })
    //     .then((result) => result.json())
    //     .then(block => console.log(block));
   }

   private gotoChain(chain: any) {
     if (chain.hostedUrl) {
      location.href = chain.hostedUrl;
     } else {
       alert(chain.name + ' explorer coming soon...');
     }
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
