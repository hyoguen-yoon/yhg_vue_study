<template>
  <div class="black-bg" v-if="modalstatus==1">
  <div class="white-bg" >
      <img :src= "onrooms[userclick].image" style="width:100%"/>
    <h4>{{onrooms[userclick].title}}</h4>
    <p>{{onrooms[userclick].content}}</p>
    <!-- <input @input="month=$event.target.value"> -->
    <input v-model="month">
    <p> {{month}}개월 선택함 : {{month*onrooms[userclick].price}}원</p>
   <p> <button  @click="  $emit( 'closeModal','0')">닫기</button> </p>  
 
  </div>
</div>
</template>

<script>
export default {
name : 'Modal',
data(){
  return{
    month :1,
  }
},

beforeUpdate(){
if(this.month=='2'){
  alert("123213")
}
},
watch:{
month(a){
 if (isNaN(a) == true){
        alert('문자입력하지마라');
        this.month = 1;
      }else{
          this.month = a;
      }
}
},
props : {
    onrooms : Array,
    userclick : Number,
    modalstatus : Number,
}
}
</script>

<style>

</style>