<template>
  <div class="container" v-for="news in fetchAllArticles" :key="news.newsId">
      <div v-for="single in news.news" :key="single">
    <h1 class="text-center">{{single.title}}</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="card" style="width: 100%" >
           <img  :src="single.imgUrl" class="card-img-top"  alt="Card image cap" /> 
          <div class="card-body">
            <h5 class="card-title">{{single.name}}</h5>
            <!-- <router-link :to="{name:'innerblog'}"></router-link> -->
          </div>

        </div>
      </div>
    </div>
      </div>
      <button @click="addToFav(news.newsId)">add to favorites</button>
      <router-link :to="{name:'innerblog', params:{id:news.newsId}}">go to details</router-link>
  </div>

</template>


<script>
import { db } from "@/db/firebase";
export default {
  data() {
    return {
      fetchAllArticles: [],
    };
  },
  methods: {
    async getData() {
      const snapshot = await db.collection("posts").get();
      return snapshot.docs.map((doc) =>
        this.fetchAllArticles.push({news:doc.data().News, newsId:doc.id}),
      );
    }, 

    getData2(){
       db.collection("posts").get().then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log(doc.id);
          });
       })
    },

    addToFav(id){
       this.$store.state.favorite.push(id)
    }
  },


  created() {
    this.getData();
    this.getData2();
    console.log(this.fetchAllArticles)
  },
};
</script>

