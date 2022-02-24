<template>
<div  @click="fire($event)" :class="`filter-item ${filtername}`" :style="`background-Image : url( ${dataurl})`">
<slot name="tes1"></slot>
<slot name="tes2"></slot>
<slot  :msg="msg"></slot>

 
    </div> 
</template>

<script>
export default {
    data(){
        return{
            msg : 'yhg',
 
        }
    },
props : {
    dataurl : String
    ,filtername :String 
},
methods: {

    fire: function(event) {
        const targetId = event.currentTarget.className;
        var afterStr = targetId.split(' ');
 
        this.emitter.emit('filter',afterStr[1])
    }
},
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>