<template>
  <div>
<div v-if="this.step==0" >
  <Post :ondatas="a" v-for="(a,i) in ondatas" :key="i"/>
</div>

<div v-if="this.step==1" >
  <!-- 필터선택페이지 -->
  <div :class ="selectfilter" class="upload-image"  :style="`background-Image : url( ${dataurl})`"></div>
  <div class="filters">

  <filterbox :dataurl="dataurl"  :filtername="a" v-for=" a in filter" :key="a">
  {{a}} 
    <!-- <template v-slot:tes1 ><div>{111}</div></template>
   
   <template v-slot:tes2 >222</template>
-->
    <!-- <template v-slot:default="test" >{{test.msg}}</template> -->
 
  </filterbox>

  </div>
</div>

<div v-if="this.step==2" >
<!-- 글작성페이지 -->
  <div :class ="selectfilter" class="upload-image" :style="`background-Image : url( ${dataurl})`"></div>
  <div class="write">
    <textarea  @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
  </div>

</div>
<div v-if="this.step==3" >
  <mypage :one="1"/>
</div>
</div>
</template>

<script>
import Post from './Post'
import filterbox from './filterbox.vue';
import mypage from './mypage.vue';
export default {
data(){
  return{
  filter :[ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
selectfilter :''
  }
},
  mounted() {
    this.emitter.on('filter',(a)=>{
      this.selectfilter=a;
    })
  
  },
  components: {
   Post,
   filterbox,
   mypage
  },
  props : {
    ondatas : Array,
    step : Number,
    dataurl : String
}
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>