
<template>
    <div class="s2Box">
        <div class="flex">
            <div class="fontred flex">设计案例<div class="flex">.</div>
                <div style="color:black">满足您的装修要求</div>
            </div>
        </div>
        <div style="color:#a1a2a3;margin-bottom: 20px;">10余种潮流假装风格，1万多套精品作品,让您快速找到家装灵感</div>
        <div style="width:1280px;height:650px;background-color: #d1d2d3;display:flex;overflow: hidden;" id="box">
            <div class="boxItem1"></div>
            <div class="boxItem2"></div>
            <div class="boxItem3"></div>
            <div class="boxItem4"></div>
            <div class="boxItem5 on"></div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
    let dom = document.getElementById('box')
    for (let i = 0; i < dom.children.length; i++) {
        if (i !== 4) {
            dom.children[i].onmouseenter = function () {
                dom.children[i].classList.add('on')
                dom.children[4].classList.remove('on')
            }
            dom.children[i].onmouseleave = function () {
                dom.children[i].classList.remove('on')
                dom.children[4].classList.add('on')
            }
        }
    }

})
</script>
<style scoped>
.on {
    width: 444px !important;
}

.boxItem5 {
    background: url(../assets/i_case_cate_img15.jpg) no-repeat center center/cover;
    height: 100%;
    width: 199px;
    margin-left: 15px;
}

.boxItem4 {
    background: url(../assets/i_case_cate_img14.jpg) no-repeat center center/cover;
    height: 100%;
    width: 199px;
    margin-left: 15px;
}

.boxItem5:hover,
.boxItem4:hover,
.boxItem3:hover,
.boxItem2:hover,
.boxItem1:hover {
    transform: scale(1.2);
    transition: 1000ms ease-out;
}

.boxItem3 {
    background: url(../assets/i_case_cate_img13.jpg) no-repeat center center/cover;
    height: 100%;
    width: 199px;
    margin-left: 15px;
}

.boxItem1 {
    background: url(../assets/i_case_cate_img11.jpg) no-repeat center center/cover;
    height: 100%;
    width: 199px;
    margin-left: 15px;
    transition: all 0.4s ease-in-out 0s;
}


.boxItem2 {
    background: url(../assets/i_case_cate_img12.jpg) no-repeat center center/cover;
    height: 100%;
    width: 199px;
    margin-left: 15px;
}

.fontred {
    color: red;
    font-size: 42px;
    font-weight: 200;
    margin-bottom: 20px;
}

.s2Box {
    width: 1280px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>