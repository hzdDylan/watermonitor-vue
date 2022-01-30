<template>
    <el-table
        :data="$store.state.monitoringSite"
        style="width:100%"
        :row-class-name="tableRowClassName"
        height="550"
    >
        
        <el-table-column prop="name" label="Name" width="90" />
        <el-table-column prop="id" label="Id" width="90" />
        <el-table-column prop="address" label="Address" width="270" />

        <el-table-column label="Operations" >
            <template #default="scope">
                <el-button size="small" type="primary" @click="handleDetail(scope.row)"
                    >Detail</el-button>
                <el-button size="small" @click="handleEdit(scope.row)"
                    >Edit</el-button>
                <el-button size="mini" type="info" @click="handleDelete(scope.$index, tableData)"
                    >More</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore();
        const tabelData = store.state.monitoringSite;
        tabelData.forEach((item) => {
            item.address = `经纬度(${item.latitude}°,${item.longitude}°)`;
        })


        return {
            tabelData
        }
    },
    data() {
        return {

        }
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
                return "warning-row"
            } else if (rowIndex === 3) {
                return "error-row"
            }
            return ""
        },

        handleDetail(row) {
            console.log(row);
            this.$router.push({name:'Statis',params:{id:row.id,name:row.name}})
        },
        handleEdit(row){
            console.log(row);
            this.$router.push({name:'Warnset',params:{id:row.id,name:row.name}})
        },
        handleDelete(index, rows) {
            // rows.splice(index, 1);
            console.log("更多操作正在制作中")
        }
    },
}
</script>

<style>
.el-table .warning-row {
    --el-table-tr-background-color: var(--el-color-warning-lighter);
}
.el-table .error-row {
    --el-table-tr-background-color: var(--el-color-error-lighter);
}
</style>