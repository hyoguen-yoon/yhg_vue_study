<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">업로드</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <h4>asd {{ $store.state.name }}</h4>
  <button @click="$store.commit('changename')">버튼</button>
  <h4>asd {{ $store.state.age }}</h4>
  <button @click="$store.commit('changeage', 10)">버튼</button>
  <h4>{{ $store.state.more }}</h4>
  <button @click="$store.dispatch('getData')">더보기버튼</button>

  <Container
    @write="작성한글 = $event"
    :ondatas="ondatas"
    :step="step"
    :dataurl="dataurl"
  />

  <div class="footer" v-if="step == 0">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
    <button @click="more">더보기</button>
  </div>
</template>

<script>
import Container from "./components/Container";
import datas from "./assets/Post.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 3,
      ondatas: datas,
      clickcnt: 0,
      dataurl: "",
      작성한글: "",
      selectfilter: "",
    };
  },
  mounted() {
    this.emitter.on("filter", (a) => {
      this.selectfilter = a;
    });
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickcnt}.json`)
        .then((result) => {
          this.ondatas.push(result.data);
          this.clickcnt++;
        });
    },
    upload(event) {
      var fileData = event.target.files;
      console.log(fileData[0].type);
      let FILEURL = URL.createObjectURL(fileData[0]);
      console.log(FILEURL);
      this.step = 1;
      this.dataurl = FILEURL;
    },
    publish() {
      var mydata = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.dataurl,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.selectfilter,
      };
      this.ondatas.unshift(mydata);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
