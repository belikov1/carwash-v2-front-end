<template>
    <div class="contMobile1">

    </div>
</template>

<script>
    export default {
        name: "showOneMobile"
    }
</script>

<style scoped>
    .contMobile1{
        z-index: 0;
        width: 100%;

    }
    .contMobile1::before{
        background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("../../assets/img/ImgForTopTemplate/FourthForTopImgMobile.jpg") center center;
        background-size: cover;
        width: 100%;
        height: 100%;
        content: ' ';
        left: 0;
        top: 0;
        position: fixed;
        will-change: transform;
    }
</style>
