<template>
    <div class="searched-world">
        <div class="searched-inner d-flex justify-content-center">
            <p v-if="mainData.word != null">Results for-</p>
            <p v-else>Use it to find definitions for more than 150,000 words<br>You can find synonyms, antonyms, And Much, Much More <span style='font-size:50px;'>&#128218;</span></p>
            <p>{{mainData.word}}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex' 
export default {
     computed: {
      ...mapGetters(['mainData'])
  },
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