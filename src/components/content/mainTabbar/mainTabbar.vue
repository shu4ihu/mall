<template>
  <div id="mainTabbar">
    <tabbar>
      <tabbarItem path="home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/social_github.svg" />
        <img slot="itemIconActive" src="~assets/img/view.svg" />
        <div slot="itemText">首页</div>
      </tabbarItem>
      <tabbarItem path="shopcart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/social_github.svg" />
        <img slot="itemIconActive" src="~assets/img/view.svg" />
        <div slot="itemText">购物车</div>
      </tabbarItem>
      <tabbarItem path="category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/social_github.svg" />
        <img slot="itemIconActive" src="~assets/img/view.svg" />
        <div slot="itemText">分类</div>
      </tabbarItem>
      <tabbarItem path="profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/social_github.svg" />
        <img slot="itemIconActive" src="~assets/img/view.svg" />
        <div slot="itemText">档案</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbarItem";
export default {
  name: "mainTabbar",
  components: {
    tabbar,
    tabbarItem
  }
};
</script>

<style scoped></style>
