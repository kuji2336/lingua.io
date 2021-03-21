<template>
    <div class="searched-world">
        <div class="searched-inner d-flex justify-content-center">
            <p>Use it to find definitions for more than 150,000 words<br>You can find synonyms, antonyms, And Much, Much More <span style='font-size:50px;'>&#128218;</span></p>
        </div>
        <div class="wrapper">
           <h3 @click="moveTo">try it now</h3>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex' 
export default {
     computed: {
      ...mapGetters(['mainData'])
  },

  methods:{
      moveTo(){
          this.$router.push("/searchword")
      }
  }
}
</script>
<style lang="scss" scoped>
.searched-world{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    }
    .searched-inner{
        p{
         font-family: 'primefont';
         font-size: 40px;
        }
    }

    .wrapper{
        h3{
          max-width: 150px;
          width: 100%;
          margin: 0 auto;
          margin-top: 40px;
          font-family: 'primefont';
          background-color: blueviolet;
          color: #ffffff;
          border-radius: 30px;
          padding: 5px;
          cursor: pointer;
        }
    }
    @media(max-width:768px){
    }

@media (max-width:576px){
 .searched-inner{
     p{
         font-size: 15px;
         span{
             font-size: 17px !important;
         }
     }
 }
}
</style>