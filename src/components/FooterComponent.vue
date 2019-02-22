<template>
    <main id="footer">
        <section class="numbers">
            <div class="container"><a href="tel:+7 927-548-04-05">8 927-548-04-05</a><p> Запись на автомйку</p></div>
            <div class="container"><a href="tel:+7 937-544-44-18">8 937-544-44-18</a><p> Запись на полировку</p></div>
        </section>
        <section class="social_network">
            <a href="https://vk.com/public162539824">Вконтакте</a>
            <a href="https://ok.ru/group55307760697359">Одноклассники</a>
            <a href="">Инстаграм</a>
        </section>
        <div class="upload">
            <a id="toTop"><img src="../assets/img/up.png"></a>
        </div>
        <div class="address">
            Ул. Братьев Сорокиных д. 4а
        </div>
        <div class="name">
            &#169; ООО Автомойка на партизанской
        </div>
    </main>
</template>

<script>
    export default {
        name: "footer-component",
        data(){
            return{
                show: false,
            }
        },
        mounted(){
            document.getElementById('toTop').addEventListener('click', function(e) {
                e.preventDefault();  // запрет перехода по ссылке
                (function (){ //вместо привычного события самовызывающаяся функции
                    let heightSub = (document.documentElement.clientWidth < 813) ? 50 : 0;//см PriceComponent
                    let heightScroll = document.getElementById('splinter').offsetTop - heightSub; // высота елемента + высота окна
                    window.scrollTo({
                        top : heightScroll,
                        behavior : "smooth" // режим плавной прокрутки
                    });
                }())
            });
        }
    }
</script>

<style lang="scss" scoped>

  #footer {
      width: 100%;
      background-color: #f35656;
      .numbers {
          color: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 2% 20% 0;
          text-decoration: none;
          @media screen and (max-width: 1024px){
              padding:20px 0 0;
          }


          .container {
              font-size: 18px;
              text-align: center;
              @media screen and (max-width: 1024px){
                  font-size: 16px;
              }

              a{
                  font-size: 28px;
                  color: white;
                  text-decoration: none;
                  @media screen and (max-width: 1024px){
                      font-size: 20px;
                  }
              }
          }
      }
      .social_network {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 60%;
          padding: 2% 20%;
          @media screen and (max-width: 1024px){
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              align-items: center;
              width: 100%;
              padding: 0;
              margin: 10px auto;
          }
          a{
              font-size: 28px;
              color: white;
              @media screen and (max-width: 1024px){
                  margin: 5px auto;
                  font-size: 24px;
              }
          }

          a:hover {
              transition: .4s;
              color: black;
          }
      }

      .upload {

          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          a{
              cursor: pointer;
              height: 32px;
              width: 32px;
              padding: 16px;
              background-color: white;
              border-radius: 50%;
              @media screen and (max-width: 1024px){
                  height: 24px;
                  width: 24px;
                  padding: 8px;
              }
          }
          img{
              @media screen and (max-width: 1024px){
                  height: 24px;
                  width: 24px;
              }
          }
          a:hover {
              transition: .4s;
              background-color: #1b1a20;
          }
      }


      .address {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 60%;
          padding: 1% 20%;
          text-decoration: none;
          font-size: 26px;
          @media screen and (max-width: 1024px){
              align-items: center;
              width: 100%;
              padding: 10px 0;
              font-size: 22px;
          }
      }
      .name {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 60%;
          padding: 0 20% 2%;
          text-decoration: none;
          font-size: 16px;
          @media screen and (max-width: 1024px){
              width: 100%;
              padding: 0 0 10px;
              font-size: 16px;
          }
      }
      #footer_for_menu {
          height: 50px;
          width: 100%;
      }

  }
</style>
