<template>
  <div v-for="(item, index) in senddata" :key="item">
      <h4 @click="$router.push('/detail/'+index)">{{senddata[index].title}}</h4>
      <p>{{senddata[index].date}}</p>

  </div>
</template>

<script>
export default {
name :'list',
props :{
    senddata : Array,
}
}
</script>

<style>

</style>