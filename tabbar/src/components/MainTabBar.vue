<template>
  <TabBar>
    <TabBarItem path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/catalog.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/catalog_active.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/me">
      <img slot="item-icon" src="@/assets/img/tabbar/me.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/me_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>