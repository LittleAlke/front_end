<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="'/user/' + userId">User</router-link> |
      <router-link :to="{ path: '/prof', query: { name: 'Alke' } }"
        >prof</router-link
      >
      <!-- <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button> -->
      <h2>{{ message }}</h2>
    </div>
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "你好啊",
      userId: "Alke",
    };
  },
  methods: {
    homeClick() {
      if (this.$router.app._router.history.current.fullPath != "/home") {
        this.$router.push("/home");
      }
      // console.log(this.$router.app._router.history.current.fullPath);
    },
    aboutClick() {
      if (this.$router.app._router.history.current.fullPath != "/about") {
        this.$router.push("/about");
      }
      // console.log(this.$router.app._router.history.current.fullPath);
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
} */

#app {
  background-color: #bcc1c5;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
