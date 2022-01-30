<template>
    <div ref="linechartRef" id="main" ></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core"
// 引入柱状图图表，图表后缀都为 Chart
import {LineChart} from "echarts/charts"
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent,
  LegendComponent,
  DataZoomComponent
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
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  DataZoomComponent
]);

import {shallowRef} from 'vue'
import axios from 'axios'

export default {
    name: "linechart",

    data() {
        return {
        }
    },

    props: ["qualityDataPath","qualityData"],

    mounted() {
        // 获取图表所在标签
        this.myChart = echarts.init(this.$refs.linechartRef);
        // 设置图表的初始大小
        // this.setSize();
        // 渲染图表
        this.renderLine();
        // 添加监听，监听窗口变化并修改图表大小
        this.resizeChart();
    },

    async setup(props) {
        // let qualityData;
        // console.log(props.qualityDataPath)
        // await axios.get(props.qualityDataPath.path).then((res) => {
        //     qualityData = res.data.air;
        // });
        // console.log(props.qualityData)

        const myChart = shallowRef(null);
        const option = {
            legend: {},
            tooltip: {},
            // dataset: {
            //     // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
            //     // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
            //     // 如果不指定 dimensions，也可以通过指定 series.encode
            //     dimensions: ['product', '2015', '2016', '2017', '2018'],
            //     source: props.qualityData,
            //     // source: qualityData2.air
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // xdata: xdata
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '20%']
            },
            // series: [{type: 'line',label:{show:true}}, {type:'line',label:{show:true}},{type:'line',label:{show:true}}]
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 50
                },
                {
                    start: 0,
                    end: 50
                }
            ],
            series: {
                data: props.qualityData,
                type: 'line',
                sampling: 'lttb',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }
                    ])
                },
                smooth: true,
                label:{
                    show: false
                }
            }
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
    },

    watch: {
        qualityData: {
            immediate: true,
            handler (val) {
                if(val.length !== 0) {
                    // console.log(this.qualityData);
                    console.log("触发视图更新")
                    this.option.series.data = this.qualityData;
                    this.myChart.setOption(this.option);
                }
            }
        }
    }
}
</script>