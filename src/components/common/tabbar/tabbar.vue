<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  components: {}
};
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -3px 2px rgba(100, 100, 100, 0.1);
}
.tabbarItem {
  flex: 1;
  text-align: center;
}
</style>
