
<template>
    <el-carousel :interval="5000" arrow="always" class="swiperBox">
        <el-carousel-item v-for="item in swiperDB" :key="item">
            <el-image :src="renderIco(item.address)" class="autoPicture"></el-image>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup >
import { reactive } from 'vue'
const swiperDB = reactive([{ address: '../assets/s2.jpg' }, { address: '../assets/s1.jpg' }])
const renderIco = (address) => new URL(address, import.meta.url).href
</script>
<style scoped>
:deep(.el-carousel__container) {
    min-height: 480px;
    margin-bottom: 30px;
}

.swiperBox {
    z-index: 33
}

.autoPicture {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>