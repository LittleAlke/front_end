<template>
  <div id="app">
    <h2>{{ $store.state.a.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>分数大于88{{ $store.getters.more88score}}</h2>
    <h2>分数大于88的人数{{ $store.getters.more88scoreLength}}</h2>
    <h2>分数大于指定数字）{{ $store.getters.moreScore(99) }}</h2>
    <h2>{{$store.state.me}}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addScore(199,200)">添加分数</button>
    <button @click="addMessage">添加我的信息</button>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {addMessage} from "./store/mutations-type";

export default {
  name: 'App',
  data(){
    return{
      message: '你好世界',
      counter: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('addCount',count)
    },
    addScore(s1,s2){
      this.$store.commit('addScore',{s1: s1,s2: s2})
    },
    addMessage(state) {
      // this.$store.commit(addMessage)
      this.$store
          .dispatch('aUpdate','我是携带的信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res)
          })
    }
  }
}
</script>

<style>

</style>
