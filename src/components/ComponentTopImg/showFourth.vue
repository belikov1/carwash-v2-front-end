<template>
    <div class="cont4">

    </div>
</template>

<script>
    export default {
        name: "show-fouth"
    }
</script>

<style scoped>
  .cont4{

    width: 100%;

  }
  .cont4::before{
    background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url("../../assets/img/ImgForTopTemplate/FirstForTopImg.jpg") center center;
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
