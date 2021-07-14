<template>
  <div class="home-wrapper" :class="classObj">
    <div class="main-top">
      <div class="logoblock">
        <el-image
          style="width: 90px; height: 40px; margin-left: 10px; margin-top: 1px"
          :src="require('@/assets/LOGO_CT.svg')"
          fit="cover"
        ></el-image>
      </div>
      <div class="userinfo">
        <el-avatar 
          shape="square" :size="small" 
          :src="require('@/assets/User.png')" 
          style="float: right; border-radius: 0px"
        ></el-avatar>
      </div>
      <div class="infoshow">
        Inventory
      </div>
    </div>
    <left-menus class="menus-container"></left-menus>
    <div class="main-container">
      <navbar></navbar>
      <main-container></main-container>
    </div>
    <LoginBox></LoginBox>
  </div>
</template>

<script>
import LeftMenus from '../components/menus/LeftMenus'
import Navbar from '../components/navbar/index'
import MainContainer from './mainContainer/index'
import LoginBox from '../components/LoginBox.vue'

export default {
  components: {
    MainContainer,
    Navbar,
    LeftMenus,
    LoginBox
  },
  name: 'home',
  computed: {
    barEffect() {
      return this.$store.state.app.barEffect
    },
    classObj() {
      return {
        hideSidebar: !this.barEffect.open,
        withoutAnimation: this.barEffect.withoutAnimation
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../style/mixin.scss";
.home-wrapper {
  @include clearfix;
  position: absolute;
  height: 100%;
  width: 100%;
}
.main-top {
  width: 100%;
  height: 40px;
  margin: 0 auto;
}
.logoblock {
  width: 110px;
  height: 100%;
  float: left;
}
.infoshow {
  color: #006f75;
  font-size: large;
  margin: 0 110px;
  height: 100%;
  background-color: #f1f1f1;
  border-left: 1px solid rgb(194, 194, 194);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.userinfo {
  width: 160px;
  height: 100%;
  float: right;
  background-color: #f1f1f1;
  border-left: 1px solid rgb(194, 194, 194);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
