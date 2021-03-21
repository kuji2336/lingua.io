<template>
  <div class="definition">
        <div class="wrapper">
          <div class="definition-inner">
            <div class="definition-inner__main">
                  <div class="definition-wrapper" v-for="antonym in resultAntonyms.antonyms" :key="antonym">
                     <p>{{antonym}}</p>
                </div>
            </div>
        </div>
        </div>
        <!-- <div class="error">
            <div class="container img-container">
              <div class="img-inner d-flex justify-content-center p-4">
                <div class="text-error">
                  <h1>Examples not found<span style='font-size:30px;'>&#128542;</span></h1>
                </div>
                <img src="../assets/linguarobot.svg">
              </div>
            </div>
        </div> --> 
    </div>
</template>


<script>
export default {
    data(){
        return{
          resultAntonyms:[],
          test: null
        }
    },
  methods: {
    getAntonyms() {
      fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.$store.state.SearchKey}/antonyms`, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8e012cd400mshe2fbf4fad589786p1cf34cjsn8b8df35b57ea",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
           this.resultAntonyms = data
        })
        .catch((err) => {
          console.error(err);
        });
    },

    /* checklength(){
       if(this.resultAntonyms.antonyms.length >= 1){
           console.log('exist')
       }else{
           console.log('not exist')
       }
    } */
  },
  created(){
      this.getAntonyms()
  },
};
</script>

<style  lang="scss" scoped>
  .definition-wrapper{
    font-size: 23px;
    font-family: 'secondaryfont';
    color: #ffffff;
    padding: 18px;
    background-color: #30B8E1;
    margin: 12px;
    border-radius: 30px;
  }

  .img-inner{
    position: relative;
  }

  .text-error{
    position: absolute;
    top: 5%;
    h1{
    color: #dc3545;
    font-family: 'secondaryfont';
    background-color: #ffffff;
    padding: 8px
    }
  }

  @media (max-width: 576px) {
    .definition-wrapper{
    font-size: 11px;
    font-family: 'secondaryfont';
    color: #ffffff;
    padding: 13px;
    background-color: #30B8E1;
    margin: 10px;
    border-radius: 15px;
}
}
</style>