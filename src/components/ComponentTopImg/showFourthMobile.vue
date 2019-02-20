<template>
    <div class="contMobile4">

    </div>
</template>

<script>
    export default {
        name: "showFourthMobile"
    }
</script>

<style scoped>
    .contMobile4{
        z-index: 0;
        width: 100%;

    }
    .contMobile4::before{
        background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("../../assets/img/ImgForTopTemplate/ThirdForTopImgMobile.jpg") center center;
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
