<template>
    <div>
        <section id="menu" >
            <div class="menu_wrapped">
                <router-link class="menu_button_up" to="/">Домашняя</router-link>
                <router-link class="menu_button_up" to="/about">О нас</router-link>
                <router-link class="menu_button_up" to="/price">Цены</router-link>
                <router-link class="menu_button_up" to="/reviews">Отзывы</router-link>
                <router-link class="menu_button_up" to="/profile">Профиль</router-link>
                <router-link class="menu_button_up" to="/enter">Войти</router-link>
            </div>
        </section>
        <div  id="fake"></div>
    </div>
</template>

<script>
    import {map} from '../ComponentHome/MapComponent'
    export default {
        name: "default-menu-component",
        methods : {
            menuButtonActive : function () {
                //функция для подсветки выбранного пункта меню
                //так как при переключении страница не обновляется, необходимо добавить её собатием на каждую ссылку
                let location = window.location.href.split('/').splice(-1)[0];
                if(location.indexOf('#')!== -1){
                    location = location.slice(0, location.indexOf('#'))
                }
                let elements = document.getElementsByClassName('menu_button_up');
                for(let i = 0; i < elements.length; i++){
                    let link = elements[i].href.split('/').splice(-1)[0];
                    if(link === location){
                        elements[i].style.backgroundColor = '#ffffff';
                        elements[i].style.color = '#f35656';
                    }else{
                        elements[i].style.backgroundColor = '#f35656';
                        elements[i].style.color = '#ffffff';
                    }
                }
            },
            defaultMenuAnimation : function () {
                if(document.documentElement.clientWidth > 812){
                    let ST = document.documentElement.scrollTop;
                    let ST2 = document.getElementById('splinter').offsetTop;
                    if(ST <= ST2){
                        document.getElementById('menu').style.position = 'relative';
                        document.getElementById('fake').style.display = 'none';
                    }else{
                        document.getElementById('menu').style.position = 'fixed';
                        document.getElementById('menu').style.top = '0';
                        document.getElementById('fake').style.display = 'block';
                    }
                }
            },
          homeScroll : function () {

            function autoScroll() {
              ymaps.ready(map);
              let ST = document.documentElement.scrollTop;
              if(document.getElementsByClassName('price-head-home-one')[0].offsetTop < ST + document.documentElement.clientHeight / 2){
                let elements = document.getElementsByClassName('price-head-home-one');
                for(let i = 0; i < elements.length; i++){
                  elements[i].classList.add('homeAnimation')
                }
              }

              if(document.getElementById('navigation').offsetTop < ST + document.documentElement.clientHeight / 2){
                let elements = document.getElementsByClassName('navigation');
                for(let i = 0; i < elements.length; i++){
                  elements[i].classList.add('homeAnimation')
                }
              }

              if(document.getElementById('reviews_home').offsetTop < ST + document.documentElement.clientHeight){
                document.getElementById('reviews_home').classList.add('homeAnimation');
              }

            }
            setTimeout(autoScroll, 10)
          }
        },
        created(){
            window.addEventListener('scroll', this.defaultMenuAnimation);
        }
        ,
        mounted(){
            this.menuButtonActive(); //подсветить выбранную ссылку в меню
                let elements = document.getElementsByClassName('menu_button_up');
                for(let i = 0; i < elements.length; i ++){
                    elements[i].addEventListener('click', this.menuButtonActive);
                }
                elements[0].addEventListener('click', this.homeScroll);//задать свойства opacity для homecomponent
        },
        destroyed(){
            window.removeEventListener('scroll', this.defaultMenuAnimation);
        }
    }
</script>

<style scoped>
  #menu{
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    background-color: #f35656;
    z-index: 100;
    height: 15vh;
    max-height: 160px;
    min-height: 120px;
  }

  .menu_wrapped{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 78%;
    list-style: none;
    z-index: 100;
  }

  .menu_wrapped a {
    opacity: 1!important;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    height: 100%;
    color: #ffffff;
  }
  .menu_wrapped div {
    opacity: 1!important;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 28px;
  }

  #menu a:hover {
    transition: .4s;
    background-color: #ffffff;
    color: #f35656;
  }
  .fixed {
    position: fixed;
    top: 0;
  }
  #fake{
    display: none;
    height: 15vh;
    max-height: 160px;
    min-height: 120px;
  }
  @media screen and (max-width: 1300px){
    .menu_wrapped{
      width: 100%;
    }
    .menu_wrapped a {
      width: 100%;
      font-size: 26px;
    }
  }
</style>
