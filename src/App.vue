<template>
  <div id="app">
    <tabBar>
      <!-- 这里的path 没写成:path 因为这里的/home传递的是常量 
      而不是像正常写的接受一个父组件变量，
      这里相当于直接把等号后面的值传给子组件
       -->
      <tabItem >
        <img slot="item-icon" src="./assets/img/tabBar/home.svg" />
        <img slot="item-active" src="./assets/img/tabBar/home_active.svg" />
        <p slot="item-text">
          首页
        </p>
      </tabItem>
      <tabItem >
        <img slot="item-icon" src="./assets/img/tabBar/category.svg" />
        <img slot="item-active" src="./assets/img/tabBar/category_active.svg" />
        <p slot="item-text">
          分类
        </p>
      </tabItem>
      <tabItem >
        <img slot="item-icon" src="./assets/img/tabBar/shopcart.svg" />
        <img slot="item-active" src="./assets/img/tabBar/shopcart_active.svg" />
        <p slot="item-text">
          购物车
        </p>
      </tabItem>
      <tabItem>
        <img slot="item-icon" src="./assets/img/tabBar/profile.svg" />
        <img slot="item-active" src="./assets/img/tabBar/profile_active.svg" />
        <p slot="item-text">
          我的
        </p>
      </tabItem>
    </tabBar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabBar from "./components/tabbar/tabbar";
import tabItem from "./components/tabbar/tabBar_Item";

export default {
  data() {
    return {
      current: ""
    };
  },

  components: {
    tabBar,
    tabItem
  }
};
</script>

<style lang="less">
@import "./assets/css/normalize.css";

.active {
  color: red;
}
</style>
