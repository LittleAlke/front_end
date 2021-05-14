<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>我是首页666</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      message: "你好啊",
      path: '/home/news'
    };
  },
  // created(){
  //   document.title = '首页'
  // },
  components: {
    // HelloWorld
  },
  // 只有该组件使用了keep-alive时才有效
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>

<style>
.home {
  background-color: rgb(188, 146, 228);
}
</style>
