<template>
  <register-modal></register-modal>
  <login-modal></login-modal>
  <div class="navbar-costum-color">
    <div class="container">
      <div class="row">
        <div class="col-md-2" @click="moveToMainPage">
          <a class="navbar-brand" href="#">
             Lingua.io
          </a>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div
            class="main-navigation-links d-flex justify-content-around align-items-center"
          >
            <li>
              <router-link to="/">Home</router-link><span><i class="fas fa-home"></i></span>
            </li>
            <li>
              <router-link to="/searchword">SearchWord</router-link><span></span>
            </li>
        <!--     <li>
              <router-link to="/blogNews">BlogNews</router-link>
            </li> -->
      <!--       <li>
                <router-link to="/writeblog">Write Blog</router-link><span></span>
            </li> -->
          <!--   <li>
                <router-link to="/favorites">favorites</router-link><span></span>
            </li> -->
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <div
            class="main-right-section d-flex justify-content-between align-items-center"
            v-if="!userIsLogined"
          >
            <div class="login d-flex align-items-center">
              <p data-toggle="modal" data-target="#exampleModalCenterLogin">Login</p>
              <span><i class="fas fa-sign-in-alt"></i></span>
            </div>
            <div class="Register d-flex align-items-center">
              <p data-toggle="modal" data-target="#exampleModalCenter">Register</p>
              <span><i class="fas fa-user-plus"></i></span>
            </div>
          </div>
          <div
            class="main-right-section d-flex justify-content-between align-items-center"
            style="max-width: 268px"
            v-else
          >
            <div class="login d-flex align-items-center">
              <p>{{ LoginedUserName }}</p>
              <span><i class="fas fa-user"></i></span>
            </div>
            <div class="Register d-flex align-items-center">
              <p>Favorite words</p>
              <span><i class="fas fa-book"></i></span>
            </div>
            <div class="Register d-flex align-items-center">
              <p @click.prevent="signOut">Log Out</p>
              <span><i class="fas fa-sign-in-alt"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userIsLogined", "LoginedUserName"]),
  },
    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      moveToMainPage(){
        this.$router.push("/")
      }
    },



  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.$store.state.userIsLogined = true;
        this.$store.state.LoginedUserName = user.displayName;
      }
    });
  },
};
</script>


<style lang="scss" scoped >
.navbar-costum-color {
  background-color: #f8f9fa;
  width: 100%;
}
.main-right-section {
  max-width: 180px;
  width: 100%;
}

.Register,
.login {
  cursor: pointer;
  font-family: primefont;
  color: #c63795;
  span {
    color: #c63795;
    i {
      margin-left: 8px;
    }
  }
}

.main-navigation-links {
  max-width: 200px;
  width: 100%;
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: #30b8e1;
      font-family: primefont;
    }
    span {
      margin-left: 5px;
      color: #30b8e1;
    }
  }
}

@media (max-width: 576px) {
  .navbar-brand {
    display: none;
  }
  .navbar-costum-color {
    padding: 15px 11px;
  }
  .main-navigation-links {
    margin-bottom: 10px;
  }
  .main-navigation-links li {
    font-size: 12px;
  }
}
</style>