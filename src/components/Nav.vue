<template>
    <div class="flex h75">
        <div v-for="item in menuList" :key="item.id" class="ml-5 flex  uItem" @click="changeBtn(item.index)">
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const currentIndex = ref(0)
const menuList = reactive([
    {
        id: 0,
        index: 0,
        text: '首页'
    },
    {
        id: 1,
        index: 1,
        text: '设计案例'
    }
])
const changeBtn = (num) => {
    let doms = document.getElementsByClassName('h75')[0]
    let domsChilds = doms.getElementsByTagName('div')
    for (let i = 0; i < domsChilds.length; i++) {
        domsChilds[i].classList.remove('active')
    }
    domsChilds[num].classList.add('active')
}
</script>
<style scoped>
.uItem {
    position: relative;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    height: 100%;
}

.uItem:not(.active):hover::after {
    width: 100%;
}

.active {
    color: #B20B0B;
    border-top: 4px solid #B20B0B;
}

.uItem.uItem:active::after {
    width: 100%
}

.uItem::after {
    display: block;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -0.6px;
    width: 0;
    height: 4px;
    background-color: #B20B0B;
    transition: all .5s;
}

.ml-5 {
    margin-left: 80px;
    margin-right: 80px;
}

.h75 {
    line-height: 70px;
    max-height: 70px;
}

.justify-center {
    margin: auto;
}

.font {
    height: 32px;
}

.font:hover {
    color: brown;
    cursor: pointer;
}
</style>