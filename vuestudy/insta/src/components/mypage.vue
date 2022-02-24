<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
<input placeholder="?" @input="search($event.target.value)" />
 <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="`background-image:url(${a.image})`"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import { ref, toRefs} from 'vue';
import axios from 'axios'
import { onMounted} from 'vue'
export default {
  props:{
      one:Number,
  },
setup(props){
    let follower = ref([]);
  //  let test = reactive({name:'kim'})
   let {one}=toRefs(props);
  console.log(one.value) ;
 
    let followerOriginal = ref([]);


    onMounted(()=>{
          axios.get('/follower.json').then((a)=>{
      follower.value = a.data
 
        followerOriginal.value = [...a.data];
    })
    
    })
 function search(data){
let newFollower = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(data) != -1
      });
      follower.value = [...newFollower]
 }
    return { follower ,search}
}
}
</script>

<style>

</style>