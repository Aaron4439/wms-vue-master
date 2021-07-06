<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical" 
             default-active="1"
             background-color="#7171C6"
             text-color="#fff" 
             active-text-color="#FEC171" 
             :collapse="isCollapse">
         <menu-item :menus="menus"></menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MenuItem from './modules/MenuItem'
  export default {
    name: 'left-menus',
    components: { MenuItem },
    computed: {
      ...mapGetters([
        'menus',
        'barEffect'
      ]),
      isCollapse() {
        return !this.barEffect.open
      }
    }
  }
</script>

<style scoped>

</style>
