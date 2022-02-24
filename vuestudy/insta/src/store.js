import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name:'yoon',
      age : 10,
      likes : 30,
      likesbol : false ,
      more :{}
    }
  },
  mutations :{
      setmore(state,data){
        state.more=data;
      },
    changelike(state){
         if(state.likesbol==false){
            state.likes++;
            state.likesbol=true;
         }
         else{
            state.likes--;
            state.likesbol=false;
         }

      },
      changename(state){
          state.name='tes'
      },
      changeage(state,data){
        state.age+=data
      }
  },
  actions:{
    getData(context){
        axios.get(`https://codingapple1.github.io/vue/more0.json`).then( result =>{
            context.commit('setmore',result.data)
          })
    }
  }
})

export default store