<template>
    <div>
    <h1>welcomto form {{title}}</h1>
    <input type ="text" v-model="input1">
      <button type="button" @click="getdata"> Get</button>
            <button type="button" @click="setdata"> Set</button>
    <select class="form-control" v-model="region" @change="changeRegion">
      <option :key="i" :value="data.v" v-for="(data,i) in options">{{data.t}}</option>
    </select>
    
     <table class="table table-bordered" v-show="tableShow">
      <tr :key="i" v-for="(d,i) in options">
        <td>{{d.v}}</td>
        <td>{{d.t}}</td>
      </tr>
    </table>

    </div>

</template>

<script>
export default{
data (){
    return{
      title : "윤효근",  
    title2 : "짱", 
    input1:"asd", 
options: [
        { v: "S", t: "Seoul" },
        { v: "J", t: "Jeju" },
        { v: "B", t: "Busan" },
      ],
      region :"J",
      tableShow:true,


    };
    
},
watch:{
input1(){
    console.log(this.input1);
}
},
methods:{
    getdata(){
        alert(this.input1);
    },
    setdata(){
        this.input1="12345";
    },
    changeRegion(){
        alert(this.region)
    }
},
beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
     console.log("beforeUpdate");
  },
  updated() {
     console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("beforeDestroy");
  },
};
</script>