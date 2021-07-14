<template>
  <el-menu class="navbar" mode="horizontal">
    <na-svg class="svg-container" :toggleClick="toggleSideBar" :isActive="barEffect.open"></na-svg>
    <!-- <el-tag type="success" class="el-tagstyle">标签二</el-tag> -->
  </el-menu>
</template>

<script>
    import NaSvg from './modules/naSvg'
    import { mapGetters } from 'vuex'
export default {
      components: { NaSvg },
      name: 'navbar',
      computed: {
        ...mapGetters(['barEffect'])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleBarEffect')
        }
      }
    }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
.navbar{
  height: 30px;
  line-height: 40px;
  background-color: #5c5ead;
  .svg-container {
    line-height: 40px;
    height: 40px;
    float: left;
    padding: 0 10px;
  }
}
.el-tagstyle {
  float: right;
  margin-top: 2px;
  margin-right: 6px;
}
</style>
