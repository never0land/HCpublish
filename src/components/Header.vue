<template>
    <div class="headerController_inner">
        <div class="menu" v-if="isMobile">
            <div>
                <ElIcon :size="66" @click="change" v-if="dataStore.showPhoneIcon">
                    <Operation />
                </ElIcon>
                <ElIcon v-else :size="66" @click="change">
                    <CloseBold />
                </ElIcon>
            </div>
        </div>
        <div>
            <div class="logo">
                {{ dataStore.title }}
            </div>
        </div>
        <div>
            <span style="margin-left:60px">
                <el-image :src="renderIco('../assets/foot_contact_icon1.png')" class="ml40" />
                <span style="color:#000;font-size: 16px;">咨询热线</span>
            </span>
            <div style="margin-left:60px;font-weight: bold;font-size: 22px;">15920405263</div>
        </div>
    </div>
</template>
<style scoped >
.headerController_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0 26px 0;
    border-bottom: 1px solid #d1d2d3;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.16);
}

.logo {
    max-width: 380px;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 5px 5px solid #d1d2d3;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>
<script setup>
import { Operation, CloseBold } from '@element-plus/icons-vue'
import { renderIco, isMobile } from '../utils/Index';
import { onMounted, reactive, watch } from 'vue'
import { ElIcon } from 'element-plus';
const dataStore = reactive({
    title: '鸿成装饰',
    phoneTitle: '',
    showPhoneIcon: true
})
const change = () => {
    dataStore.showPhoneIcon = !dataStore.showPhoneIcon
}
const reset = () => {
    console.log(3)
}
onMounted(() => {
    window.removeEventListener('resize', () => reset, false)
    window.addEventListener('resize', function () {
        this.setTimeout(() => window.location.reload(), 300)
    }, false)
})
</script>
<style scoped>
.ml-40 {
    margin-left: 40px;
}

.logo {
    font-size: 32px;
    font-family: 'Courier New', Courier, monospace;
    text-shadow: 0 0 2px solid #d1d2d3;
}

.headerController_inner {
    padding: 0 100px;
    margin: 10px 0;
}
</style>