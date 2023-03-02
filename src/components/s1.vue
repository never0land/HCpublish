<template>
    <section class="box1">
        <div class="box1Left" style="position:relative">
            <div style="z-index:22;position:absolute;color:#fff;left:15%;top:30%">
                <div style="font-size: 28px;margin-bottom: 15px;">免费获取假装报价</div>
                <div style="font-size:15px;margin-bottom: 15px;">现已累计有88827位获取报价</div>
                <div style="border-bottom: 4px solid red;width:50px"></div>

            </div>
            <el-image :src="renderIco('../assets/i_bj_img.jpg')" style="min-height: 350px;height:350px"></el-image>
        </div>
        <div class="boxCenter">
            <h2>算一算我家装修需要多少钱 ？</h2>
            <ElForm :rules="rules" :model="formModel" ref="formRef" style="width:400px">
                <ElFormItem prop="addressAll" :rules="[
                    { required: true, message: '请填写地址' }
                ]">
                    <el-cascader v-model="formModel.addressAll" :options="GZAddress" placeholder="请选择区" />
                </ElFormItem>
                <ElFormItem prop="atr" :rules="[
                    { required: true, message: '请填写平方数' }
                ]">
                    <ElInput v-model="formModel.atr" placeholder="您的房屋面积">
                        <template #suffix>
                            <strong>m<sup>2</sup></strong>
                        </template>
                    </ElInput>
                </ElFormItem>
                <ElFormItem prop="phone" :rules="[
                    { required: true, message: '请填写联系方式' }
                ]">
                    <ElInput v-model="formModel.phone" placeholder="请输入您的手机号码">
                        <template #prefix>
                            <ElIcon>
                                <Iphone />
                            </ElIcon>
                        </template>
                    </ElInput>
                </ElFormItem>

            </ElForm>
            <ElButton @click="getDB(formRef)" class="btnColor Btn">免费获取报价</ElButton>
        </div>
        <hr style="color:#d1d2d3;margin-right: 80px;" />
        <div class="boxRight">
            <h2>您的装修预算是</h2>
            <div class="money">{{ NUM }}元</div>
            <div>因地域不同, 各地报价略有区别，请以实际情况为准</div>
        </div>
    </section>
</template>
<script setup>
import axios from 'axios'
import { renderIco } from '../utils/Index';
import { reactive, ref, watch, onMounted } from 'vue'
import { GZAddress } from '../db/db'
import { ElButton, ElForm, ElFormItem, ElInput, ElInputNumber, ElIcon } from 'element-plus'
import { Iphone } from '@element-plus/icons-vue'

const formModel = reactive(
    {
        id: 0,
        addressAll: '',
        phone: '',
        atr: ''
    }
)
const rules = reactive([

])
const formRef = ref()
const getDB = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            axios.interceptors.request.use((config) => {
                console.log(config)
                return config
            })
            axios({
                url: 'http://localhost:3000/CustomerInformation',
                method: 'post',
                data: {
                    CustomerInformation: formModel
                }
            }).then(res => {
                console.log(res)
            })
        }
    })
}
let NUM = ref(0)
const handleNum = ref()
const changeNum = () => {
    NUM.value = Math.floor(Math.random() * 100000)
    if (NUM.value) clearInterval(handleNum.value)
}
watch(() => NUM.value, () => {
    handleNum.value = setInterval(() => {
        changeNum()
    }, 1600)
})
onMounted(() => changeNum(),
    //  fetch('/api/test1').then(res => res.json()).then(res => {
    //     console.log(res)
    // })
)
// onBeforeDestroy(() => {
//     clearInterval(handleNum.value)
// })
</script>
<style scoped>
:deep(.el-input__inner) {
    min-height: 50px !important;
    height: 50px !important;
}

.money {
    font-size: 48px;
    color: red;
    font-weight: bold;
    margin-bottom: 30px;
}

.box1 {
    min-height: 300px;
    box-shadow: 0 0 5px rgb(0 0 0/15%);
    margin: 50px 0;
    display: flex;
    padding: 20px 120px;
}

.Btn {
    background-color: brown;
    color: #fff;
    width: 320px;
    height: 48px;
}

.box1Left {
    padding: 50 auto !important;
    width: 300px;
    max-width: 300px;
    height: 100%;
}

.boxCenter {
    background: url('../assets/i_bj_jiantou.jpg') no-repeat left 30px #fff;
    max-height: 300px;
    /* width: 530px; */
    padding-left: 50px;
    /* padding-right: 50px; */
}

.boxRight {
    width: 300px;
    max-width: 300px;
}
</style>