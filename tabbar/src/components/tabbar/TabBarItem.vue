<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    未点击的图标-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
<!--    点击的图标-->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    文字设置动态样式计算属性activeStyle-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //要显示的页面路径、活跃字体颜色
  props: {
    path: String,
    activeColor: {
      type: String,
      default:  'rgb(18,150,219)'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    //本来是set和get，set一般不写所以这里是函数
    //计算是否被点击，如果活跃的路由路径中有本路径，则返回true
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path);
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>