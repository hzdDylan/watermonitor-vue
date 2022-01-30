<template>
    <div ref="barchartRef" id="main" style="height:400px;"></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core"
// 引入柱状图图表，图表后缀都为 Chart
import {BarChart} from "echarts/charts"
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
import {CanvasRenderer} from "echarts/renderers"

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent
]);

import {shallowRef} from 'vue'
import axios from 'axios'

export default {
    name: "barchart",

    data() {
        return {
            // myChart: null    //错误原因：被封装进proxy，无法被Echart获取
        }
    },

    props: {

    },

    mounted() {
        // 获取图表所在标签
        this.myChart = echarts.init(this.$refs.barchartRef);
        // 设置图表的初始大小
        // this.setSize();
        // 渲染图表
        this.renderLine();
        // 添加监听，监听窗口变化并修改图表大小
        this.resizeChart();
    },

    setup() {
        const myChart = shallowRef(null);

        const option = {
            legend: {},
            tooltip: {},
            dataset: {
                // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
                // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
                // 如果不指定 dimensions，也可以通过指定 series.encode
                dimensions: ['product', '2015', '2016', '2017'],
                source: [
                    { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                    { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                    { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                    { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
                ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{type: 'bar'}, {type:'bar'},{type:'bar'}]
        };

        return {
            option,
            myChart
        }
    },

    methods: {
        setSize() {

        },
        resizeChart() {
            //监听窗口宽度变化
            window.onresize = () => {
                // 设置图表匡高
                // this.setSize();
                // 调用rcharts的resize函数
                this.myChart.resize();
                // console.log(this.myChart)
            }
        },
        renderLine() {
            this.myChart.setOption(this.option);
        }
    }
}
</script>