<template>
    <div> 
        <img :src="a.image"/>
        <h4  @click="  func()"  >{{a.title}}</h4>
        <p>{{a.price}}원</p>
        
    </div>
</template>

<script>
export default {
name : 'Card',
props :{
    a : Object,
},
methods: {
    func(){
        this.$emit( 'openModal',this.a.id)
    }
},
}
</script>

<style>

</style>