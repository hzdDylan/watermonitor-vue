<template>
    <div class="table-monitor">
        <el-row gutter="10" justify="start">
            <el-col :span="6">
                <el-input v-model="searchkey" placeholder="快速搜索"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" circle @click="tableDataFilterHandle">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </el-button>
            </el-col>
            

            <el-col :span="4" :offset="12">
                <el-button type="primary" @click="dialogFormVisible=true">
                     添加 
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tianjia"></use>
                    </svg>
                </el-button>
            </el-col>
        </el-row>
        

        <br>

        <el-table 
            :data="tableDataFilterHandle"
            style="width: 100%"
            border
            >
            <el-table-column type="expand">
                <template #default="props">
                    <Sitedescription
                        :name=props.row.name
                        :id=props.row.id
                        :address=props.row.address
                        :notes=props.row.notes
                        ></Sitedescription>
                </template>
            </el-table-column>
            <el-table-column label="监测点" prop="name" />
            <el-table-column label="添加日期" prop="time" />
            <el-table-column label="位置" prop="location" />
        </el-table>

        <el-dialog v-model="dialogFormVisible" title="监测点添加">
            <dialogform></dialogform>
            
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible=false">关闭</el-button>
                    <el-button type="primary" @click="dialogFormVisibl=false">添加</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import Sitedescription from './Sitedescription.vue'
import Dialogform from './Dialogform.vue'

import { defineComponent } from 'vue'
import {useStore} from 'vuex'

export default({
    components: {
        Sitedescription,
        Dialogform
    },
    setup() {
        const $store = useStore();
        const tableData = $store.state.monitoringSite;
        tableData.forEach((item) => {
            item.address = `经纬度(${item.latitude}°,${item.longitude}°)`;
            item.notes = "";
            item.location = "哈尔滨";
        })

        return {
            tableData
        }
    },
    data() {
        return {
            searchkey: "",
            dialogFormVisible: false
        }
    },
    computed: {
        tableDataFilterHandle() {
            if(this.searchkey.trim().length === 0) {
                return this.tableData
            }
            else {
                const tableData = this.tableData.filter((data) => {
                    const datas = `${data.name},${data.id},${data.location}`;
                    
                    return datas.toLowerCase().includes(this.searchkey.toLowerCase())
                })
                return tableData
            }
        }
    },
    methods: {
        tableAddHandle() {
            console.log("tableAddHandle")
        }
    }
})
</script>
