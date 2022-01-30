<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="监测点管理" name="first">
            <monitorsites></monitorsites>
        </el-tab-pane>
        <el-tab-pane label="云链管理" name="second">云链管理</el-tab-pane>
    </el-tabs>
</template>

<script>
import Monitorsites from '@/components/subpages/Monitorsites.vue'
import Sitedescription from '@/components/subpages/Sitedescription.vue'

export default {

    components: {
        Monitorsites,
        Sitedescription
    },
    setup() {
        
    },
    data() {
        return {
            activeName: 'first',
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>