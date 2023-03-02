<template>
    <div class="HomeBox">
        <Headers></Headers>
        <Nav></Nav>
        <swiper></swiper>
        <Tab></Tab>
        <s1></s1>
        <History style="margin:40px 0;"></History>
        <s2></s2>
        <setuplist style="margin:40px 0;"></setuplist>
    </div>
</template>
<script setup>
import Headers from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Tab from '../components/Tab.vue'
import swiper from '../components/swiper.vue';
import s1 from '../components/s1.vue'
import setuplist from '../components/setupList.vue'
import History from '../components/History.vue';
import s2 from '../components/s2.vue'
</script>
<style scoped>
.HomeBox {
    width: 100%;
    height: 1000%;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;

}

@media screen and(max-width:500px) {
    .HomeBox {
        width: 100%;
        height: 100%;
    }

}
</style>