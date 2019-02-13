<template>
    <div id="price_home">
        <div class="price-head-home">
            <a class="price-head-home-one-caption" href="/price#moyka"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/Moyka.jpg" alt="" class="price-head-home-img">Мойка кузова</div></a>
            <a class="price-head-home-one-caption" href="/price#dop"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/dop.jpg" alt="" class="price-head-home-img">Доп. услги</div></a>
            <a class="price-head-home-one-caption" href="/price#himch"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/himchistka.jpg" alt="" class="price-head-home-img">Химчистка</div></a>
            <a class="price-head-home-one-caption" href="/price#polir"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/polirovka.jpg" alt="" class="price-head-home-img">Полировка</div></a>
            <a class="price-head-home-one-caption" href="/price#zash"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/ZashitnoePokr.jpg" alt="" class="price-head-home-img">Защитное покрытие</div></a>
            <a class="price-head-home-one-caption" href="/price#kovry"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/kovry.jpg" alt="" class="price-head-home-img">Химчистка ковров</div></a>
            <a class="price-head-home-one-caption" href="/price#nlenka"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/nlenka.jpg" alt="" class="price-head-home-img">Антигравийная пленка</div></a>
            <a class="price-head-home-one-caption" href="/price#winom"><div class="price-head-home-one"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/winom.jpg" alt="" class="price-head-home-img">Шиномантаж</div></a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "price-home"
    }
</script>

<style lang="scss" >
  #price_home{
      z-index: 2;
      position: relative;
      margin: 0 0 -1px 0;
      background: #1b1a20;
      padding: 0 0 2%;

      .price-head-home {
          display: flex;
          width: 80%;
          padding: 2% 10% 0;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          @media screen and (max-width: 1250px ) {
              display: flex;
              width: 100%;
              padding: 30px 0;
          }

          .price-head-home-one {
              opacity: 0;
              color: white;
              height: 250px;
              width: 250px;
              font-size: 22px;
              font-weight: 600;
              text-decoration: none;

          }
          .price-head-home-one-caption {
              width: 25%;
              height: 300px;
              text-align: center;
              text-decoration: none;
              @media screen and (max-width: 1250px ) {
                  width: auto;
                  text-align: center;
                  text-decoration: none;
              }
          }

          .price-head-home-one:hover {
              transform: scale(1.1);
              transition: .3s;
              color: #f35656;
          }

          .price-head-home-img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
          }
      }
  }

</style>
