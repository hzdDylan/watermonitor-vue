<template>
  <el-form :model="form" :rules="rules">
    <el-form-item label="监测点名称">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="监测点编号">
      <el-input v-model="form.id" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="监测点设备编号">
      <el-input v-model="form.deviceid" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="监测点所在区域">
      <el-cascader
        ref="cityCascader"
        :options="cityData"
        :show-all-levels="false"
        @change="cascaderHandler"
      />
    </el-form-item>

    <el-form-item label="监测点定位" prop="address">
      <el-row>
        <el-col :span="18">
          <el-input
            v-model="form.address"
            @change="latitudeAndlongitudeHandler"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-popover placement="top" width="400" trigger="click">
            <template #reference>
              <i>点击快捷输入</i>
            </template>
            <el-input
              v-model="form.latitude"
              placeholder="输入纬度"
              @change="latitudeOrlongitudeHandler"
            ></el-input>
            <el-input
              v-model="form.longitude"
              placeholder="输入经度"
              @change="latitudeOrlongitudeHandler"
            ></el-input>
          </el-popover>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="监测点启用日期">
      <el-date-picker
        v-model="form.timestamp"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDate"
      >
      </el-date-picker>
    </el-form-item>

    <el-form-item label="监测点方案">
      <el-select v-model="form.scheme" multiple placeholder="选择方案">
        <el-option
          v-for="item in schemes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="监测点备注">
      <el-input v-model="form.id" type="textarea"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs, ref } from "vue";

import axios from "axios";

export default {
  setup() {
    const state = reactive({
      form: {
        name: "",
        id: "",
        location: "",
        address: "",
        deviceid: "",
        timestamp: "",
        notes: "",
        scheme: [],
        longitude: "",
        latitude: "",
      },

      // 禁用时间的判断函数
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    });

    return {
      ...toRefs(state),
    };
  },
  data() {
    const validateAddress = (rule, value, callback) => {
      if (value === "") {
        // 空输入情况
        callback(new Error("请输入经纬度，格式为(纬度, 经度)"));
      } else {
        const flag = /^\([0-9]+\.[0-9]+,[0-9]+\.[0-9]+\)$/.test(value);
        flag ? callback() : callback("格式不规范")
      }
    //   const flag = /^\([0-9]+\.[0-9]+,[0-9]+\.[0-9]+\)$/.test(value);
    };

    return {
      cityData: [],
      schemes: [
        {
          label: "标准方案1",
          value: "标准方案1",
        },
        {
          label: "标准方案2",
          value: "标准方案2",
        },
        {
          label: "标准方案3",
          value: "标准方案3",
        },
      ],
      rules: {
        address: [{ validator: validateAddress, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getCityData();
  },
  methods: {
    // 地址多级选择器省市数据来源
    getCityData() {
      axios
        .get("/CityData.json")
        .then((res) => {
          this.cityData = res.data;
        })
        .catch((err) => {
          console.error("获取省市区信息失败");
          console.error(err);
        });
    },
    // 地址多级选择器的处理函数
    cascaderHandler() {
      // 无用时记得移除该函数
      const nodeData = this.$refs["cityCascader"].getCheckedNodes();
      console.log(nodeData[0].label, nodeData[0].data);
      this.form.location = nodeData[0].label;
    },

    // 经度纬度转经纬度处理函数
    latitudeOrlongitudeHandler() {
      this.form.address = `(${this.form.latitude},${this.form.longitude})`;
    },

    // 经纬度转经度纬度处理函数
    latitudeAndlongitudeHandler() {
      [this.form.latitude, this.form.longitude] = this.form.address
        .slice(1, -1)
        .split(",");
    },
  },
};
</script>