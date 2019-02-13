<template>
  <div id="app">
      <TopImgComponent class="blur"> </TopImgComponent>
      <div id="splinter"></div>
      <MenuComponent> </MenuComponent>
      <router-view class="blur"> </router-view>
      <FooterComponent class="blur"> </FooterComponent>
  </div>
</template>

<script>
  import TopImgComponent from './TopImgComponent.vue'
  import MenuComponent from './MenuComponent.vue'
  import FooterComponent from './FooterComponent.vue'

  export default {
      components:{
          TopImgComponent : TopImgComponent,
          MenuComponent : MenuComponent,
          FooterComponent : FooterComponent
      },
      name: 'app'
  }
</script>

<style lang="scss">

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: "Ubuntu", sans-serif;
    background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%) #ffffff;
    width: 100vm;
    line-height: 1;
    overflow-x: hidden;
    color: white;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    overflow-x: hidden;
  }
  a{
    outline: none;
    text-decoration: none;
  }

  button{
    all: unset;
  }

  h1{
    font-size: 28px!important;
  }
  h2{
    font-size: 26px!important;
    @media screen and (max-width: 812px){
        font-size: 20px!important;
    }
  }
  h3{
    font-size: 22px!important;
    @media screen and (max-width: 812px){
        font-size: 18px!important;
    }
  }



  .homeAnimation{
    //анимация срабатывает при скролле на домашней странице
    animation: price 2s;
    animation-fill-mode: both;
  }

  @keyframes price {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }


  .blur{
      //эффект размытия, применяется ко всем элементам, при вызове бокового меню
      //боковое меню создано для маленьких экранов width < 812 px (высота iphone X)
      transition: ease .3s;
      z-index: 2;
      position: relative;
  }


</style>
