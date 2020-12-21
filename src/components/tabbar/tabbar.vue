<!--  -->
<template>
  <div id="tab-bar">
    <!-- 如果不加插槽 被包裹容器里面的内容会被父容器覆盖 加了则不会被覆盖 -->
    <slot></slot>
     
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
}
</style>
