<template>
  <div>
    <el-card shadow="hover">
      <div id="selector">
        <el-row>
            <el-col :span="10">
                <span>监测点选择: </span>
                <el-select v-model="site" filterable placeholder="选择监测点">
                    <el-option
                        v-for="item in sites"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-col>

            <el-col :span="8" :offset="6">
                <el-select
                v-model="value"
                placeholder="Select"
                @change="selectChangeHandle"
                >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
                </el-select>
            </el-col>
        </el-row>
      </div>

      <suspense>
        <line-chart
          :qualityDataPath="qualityDataPath"
          :qualityData="qualityData"
          style="height: 200px"
        ></line-chart>
      </suspense>
    </el-card>

    <el-table :data="tableData" style="width: 100%" stripe height="250">
      <el-table-column prop="time" label="采集时间" width="140" />
      <el-table-column prop="PH" label="PH值" width="130" />
      <el-table-column prop="EC" label="电离度" width="130" />
      <el-table-column prop="Turbidity" label="浊度" width="130" />
      <el-table-column prop="temperature" label="温度" width="130" />
    </el-table>
  </div>
</template>

<script>
// import Schart from "vue-schart"
import BarChart from "@/components/echarts/Barchart.vue";
import LineChart from "@/components/echarts/Linechart.vue";

import axios from "axios";

import { ref } from "vue";

import {useStore} from 'vuex'

export default {
  name: "dashboard",
  components: {
    // Schart
    BarChart,
    LineChart,
  },
  setup() {
    const $store = useStore();

    const qualityDataPath = { path: "实验室PH记录-总-数据清洗.json" };

    const options = ref([
      {
        value: "PH",
        label: "PH值",
      },
      {
        value: "EC",
        label: "电离度",
      },
      {
        value: "Turbidity",
        label: "浊度",
      },
      {
        value: "temperature",
        label: "温度",
      },
    ]);

    const site = ref("");
    const monitoringSite = $store.state.monitoringSite;
    const sites = monitoringSite.map((item, index) => {
      return {name: item.name, id: item.id};
    })

    return {
      qualityDataPath,
      options,
      value: ref("PH值"),
      site,
      sites
    };
  },
  data() {
    return {
      tableData: [],
      qualityData: [],
    };
  },
  methods: {
    getRecord() {
      axios
        .get("/实验室PH记录-总-数据清洗-处理.json")
        .then((res) => {
          this.tableData = res.data.record;

          // console.log(res.data.record);

          let temp = [];
          // 遍历取出指定属性值
          for (const item of res.data.record) {
            temp.push(item.PH || "");
          }
          this.qualityData = temp;
          console.log("qualityData父组件已刷新");
        })
        .catch();
    },

    selectChangeHandle(val) {
      let temp = [];

      this.options.some((item, index, arr) => {
        if (item.label === val) {
          val = item.value;
          return true;
        }
      });

      // 将索引与json数据文件索引对应
      for (const item of this.tableData) {
        temp.push(parseFloat(item[val]));
      }
      this.qualityData = temp;
      console.log("触发selectChangeHandle");
    },
  },
  mounted() {
    this.getRecord();
  },
  activated() {
      console.log("activated传入id为", this.$route.params.id, "名字为", this.$route.params.name);
      this.site = this.$route.params.name || this.sites[0].name;
  } 
};
</script>

<style scoped>
#selector {
  /* position: relative;
  display: flex; */
  /* right: -25%; */
}
</style>