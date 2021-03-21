<template>

    <div class="definition">
        <div class="wrapper" v-show="check">
          <div class="definition-inner">
            <div class="definition-inner__main" v-for="data in mainData.results" :key="data">
                  <div class="definition-wrapper" v-for="example in data.examples" :key="example">
                     <p>"{{example}}"</p>
                </div>
            </div>
        </div>
        </div>
        <div class="error" v-show="!check">
            <div class="container img-container">
              <div class="img-inner d-flex justify-content-center p-4">
                <div class="text-error">
                  <h1>Examples not found<span style='font-size:30px;'>&#128542;</span></h1>
                </div>
                <img src="../assets/linguarobot.svg">
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex' 
export default {

    computed: {
      ...mapGetters(['mainData']),

      checkexamples(){
         return this.mainData.results.map(x=> x.examples)
      },

      check(){
        if(this.checkexamples.length > 2){
          return true
        }else{
          return false
        }
      }
  },
    
}
</script>

<style  lang="scss" scoped>
  .definition-wrapper{
    font-size: 23px;
    font-family: 'secondaryfont';
    color: #ffffff;
    padding: 18px;
    background-color: #a7cd37;
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
   .definition-wrapper {
    font-size: 11px;
    font-family: 'secondaryfont';
    color: #ffffff;
    padding: 13px;
    background-color: #a7cd37;
    margin: 11px;
    border-radius: 10px;
}

.text-error h1 {
    font-size: 20px;
  }
  img {
    width: 100%;
  }
}
</style>