<template>
  <div class="profile">
    <h2>我是Profile</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style>
.profile{
  background-color: rgb(55, 110, 173);
}
</style>