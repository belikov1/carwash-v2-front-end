<template>
    <div class="contMobile2">

    </div>
</template>

<script>
    export default {
        name: "showSecondMobile"
    }
</script>

<style scoped>
    .contMobile2{
        z-index: 0;
        width: 100%;

    }
    .contMobile2::before{
        background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("../../assets/img/ImgForTopTemplate/FirstForTopImgMobile.jpg") center center;
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
