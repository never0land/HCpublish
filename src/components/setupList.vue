<template>
    <div class="setupListBox">
        <el-steps :active="9">
            <el-step title="在线预约" :icon="Edit" />
            <el-step title="邀约进店" :icon="Upload" />
            <el-step title="确认设计" :icon="Picture" />
            <el-step title="设计测量" :icon="Picture" />
            <el-step title="方案沟通" :icon="Picture" />
            <el-step title="签订合同" :icon="Picture" />
            <el-step title="装修施工" :icon="Picture" />
            <el-step title="竣工验收" :icon="Picture" />
            <el-step title="售后保障" :icon="Picture" />

        </el-steps>
    </div>
</template>
<script setup>
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
<style scoped>
.setupListBox {
    padding: 0 100px;
    margin-top: 40px;
    margin-bottom: 40px;
    /* background: url(https://xystcdn.xydec.com.cn/static/xy2022/images/i_lc_bg.jpg) no-repeat center center/cover; */
    height: 450px;
}

:deep(.el-steps) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>