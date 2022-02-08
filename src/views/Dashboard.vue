<template>
    <div>
        <el-row :gutter="12" :body-style="{padding: '5px'}">
            <el-col :span="8">
                <el-card>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouhuodizhi"></use>
                    </svg>
                    <div class="card-panel-content">
                        <div class="card-panel-text">监测点数量</div>
                        <div class="card-panel-num">12个</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-cunchu"></use>
                    </svg>
                    <div class="card-panel-content">
                        <div class="card-panel-text">已存储数据量</div>
                        <div class="card-panel-num">32MB</div>
                    </div>
                    
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-ziyuan"></use>
                    </svg>
                    <div class="card-panel-content">
                        <div class="card-panel-text">区块节点数</div>
                        <div class="card-panel-num">12块</div>
                    </div>
                    
                </el-card>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter=20>
            <el-col :span="12" v-for="item in desList">
                <el-card  
                    :body-style="{
                        padding: '5px',
                        display: 'flex',
                        'align-items': 'center',
                        'min-height': '6em'
                    }">
                    <img :src=item.src>
                    <div class="desc-content">
                        <h3>{{item.title}}</h3>
                        <span>{{item.desc}}</span>
                    </div>
                </el-card>
                <br>
            </el-col>
        </el-row>
        <el-row :gutter=20>
            <el-col>
                <el-card :body-style="{padding: '5px'}">
                    <h3>污水检测终端流程</h3>
                    <img>这里是流程图
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import Schart from "vue-schart"
import BarChart from "@/components/echarts/Barchart.vue"
import LineChart from "@/components/echarts/Linechart.vue"

export default {
    name: "dashboard",
    components: {
        // Schart
        BarChart,
        LineChart
    },
    setup() {
        const options = {
            type: "bar",
            title: "最近一周检测情况",
            xRorate: 25,    // ?这是？
            labels: ["1","2","3"],  // 这里需要引入日期，比如11.4-11.4+7
            datasets: [
                {
                    label: "检测A",
                    data: [234, 278, 270]
                },
                {
                    abel: "检测B",
                    data: [164, 178, 190]
                },
                {
                    abel: "检测C",
                    data: [144, 198, 150]
                },
            ]
        };

        const desList = [
            {
            src: require("@/assets/jiance.png"),
            title: "全面监测+智能分析",
            desc: "对饮用水的各处包括水源、水厂、管道等进行全面监控监测参数，包括余氯、总氨、氨氮、电导率电离度等"
            },
            {
            src: require("@/assets/fenxi.png"),
            title: "科学智能预警",
            desc: "根据监测到的数据以及统计数据对水质状况进行科学预测，超标参数持续警示显示。"
            },
            {
            src: require("@/assets/chuanshu.png"),
            title: "自动上链",
            desc: "传输过来的数据均会自动上链。"
            },
            {
            src: require("@/assets/qukuailian.png"),
            title: "远程控制",
            desc: "可远程控制"
            },
        ];

        return {
            options,
            desList
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.el-card {
    overflow: hidden;
}
.icon {
    float: left;
    width: 2em;
    height: 2em;
}

.card-panel-content {
    float: right;
    padding-bottom: 1em;
}

img {
    width: 14%;
    height: 14%;
    padding: 0 1em;
    margin-right: 8px;
}

.desc-content {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: column;
}

.desc-content span {
    text-align: start;
}
</style>