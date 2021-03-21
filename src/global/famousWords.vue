<template>
  <div class="container">
    <div class="daily-word d-flex justify-content-center">
      <div class="daily-word__inner">
        <div class="courses-container">
          <div class="course">
            <div class="course-preview">
              <h6>Daily Word</h6>
              <h1 class="text-center mt-5">{{ FilterfmaousWords.word }}</h1>
            </div>
            <div class="course-info">
              <h6>definition</h6>
              <swiper
                :slides-per-view="1"
                :space-between="20"
                :autoplay="{ delay: 3000,  disableOnInteraction: true}"
                >
                <swiper-slide v-for="test in FilterfmaousWords.results" :key="test">
                    <div class="definition-box">
                        <div class="definition-box__inner">
                            <p>{{test.definition}}</p>
                        </div>
                    </div>
                </swiper-slide>
              </swiper>
              <button class="btn" @click="getRandomWord">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {  A11y, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper.scss";
SwiperCore.use([A11y,Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapGetters(["FilterfmaousWords"]),
  },
  methods: {
    getRandomWord(){
       this.$store.dispatch("famousWords");
    }
  },

  created() {
    /* call action */
    this.$store.dispatch("famousWords");
  },
};
</script>


<style scoped>


.daily-word {
  margin-top: 50px;
  margin-bottom: 50px;
}
.course {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px;
  overflow: hidden;
  max-width: 900px;
    width: 100%;
}

.course h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.course h2 {
  letter-spacing: 1px;
  margin: 10px 0;
  font-size: 16px;
}

.course-preview {
  background-color:#c63795;
  color: #fff;
  padding: 30px;
  max-width: 300px;
  width: 100%;
}

.course-info {
  padding: 30px;
  position: relative;
  width: 100%;
}

.progress {
  background-color: #ddd;
  border-radius: 3px;
  height: 5px;
  width: 100%;
}

.progress::after {
  border-radius: 3px;
  background-color: #2a265f;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 66%;
}

.progress-text {
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
}

.btn {
  background-color:#c63795;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  letter-spacing: 1px;
  float: right;
  margin-top: 30px;
}

.definition-box{
    width: 100%;
    background-color: #c63795;
    background-color: #c63795;
    padding: 17px;
    margin-top: 13px;
    border-radius: 18px;
    padding-bottom: 30px;
}

.swiper-container{
max-width: 330px;
width: 100%;
margin: 0 auto;  
}

.definition-box__inner p {
    color: rgb(255, 255, 255);
    font-family: 'secondaryfont';
    text-align: center;
    margin-top: 20px;
}


@media(max-width:576px){
  .course{
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
}

.course-preview{
    padding: 11px;
}
.course-info{
    padding: 11px;
}

}
</style>