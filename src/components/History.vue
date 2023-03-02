<template>
    <div class="historyBox">
        <div class="historyBox_inner">
            <div>专业设计师团队，已服务超百万家庭</div>
            <div class="buttonGroup">
                <ElButton class="Btn" :icon="Grid">我家这样装修多少钱？</ElButton>
            </div>
        </div>
    </div>
</template>
<script >
import { ElButton } from 'element-plus';
import { Grid } from '@element-plus/icons-vue'
</script>
<style scoped>
.historyBox {
    background: url('../assets/i_sz_bg_2.jpg') no-repeat center center/cover;
    width: 100vw;
    height: 550px;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    font-weight: 200;
}

.buttonGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
}

.Btn {
    background-color: brown;
    color: #fff;
    width: 320px;
    font-size: 22px;
    height: 60px;
}
</style>