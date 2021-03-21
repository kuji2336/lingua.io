<template>
  <p>{{ imageData }}</p>
  <div class="container text-center mt-5">
    <div class="header">
      <input type="text" placeholder="title" v-model="title" />
    </div>
    <div class="header">
      <input type="text" placeholder="image" v-model="image" />
    </div>
    <div class="header">
      <input type="text" placeholder="text" v-model="text" />
    </div>
    <div class="upladimage">
      <img :src="imageUrl" height="200px" />
      <button @click="click1">choose photo</button>
      <input
        type="file"
        ref="input1"
        style="display: none"
        @change="previewImage"
        accept="image/*"
      />
    </div>
    <button @click="SendData" v-if="dataExt.isVisible">send first post</button>
    <button @click="update" v-else-if="!dataExt.isVisible">
      create another
    </button>
  </div>
  <div class="container">
    <div class="inner"></div>
  </div>
</template>

<script>
import { db } from "@/db/firebase";
import { storage } from "@/db/firebase";
import firebase from "firebase/app";
export default {
  data() {
    return {
      imageUrl: "",
      title: "",
      image: "",
      img1: "",
      imageData: null,
      text: "",
      rawImg: null,
      dataExt: {
        isVisible: "",
      },
    };
  },
  methods: {
    SendData() {
      db.collection("posts")
        .doc()
        .set({
          News: [
            {
              title: this.title,
              name: firebase.auth().currentUser.displayName,
              dataExt: true,
              imgUrl: this.img1,
            },
          ],
        });
    },

    update() {
      db.collection("posts")
        .doc()
        .update({
          News: firebase.firestore.FieldValue.arrayUnion({
            title: this.title,
            name: firebase.auth().currentUser.displayName,
            dataExt: true,
            imgUrl: this.img1,
          }),
        });
    },

    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

  /* image upload */
    onUpload() {
      this.img1 = null;
      const storageRef = storage
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(`state_changed`,(snapshot) => 
      {this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;},
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },

/* check if user has created post */
    test() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var docRef = db.collection("posts").doc();
          docRef
            .get()
            .then((doc) => {
              if (doc.exists) {
                this.dataExt.isVisible = false;
              } else {
                this.dataExt.isVisible = true;
              }
            })
            .catch(function (error) {
              console.log("Error getting document:", error);
            });
        } else {
          console.log("user is not signed");
        }
      });
    },
  },

  created() {
    this.test();
  },
};
</script>
