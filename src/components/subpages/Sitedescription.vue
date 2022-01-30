<template>
    <el-descriptions>
        <el-descriptions-item label="站点名称:">{{name}}</el-descriptions-item>
        <el-descriptions-item label="站点编号:">{{id}}</el-descriptions-item>
        <el-descriptions-item label="站点经纬度:">{{address}}</el-descriptions-item>
        <el-descriptions-item label="站点备注:">{{notes}}</el-descriptions-item>
        <el-descriptions-item label="设备群编号:">暂无</el-descriptions-item>
        <el-descriptions-item label="站点预警方案:">
            <el-tag size="small" effect="plain">
                方案标签
            </el-tag>
        </el-descriptions-item>
    </el-descriptions>
</template>

<script>
export default {
    props: {
        name: String,
        id: Number,
        address: String,
        notes: String,
    },

    mounted() {
        
    }
}
</script>