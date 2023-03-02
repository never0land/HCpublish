<template>
    <div class="Tabcontroller">
        <div class="TabItem citems" v-for="item in tabDB" :key="item.id" @click="showBox(item.id)">
            <div class="citemsChildBox">
                <div class="titles">{{ item.name1 }}</div>
                <div class="titles1">{{ item.name2 }}</div>
            </div>
            <div class="imgBox">
                <img :src="renderIco(item.ico)" />
            </div>
        </div>
    </div>
    <DiaglogBox :viewConfig="dataStore"></DiaglogBox>
</template>
<script setup>
import { reactive, watch } from 'vue'
import { renderIco } from '../utils/Index'
import DiaglogBox from './DiaglogBox.vue';
const tabDB = reactive([
    {
        id: 0,
        name1: '免费报价',
        name2: '算算装修需要多少钱',
        ico: "../assets/i_bj_icon1.jpg"
    },
    {
        id: 1,
        name1: '户型规划',
        name2: '获取免费平面规划方案',
        ico: '../assets/i_bj_icon2.jpg'
    },
    {
        id: 2,
        name1: '免费量房',
        name2: '预约免费为您量房',
        ico: '../assets/i_bj_icon3.jpg'
    },
    {
        id: 3,
        name1: '参观工地',
        name2: '体验独特施工工艺',
        ico: '../assets/i_bj_icon4.jpg'
    },
])
const DiaglogBoxDB = reactive([
    {
        id: 0,
        num: 0,
        titles: '算一算，你家装修要花多少钱？',
        titles1: '免费获取装修报价',
        titles2: '选择您喜欢的风格',
        imgList: [
            { igmUrl: '1', imgTitle: '现代简约' },
            { igmUrl: '2', imgTitle: '轻奢' },
            { igmUrl: '3', imgTitle: '中式' },
            { igmUrl: '4', imgTitle: '美式' },
            { igmUrl: '5', imgTitle: '欧式' },
            { igmUrl: '6', imgTitle: '其他' },
        ]
    },
    {
        id: 1,
        num: 1,
        titles: '免费提供设计方案？',
        titles1: '多种设计风格任您选择',
        titles2: '选择您喜欢的风格',
        imgList: [
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            // { igmUrl: '', imgTitle: '' },
        ]
    },
    {
        id: 2,
        num: 2,
        titles: '免费量房',
        titles1: '全面精准测量 合理规划户型空间',
    },
    {
        id: 3,
        num: 3,
        titles: '免费提供设计方案？',
        titles1: '多种设计风格任您选择',
        titles2: '选择您喜欢的风格',
        imgList: [
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
            { igmUrl: '', imgTitle: '' },
        ]
    },
])
const showBox = (Num) => {
    dataStore.flg = true
    DiaglogBoxDB.forEach(item => {
        if (item.id == Num) {
            dataStore.titles = item.titles
            dataStore.titles1 = item.titles1
            dataStore.titles2 = item.titles2
            dataStore.num = item.num
            dataStore.a = item.imgList || []
        }
    })
}
const dataStore = reactive({})
watch(() => dataStore, (val) => { console.log(val) })
</script>
<style scoped >
:deep(.el-dialog__headerbtn) {
    border: 5px solid #d1d2d3 !important;
    border-radius: 50% !important;
    margin: 15px;
}

.Tabcontroller {
    display: flex;
    justify-content: space-around;
    padding: 0 100px;
}

.TabItem {
    display: flex;
    width: 305px;
    padding: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid #d1d2d3;
    margin-left: 10px;
    color: #333
}

.citems {
    transition: all .4s ease-in-out;
    cursor: pointer;
}

.citemsChildBox {
    display: flex;
    flex-direction: column;
    width: 153px;
    height: 60px
}

.imgBox {
    width: 68px;
    height: 59px;
    background-color: #d1d2d3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.titles {
    font-size: 28px;
    padding: 5px 0;
    font-weight: 200;
    color: #3d3d3d
}

.titles1 {
    font-size: 14px;
    line-height: 28px;
    color: #999
}

.citems:hover {
    border: 1px #e50120 solid;
    transform: translate(0, -10px);
    box-shadow: 0 0 10px rgb(229 1 32 /45%)
}

.citems:hover .titles {
    color: #e50120;
}
</style>