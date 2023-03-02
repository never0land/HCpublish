<template>
    <div>
        <ElDialog v-model="prop.viewConfig.flg" width="500">
            <template #header>
                <div class="head">
                    <div class="t1">{{ prop.viewConfig.titles }}</div>
                    <div class="t2">{{ prop.viewConfig.titles1 }}</div>
                </div>
            </template>
            <div class="body">
                <div v-show="prop.viewConfig.num !== 3">{{ prop.viewConfig.titles2 }}</div>
                <div v-if="prop.viewConfig.a.length === 0">
                    <ElForm ref="formRef" :model="dataStore.formDB">
                        <ElFormItem label="" prop="num" :rules="[
                            { required: true, message: '请填写房屋面积' }, { type: 'number', message: '请填写数字' }
                        ]">
                            <ElInput autofocus placeholder="请输入您的房屋面积" v-model="dataStore.formDB.num"
                                style="line-height:75px">
                                <template #suffix>
                                    <strong>m<sup>2</sup></strong>
                                </template>
                            </ElInput>
                        </ElFormItem>
                        <ElFormItem label="" prop="num1" :rules="[
                            { required: true, message: '请填写手机号码' }, { type: 'number', message: '请填写数字' }
                        ]">
                            <ElInput placeholder="请输入您的手机号码" maxlength="14" v-model="dataStore.formDB.num1">
                                <template #suffix>
                                    <div class="box">
                                        信息保护中请放心填写
                                    </div>
                                </template>
                            </ElInput>
                        </ElFormItem>
                    </ElForm>
                    <div style="width:100%;display:flex;justify-content: center;">
                        <ElButton class="Btn" @click="submitForm(formRef)">预约上门量房</ElButton>
                    </div>

                </div>
                <div v-if="prop.viewConfig.num === 3">
                    <ElForm ref="formRef" :model="dataStore.formDB">
                        <ElFormItem label="" prop="num1" :rules="[
                            { required: true, message: '请填写手机号码' }, { type: 'number', message: '请填写数字' }
                        ]">
                            <ElInput placeholder="请输入您的手机号码" maxlength="14" v-model="dataStore.formDB.num1">
                                <template #suffix>
                                    <div class="box">
                                        信息保护中请放心填写
                                    </div>
                                </template>
                            </ElInput>
                        </ElFormItem>
                    </ElForm>
                    <div style="width:100%;display:flex;justify-content: center;">
                        <ElButton class="Btn" @click="submitForm(formRef)">预约参观工地</ElButton>
                    </div>

                </div>
                <div v-else>
                    <div v-for="item in prop.viewConfig.a" :key="item">
                        <div>
                            <img :src="renderIco">
                            <div>{{ item.imgTitle }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <slot></slot>
        </ElDialog>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { ElDialog, ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
const prop = defineProps({
    viewConfig: {
        type: Object,
        required: true,
        default: {
            flg: false
        }
    }
})
const dataStore = reactive({
    formDB: {
        num: '',
        num1: ''
    }
})
const formRef = ref()
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('s')
        }
    })
}
const imgList = ref(prop.viewConfig.a)

</script>
<style scoped>
.t1 {
    font-size: 28px;
}



.t2 {
    color: rgba(255, 255, 255, 0.5)
}

.box {
    background-color: #71c9ad;
    color: #fff;
    padding: 5px;
    width: 80px;
    white-space: pre-wrap;
}

.Btn {
    background-color: brown;
    color: #fff;
    width: 320px;
    height: 60px;
}

:deep(.el-dialog__headerbtn .el-dialog__close) {
    color: #fff;
}

:deep(.el-dialog) {
    border-radius: 30px;
}

:deep(.el-dialog__header) {
    overflow: hidden !important;
    padding: 0 0 20px 0 !important;
    margin-right: 0 !important;
    height: 70px !important;
}

.head {
    background-image: url('../assets/alert_top_bg.png');
    height: 80px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-top: 20px;
    color: #fff;
    padding: 20px;

}

:deep(.el-dialog__body) {
    background-image: url('../assets/alert_bg.png');
    background-position: right bottom;
    background-repeat: no-repeat;
}

.body {
    margin: 20px 50px
}
</style>