<template>
    <div id="profile">
      <h2 id="profileHead">Добро пожаловать в Ваш личный кабинет, {{user.name}} !</h2>
      <div id="profileData">
          <img title="Ваш номер подтвержден!" id="imgUser" src="../../assets/img/usershadow.png"/>
          <section>
              <p>Ваш номер: {{user.numberCar}} подтвержден!</p>
              <p>На данный момент на вашем аккаунте {{user.points}} балла, которые вы можете использовать.</p>
              <button type="submit"  class="reviewLink">Выйти из аккаунта</button>
          </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "profile-component",
        data(){
          return{
              user : {
                  name : 'Беликов Игорь Валерьевич',
                  numberCar : 'М102РТ34',
                  points : 124
              }
          }
        }
    }
</script>

<style lang="scss" scoped>

  $pink : #f35656;
  $black : #1b1a20;
  $grey : dimgrey;

      #profile{
          background-color: $black;
          width: 100%;
          text-align: center;

          #profileHead{
              border-bottom: solid 1px $grey;
              padding: 50px 20px;
          }

          #profileData{
              @media screen and (min-width: 1024px){
                width: 70%;
                padding: 5% 15%;
              }
              width: 90%;
              padding: 5% ;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              @media screen and (max-width: 476px){
                justify-content: center;
              }

              #imgUser{
                  max-width: 40%;
                  border: solid 2px greenyellow;
                  padding: 20px;
                  border-radius: 50%;
                  @media screen and (max-width: 476px){
                      max-width: 90%;
                      margin-bottom: 20px;

                  }
              }
              section{
                  max-width: 60%;
                  @media screen and (max-width: 476px){
                    max-width: 90%;
                  }
                  p{
                      text-align: start;
                      margin-bottom: 20px;
                      font-size: 20px;
                  }
                  .reviewLink {
                    width: calc(100% - 40px);
                    transition: .3s;
                    height: 50px;
                    padding: 0 20px;
                    font-size: 24px;
                    border: none;
                    border-radius: 3px;
                    background-color: #f35656;
                    color: #fff;
                    cursor: pointer;
                  }
                  .reviewLink:hover {
                    background-color: #fff;
                    color: #f35656;
                  }
              }

          }
      }
</style>
