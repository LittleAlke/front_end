<template>
  <div class="user">
    <h2>我是用户界面</h2>
    <p>我是用户信息哈哈哈哈</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>
.user{
  background-color: brown;
}
</style>