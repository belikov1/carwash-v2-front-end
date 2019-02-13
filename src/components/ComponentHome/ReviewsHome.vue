<template>
  <div id="reviews_home">
      <h2>Новая система скидок:</h2>
      <section class="reviews_home_head">
          <div class="reviews_home">
              <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque culpa cumque deleniti est eveniet facere hic magnam modi non, odit quas quo ratione similique suscipit, ullam vitae! Ex, fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, eaque harum hic illum iste laboriosam laborum minus nesciunt nisi odio omnis optio, quidem quo reiciendis sed sint sit suscipit...</p></div>
              <div><router-link to="/about">Читать больше</router-link></div>
          </div>
      </section>
  </div>

</template>

<script>
    export default {
        name: "reviews-home",

    }
</script>

<style lang="scss">



  #reviews_home {
      padding: 0 10%;
      margin: 2% 0 ;
      opacity: 0;
      text-align: center;
      @media screen and (max-width: 812px){
          padding: 0 2%;
      }
          .reviews_home_head {
              padding: 3%;
              border: solid 3px white;
              border-radius: 15px;
              margin: 3% 0 1% 0;
              line-height: 1.3em;
              text-align: center;
              font-size: 20px;
              @media screen and (max-width: 812px){
                  line-height: 1.2em;
                  font-size: 22px;
              }
                  a{
                      color: #f35656;
                      font-style: oblique;
                  }
                  a:hover{
                      color: #f35656;
                  }
          }
  }

</style>
