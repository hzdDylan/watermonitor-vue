<template>
    <div>
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
        <div style="margin:20px"></div>
        <el-form ref="form"
            :model="form" 
            label-position="right" 
            label-width="120px"
            :rules="rules">
            <h2>预警情况设置</h2>
            <el-form-item label="预警等级类别" prop="type">
                <el-radio-group v-model="form.type">
                    <el-radio label="等级Ⅰ"></el-radio>
                    <el-radio label="等级Ⅱ"></el-radio>
                    <el-radio label="等级Ⅲ"></el-radio>
                    <el-radio label="等级Ⅳ"></el-radio>
                    <el-radio label="等级Ⅴ"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="PH值正常值范围">
                <el-row justify="center">
                    <el-col :span="11">
                        <el-input-number
                            v-model="phlow"
                            :precision="2"
                            :step="0.1"
                            :max="phupper" 
                            :min="0"/>
                    </el-col>
                    <el-col :span="2" class="line">-</el-col>
                    <el-col :span="11">
                        <el-input-number
                            v-model="phupper"
                            :precision="2"
                            :step="0.1"
                            :max="14"
                            :min="phlow" />
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="电离限高值标准" prop="ec">
                <el-input v-model="form.ec" placeholder="1.413ms/cm"></el-input>
            </el-form-item>

            <el-form-item label="浑浊度选择" prop="tb">
                <el-select v-model="form.tb" placeholder="浑浊度等级选择">
                    <el-option
                        v-for="(item,index) in tbLevels"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                        <span style="float:left">{{item.label}}</span>
                        <span style="float:right;
                            color: var(--el-text-color-secondary);
                            font-size: 13px;">
                            {{item.explain}}
                        </span>
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">Submit</el-button>
                <el-button @click="resetForm('form')">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script> 
import {defineComponent, ref} from 'vue'
import {useStore} from 'vuex'

export default {
    // name: 'warnset',
    setup() {
        const $store = useStore();

        const num = ref(1);
        const phlow = ref(6), phupper = ref(8);
        const tbLevels = ref([
            {label: "1级浑浊度", explain:"59.2% - 100%", value:1},
            {label: "2级浑浊度", explain:"52.8% - 59.2%", value:2},
            {label: "3级浑浊度", explain:"36.8% - 52.8%", value:3},
            {label: "4级浑浊度", explain:"0% - 36.8%", value:4}
        ]);

        const site = ref("");
        const monitoringSite = $store.state.monitoringSite;
        const sites = monitoringSite.map((item, index) => {
            return {name: item.name, id: item.id};
        })

        return {
            num,
            phlow,
            phupper,
            tbLevels,
            site,
            sites
        }
    },
    data() {
        // 定义验证规范
        // EC电离度规范
        const checkEC = (rule, value, callback) => {
            if(!value) {
                return callback(new Error("请输入电离度"))
            } else if (value.search(/[0-9]+\.[0-9]{1,3}ms\/cm/) !== -1) {
                return callback()
            } else {
                return callback(new Error("格式错误"))
            }

        }

        return {
            form: {
                type: "等级Ⅰ",
                ec: '1.413ms/cm',
                tb: '请选择浑浊度等级'
            },
            rules: {
                ec: [
                    {
                        validator: checkEC,
                        trigger: 'blur'
                    },
                ],
                tb: [
                    {
                    type: 'number',
                    require: true,
                    message: "请选择浑浊度等级",
                    trigger: 'change'
                    }
                ],
                type: [
                    {
                    require: true,
                    message: "请选择预警等级",
                    trigger: 'change'
                    }
                ]
            },

        }
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((isValid) => {
                if (isValid) {
                    // 这里缺了个上传方法
                    console.log('submit!,but submit not success');
                } else {
                    console.log('error submit!!');
                    return false
                }
            })
        },
        resetForm(form) {
            // this.$refs[form].resetFields();
            console.log("暂不支持该按钮功能，亲")
        }
    },
    activated() {
        console.log("activated传入id为", this.$route.params.id, "名字为", this.$route.params.name);
        this.site = this.$route.params.name || this.sites[0].name;
    }   
}
</script>