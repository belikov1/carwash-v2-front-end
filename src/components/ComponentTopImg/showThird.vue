<template>
    <div class="cont3">

    </div>
</template>

<script>
    export default {
        name: "show-third"
    }
</script>

<style lang="scss" scoped>

    .cont3 {

        width: 100%;

    }

    .cont3::before {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url("../../assets/img/ImgForTopTemplate/ThirdForTopImg.jpg") center center;
        background-size: cover;
        width: 100%;
        height: 100%;
        content: ' ';
        left: 0;
        top: 0;
        position: fixed;
        will-change: transform;
        @media screen and (max-width: 812px) {
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url("../../assets/img/ImgForTopTemplate/ThirdForTopImgMobile.jpg") center bottom;
        }
        @media screen and (min-width: 512px) and (max-width: 812px) {
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url("../../assets/img/ImgForTopTemplate/ThirdForTopImgMobile.jpg") center center;
            background-size: cover;
        }
    }
</style>
