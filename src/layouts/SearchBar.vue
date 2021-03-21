<template>
  <section class="searchbar">
    <div class="container">
      <div class="container-inner d-flex justify-content-center">
        <input type="text" placeholder="search word" v-model="$store.state.SearchKey" @input="checkIfInputNotEmpty" />
        <button :disabled="checker" @click="getData" @keyup.enter="getData">Search</button>
      </div>
       <div class="app-container-header">
          <app-container></app-container>
       </div>
      <div class="result">
         <app-spinner v-if="state === 'loading'"></app-spinner>
         <result-component v-if="state === 'loaded'"></result-component>
      </div>
    </div>
  </section>
</template>

<script>
import ResultComponent from "./ResultComponent";
import AppSpinner from '@/global/AppSpinner';
import AppContainer from '@/global/AppContainer'
export default {
  components: {
    ResultComponent,
    AppSpinner,
    AppContainer
  },
  data() {
    return {
      state:'idle',
      checker:true
    };
  },
  methods: {
    getData() {
        this.state = "loading"
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.$store.state.SearchKey}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8e012cd400mshe2fbf4fad589786p1cf34cjsn8b8df35b57ea",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.state = "loaded"
          this.$store.commit("RECIEVE_DATA", json);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    checkIfInputNotEmpty(){
      if(this.$store.state.SearchKey == ''){
        this.checker = true
      }else{
        this.checker = false
      }
    },

    getMethodKeypress(event){
        if (event.which == 13 || event.keyCode == 13) {
        console.log("works")
        return false;
    }
    return true;
    }

  }
};
</script>

<style lang="scss" scoped>
.container-inner {
  position: relative;
  margin-top: 100px;
  input {
    max-width: 600px;
    width: 100%;
    margin-top: 40px;
    border: 1px solid #c63795;
    outline: none;
    padding: 13px;
    border-radius: 30px;
  }
  button {
    position: absolute;
    right: 115px;
    max-width: 200px;
    top: 40px;
    width: 100%;
    padding: 13px;
    border-radius: 30px;
    outline: none;
    background-color: #a7cd37;
    border: 1px solid #a7cd37;
  }
}

.container-inner{
  input{
    font-family: "secondaryfont";
  }
}

@media(max-width:768px){
  .container-inner button{
    right: 44px;
  }
}

@media (max-width:576px){
  .container-inner input{
     padding: 5px 24px;
  }
  .container-inner button{
    right: 1px;
    max-width: 92px;
    top: 40px;
    padding: 5px;
  }
}
</style>