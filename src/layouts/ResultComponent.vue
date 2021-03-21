<template>
  <section class="result-container">
    <div class="container">
      <div class="tab-navigation">
        <div class="tabnavigation-inner d-flex" v-if="mainData.word != null">
          <router-link :to="url">See definition</router-link>
          <router-link to="/examples">Examples</router-link>
          <router-link :to="antonymUrl">Antonyms</router-link>
        </div>
      </div>
      <div class="main-container">
        <div v-if="mainData.message">
          <div class="container img-container">
            <div class="img-inner d-flex justify-content-center p-4">
              <div class="text-error">
                <h1>
                  Result not found<span style="font-size: 30px">&#128542;</span>
                </h1>
              </div>
              <img src="../assets/linguarobot.svg" />
            </div>
          </div>
        </div>
        <router-view> </router-view>
      </div>
    </div>
  </section>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      example: null,
    };
  },
  computed: {
    ...mapGetters(["mainData"]),
    /* dynamic url */
    url() {
      return {
        name: "resultdefinition",
        params: { word: this.mainData.word },
        query: { plan: this.$store.state.SearchKey },
      };
    },

    antonymUrl(){
      return{
        name: "antonyms",
        query: { antonymfor:this.mainData.word },        
      }
    }
  },

  methods: {
    /* update url on search next word */
    updateUrl() {
      this.$router.push({
        name: "resultdefinition",
        params: { word: this.mainData.word },
        query: { plan: this.$store.state.SearchKey },
      });
    },

    /* set active class on definition route */
    createurl() {
      this.$router.push({
        name: "resultdefinition",
        params: { word: this.mainData.word },
        query: { plan: this.$store.state.SearchKey },
      });
    },
  },

  updated() {
    this.updateUrl();
  },
  created() {
    this.createurl();
  },
};
</script>

<style lang="scss" scoped>
.detailclass {
  max-width: 600px;
  width: 100%;
}
.tabnavigation-inner {
  a {
    text-decoration: none;
    color: #30b8e1;
    font-family: primefont;
    margin-right: 30px;
    font-size: 30px;
  }
}

.router-link-active {
  color: #c63795 !important;
}

.img-inner {
  position: relative;
}

.text-error {
  position: absolute;
  top: 5%;
  h1 {
    color: #dc3545;
    font-family: "secondaryfont";
    background-color: #ffffff;
    padding: 8px;
  }
}

@media (max-width: 768px) {
  img {
    width: 100%;
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
}
</style>