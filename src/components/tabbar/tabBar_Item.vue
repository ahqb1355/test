<!--  -->
<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
    <!-- 这个要在插槽外面定义一层标签，否则另外一边传过来的数据会覆盖插槽 写在插槽里的属性会被覆盖
    而写在外面则不受影响 -->

    <!-- 只有当v-if 为false时  v-else 里面的内容才会出现 -->
    <!-- 插槽的位置不能乱写 要与匹配的数据对应，顺序不能写乱 -->
  </div>
</template>

<script>
export default {
  //  props:{
  //    path:String
  //    //接受传过来的路径，点谁传谁的路径 传 path后面的值 是一个常量 直接给
  // },
  data() {
    return {
      isActive:true
    };
  },
  methods: {
      itemClick(){
        this.router.push("/location").catch(err=>{
          console.log(err);
        })
      //  this.$router.replace(this.path)
      }
  }



};
</script>
<style lang="less" scoped>
@import "../../assets/icon/font/iconfont.css";
.tab-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  box-sizing: border-box;
  padding-top: 3px;
  img {
    width: 20px;
  }
  p {
    margin-top: 7px;
  }

  .active {
    color: red;
  }
}
</style>
