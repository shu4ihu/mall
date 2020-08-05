<template>
  <div id="tabbarItem" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return !(this.$route.path.indexOf(this.path) == -1);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
#tabbarItem {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 15px;
}
img {
  width: 24px;
  height: 24px;
}
</style>
