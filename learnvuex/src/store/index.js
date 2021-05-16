import Vue from 'vue'
import Vuex from 'vuex'
import {addMessage} from "./mutations-type";

Vue.use(Vuex)

const moduleA = {
  state: {
    counter: 1000,
  }
}


export default new Vuex.Store({
  state: {
    counter: 1000,
    score: [10, 55, 66, 88, 99, 111],
    me: {name: 'plm'}
  },
  //同步时使用这个
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addCount(state, count) {
      state.counter += count
    },
    //只能接受两个，需要传入多个时，需将多个数据封装成一个对象传入
    addScore(state, scores) {
      state.score.push(scores.s1)
      state.score.push(scores.s2)
    },
    [addMessage](state) {
      //响应式添加信息
      Vue.set(state.me, 'age', 21)
      //非响应式添加信息
      // state.me['age'] = 21

      //响应式添加信息
      // Vue.delete(state.me, 'name')
      //非响应式删除信息
      // delete state.me.name
    }
  },
  //异步的方法在这里
  actions: {
    aUpdate(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(addMessage)
          console.log(payload)
          resolve('111')
        }, 1000)
      })
    }
  },
  modules: {
    a: moduleA
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more88score(state) {
      return state.score.filter(s => s >= 88)
    },
    more88scoreLength(state, getters) {
      return getters.more88score.length
    },
    moreScore(state) {
      // return function (score) {
      //   return state.score.filter(s => s>= score)
      // }
      return score => {
        return state.score.filter(s => s >= score)
      }
    }
  }
})
