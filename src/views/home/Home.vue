<template>
  <div>
    <NavBar>
      <p slot="center">SHOP</p>
    </NavBar>
    <h2>首页</h2>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.dKeywords = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped></style>
