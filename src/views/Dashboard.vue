<template>
    <div>
        <p>home</p>
        <el-row :gutter=20>
            首页该放个啥啊
            放个区块登录方案以及最新区块上链数据信息以及对该数据的基本分析（是否水质超标）
            放个网页平台介绍
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <img>这里是图片图标
                    <p>全面监测+智能分析</p>
                    <span>对饮用水的各处包括水源、水厂、管道等进行全面监控监测参数，包括余氯、总氨、氨氮、电导率电离度等
                    </span>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <img>这里是图片图标
                    <p>科学预测+智能预警</p>
                    <span>根据监测道德的数据以及统计数据对水质状况进行科学预测，超标参数持续警示显示。
                    </span>
                </el-card>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter=20>
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <img>这里是图片图标
                    <p>智能上链</p>
                    <span>传输过来的数据均会自动上链。
                    </span>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <img>这里是图片图标
                    <p>远程控制</p>
                    <span>可远程控制
                    </span>
                </el-card>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter=20>
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <h3>平台+数据+服务</h3>
                    <img>这里是图片图标
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover" :body-style="{padding: '5px'}">
                    <h3>智能水质控制系统简视图</h3>
                    <img>这里是图片图标
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

        return {
            options
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