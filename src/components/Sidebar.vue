<!--
<template>
  <aside class="sidebar">
    <el-row class="tac">
        <el-col :span="12">
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><Location /></el-icon>
                  <span>系统首页</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-2">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title><span>item four</span></template>
                  <el-menu-item index="1-4-1">item fourone</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>Navigator Two</template>
              </el-menu-item>
              <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
              </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
  </aside>
</template>
-->
<template>
  <el-aside class="sidebar">
    <el-row class="tac">
        <el-col :span="12">
            <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical"
              :default-active="onRoutes"
              :collapse="$store.state.collapse"
              text-color="#fff"
              unique-opened
              router
            >
              <template v-for="item in $store.state.navItem">
                <template v-if="item.subs">
                  <el-sub-menu :index="item.index" :key="item.index">
                    <template #title>
                      <i :class="item.icon"></i>
                      <span>{{item.title}}</span>
                    </template>
                    <template v-for="subItem in item.subs">
                      <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                        <template #title>{{ subItem.title }}</template>
                        <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                          {{ threeItem.title }}
                        </el-menu-item>
                      </el-sub-menu>
                      <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                      </el-menu-item>
                    </template>
                  </el-sub-menu>
                </template>
                <template v-else>
                  <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <template #title>{{item.title}}</template>
                  </el-menu-item>
                </template>
              </template>
            </el-menu>
        </el-col>
    </el-row>
  </el-aside>
</template>

<script scoped>
import {computed, watch} from "vue"
import {useRoute} from "vue-router"

export default({
  setup() {
    const route = useRoute();
    const onRoutes = computed(() => {
      console.log(route.path);
      return route.path;
    });

    return {
      onRoutes
    }
  }
})
</script>

<style>
.el-aside {
  --el-aside-width: 250px !important;
}

.sidebar {
  /* display: block; */
  /* position: absolute; */
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

/* .sidebar>ul {
  height: 100%;
} */

.el-menu-vertical {
  width: 250px;
  height: 100vh;
}
</style>