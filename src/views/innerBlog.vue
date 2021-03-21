<template>
     <div class="row" v-for="single in  fetched.News" :key="single">
      <div class="col-md-12">
        <div class="card" style="width: 100%" >
           <img :src="single.imgUrl" class="card-img-top"  alt="Card image cap" /> 
          <div class="card-body">
            <h5 class="card-title">{{single.name}}</h5>
            <p>{{single.title}}</p>
          </div>

        </div>
      </div>
    </div>
</template>




<script>
import { db } from "@/db/firebase";
export default {
    data(){
      return{
          fetched:[]
      }
    },
  methods: {
    getsingle() {
      let ref = db.collection("posts").doc(this.$route.params.id);
      ref.get().then((snapshot) => {
        //DocSnapshot
        if (snapshot.exists) {
          this.fetched = snapshot.data()
        } else {
          // snapshot.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    },
  },

  created(){
      this.getsingle()
  }
};
</script>