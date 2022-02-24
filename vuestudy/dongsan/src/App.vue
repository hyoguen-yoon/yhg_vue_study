<template>


<div v-if="1==1">
  안녕하세요

</div>
<div v-else-if ="1==3">
  안녕하세요2
</div>
<div v-else>
  안녕하세요3
</div>

  <div class ="menu">
     <a v-for="작명 in menus" :key="작명">{{작명}}</a>
 <!-- <a v-for="(작명,i) in menus" :key="작명">{{i}}</a> -->
  <!-- </div>
   <div v-for="(a,i) in 3" :key="a" >
     <P>{{product[i]}}</P>
    <h4 :style="스타일">xx 원룸</h4>
    <P>{{price[i]}}만원</P>
    <button @click="counts[i]++">허위매물신고</button> <span> 신고수 : {{counts[i]}}</span> -->
  </div> 

<!-- <Discount :이름="오브젝트.name"  :나이="오브젝트.age"/> -->
<Discount :timenum="timenum"  v-if="showdiscount==true" />

<button @click="pricesort">정렬1</button>
<button @click="pricesortup">정렬2</button>
<button @click="sortABC">정렬3</button>
<button @click="sortback">되돌리기</button>


<!-- <div class="start " :class="{end : modalstatus}"> -->
  <transition name="fade">
<modal @closeModal="modalstatus=$event" :onrooms="onrooms" :userclick="userclick" :modalstatus="modalstatus"/>
  </transition>
<!-- 
<div class="black-bg" v-if="modalstatus==1">
  <div class="white-bg" >
      <img :src= "onrooms[userclick].image" style="width:100%"/>
    <h4>{{onrooms[userclick].title}}</h4>
    <p>{{onrooms[userclick].content}}</p>
    <button @click="modalstatus=0">닫기</button>  
 
  </div>
</div> -->

  <Card @openModal="modalstatus=1;userclick=$event" :a="onrooms[num]" v-for="(count,num) in onrooms" :key="count"/>
 
<!-- <div v-for="(a,i) in onrooms" :key="a"> 
  <img :src="a.image"/>
  <h4 @click="modalstatus=1;userclick=i">{{a.title}}</h4>
  <p>{{onrooms[i].price}}원</p>
 <button v-on:click="count++">허위매물신고</button> <span> 신고수 : {{count}}</span> 
  <button v-on:click="increase">허위매물신고</button> <span> 신고수 : {{count}}</span>
</div> -->

</template>

<script>
import data from './assets/post';
import Card from './Card.vue';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
 

export default {
  name: 'App',
  data(){
    return{ //데이터 보관함
    showdiscount : true,
    timenum : 30,
    onroomsoriginal : [...data],
    오브젝트 :{name : 'kim',age : 20},
    modalstatus : 0,
    userclick : 0,
    count : 0,
     counts : [0,0,0],
    스타일 : 'color : blue',
    product : ['역삼동원룸','삼성동원룸','중화원룸'],
    menus : ['Home','products','About'],
    price : [10,20,30],
    onrooms : data,
    }
  },
  mounted(){
    setInterval(()=>{
      this.timenum=this.timenum-1
    }, 1000)
  },
  components: {
    Discount : Discount,
    Modal  : Modal,
    Card,
  },
  methods: {
    increase(){
      this.count += 1;
    },
    pricesort(){
      this.onrooms.sort(function(a,b){
        return a.price - b.price//숫자정렬임
      })
    },
        pricesortup(){
             this.onrooms=[...this.onroomsoriginal];
      this.onrooms.sort(function(a,b){
        return b.price - a.price//숫자정렬임
      })
    },
     sortABC(){
      this.onrooms.sort(function(a,b){
        return a.title.localeCompare(b.title)
      });
    },
    sortback(){
      this.onrooms=[...this.onroomsoriginal];
    }
  },
}

</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;

}

.start{
  opacity: 0;
  transition: all 1s;
}
.end{
opacity: 1;
}

.fade-enter-from { 
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
  }
.fade-enter-to { 
  opacity: 1;
}

.fade-leave-from { 
    opacity: 1;
}
.fade-leave-active {
    transition: all 1s;
  }
.fade-leave-to { 
  opacity: 0;
}
</style>
