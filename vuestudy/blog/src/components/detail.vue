<template>

  <h4>상세페이지</h4>
  <h5>{{senddata[$route.params.id].title}}</h5>
  <p>{{senddata[$route.params.id].content}}</p>
  <router-view></router-view>

</template>

<script>
export default {
name :'detail',
props :{
    senddata : Array,
}
}
</script>

<style>

</style>