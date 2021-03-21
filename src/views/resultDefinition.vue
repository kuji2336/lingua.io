<template>
    <div class="definition">
        <div class="definition-inner">
            <div class="definition-inner__main" v-for="(definitons,index) in mainData.results" :key="index">
                <div class="definition-wrapper">
                    <p>-{{definitons.definition}}</p>
                </div>
                <div class="synonims-bar">
                    <div class="see-synonyms">
                        <div class="see-synonyms-inner d-flex">
                            <p @click="visiableSynonym(index)" >see synonym</p>
                            <p><i class="fas fa-caret-down"></i></p>
                        </div>
                    </div>
                    <div class="inner-wrapper">
                       <div class="synonyms-bar__inner" v-for="synonym in definitons.synonyms" :key="synonym">
                        <p :id="index" class="noneclass">{{synonym}}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
          mainobj:[],
          activeItem:null
        }
    },
    computed: {
      ...mapGetters(['mainData']),
  },

  methods:{
   visiableSynonym(i){
    var element = document.getElementById(i);
    element.classList.toggle('toggleclass')
   }
  }
}

</script>



<style lang="scss" scoped>
   .active{
       color: red;
   }
   .noneclass{
       display: none;
   }
   .toggleclass{
       display: block !important;
   }
   .definition-inner__main {
    .definition-wrapper{
        p{
         font-size: 23px;
         font-family: 'secondaryfont';
         color: #ffffff;
         padding: 18px;
         background-color: #C63795;
         margin: 12px;
         border-radius: 30px;
        }
    }
}


.synonims-bar{
    padding: 5px;
    margin: 11px;
}

.see-synonyms-inner {
    p{
    font-family: 'primefont';
    color: #000000;
    margin-left: 10px;
    background-color: #a7cd37;
    padding: 2px 5px;
    border-radius: 10px;
    margin-right: -6px;
    cursor: pointer;
    }
}

.synonyms-bar__inner{
   p{
    margin-left: -1px;
    padding: 13px 21px;
    font-family: 'secondaryfont';
    background-color: #C63795;
    margin-top: 20px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 30px; 
   }
}

@media (max-width: 576px) {
  .text-error h1 {
    font-size: 20px;
  }
  img {
    width: 100%;
  }

  .tabnavigation-inner {
    a {
      font-size: 17px;
    }
  }
  .definition-inner__main .definition-wrapper p{
    font-size: 11px;
    padding: 13px;
    margin: 5px;
    border-radius: 15px;
  }

  .see-synonyms-inner p{
    margin-left: -8px;
    font-size: 11px;
    padding: 3px 4px;
    border-radius: 10px;
    margin-right: 14px;
}
}

</style>