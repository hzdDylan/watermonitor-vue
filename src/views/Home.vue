<template>
  <el-container>
    <side-bar/>
    <el-container>
      <el-header>
        <Headercontain>
        </Headercontain>
      </el-header>
      <el-main>
        <router-view v-slot="{Component}">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer>
        <footer-contain>Footer
        </footer-contain>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/Sidebar.vue'
import FooterContain from '@/components/Footercontain.vue'
import Headercontain from '@/components/Headercontain.vue'

export default {
  name: 'Home',
  components: {
    SideBar,
    FooterContain,
    Headercontain
  }
}
</script>

<style>
* {
  margin: 0;
}

.el-header {
  /* display: flex;/' */
  color: white;
  background: #409EFF;
  align-items: center;
  /* text-align: center; */
  justify-content: center;
  /* flex-direction: row;  */
}

.el-footer {
  /* display: flex;/' */
  background: #C0C4CC;
  align-items: center;
  /* text-align: center; */
  justify-content: center;
  /* flex-direction: row;  */
}
</style>
