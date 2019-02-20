<template>
    <div>
        <section id="menu">
            <div class="menu_wrapped">
                <router-link class="menu_button_up menu-link" to="/">Домашняя</router-link>
                <router-link class="menu_button_up menu-link" to="/about">О нас</router-link>
                <router-link class="menu_button_up menu-link" to="/price">Цены</router-link>
                <router-link class="menu_button_up menu-link" to="/reviews">Отзывы</router-link>
                <router-link class="menu_button_up menu-link" to="/profile">Профиль</router-link>
                <router-link v-if="enterShow" class="menu_button_up menu-link" to="/enter">Войти</router-link>
                <button v-if="outShow" class="menu-link" @click="deleteToken()">Выйти</button>
            </div>
            <img style="display: none" src="../../assets/img/ImgForTopTemplate/FourthForTopImg.jpg" alt="">
            <img style="display: none" src="../../assets/img/ImgForTopTemplate/SecondForTopImg.jpg" alt="">
            <img style="display: none" src="../../assets/img/ImgForTopTemplate/ThirdForTopImg.jpg" alt="">
            <img style="display: none" src="../../assets/img/ImgForTopTemplate/FirstForTopImg.jpg" alt="">
        </section>
        <div id="fake"></div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                enterShow : false,
                outShow : false,
            }
        },
        name: "default-menu-component",
        methods: {
            menuButtonActive: function () {
                //функция для подсветки выбранного пункта меню
                let location = window.location.href.split('/').splice(-1)[0];
                if (location.indexOf('#') !== -1) {
                    location = location.slice(0, location.indexOf('#'))
                }
                let elements = document.getElementsByClassName('menu_button_up');
                for (let i = 0; i < elements.length; i++) {
                    let link = elements[i].href.split('/').splice(-1)[0];
                    if (link === location) {
                        elements[i].style.backgroundColor = '#ffffff';
                        elements[i].style.color = '#f35656';
                    } else {
                        elements[i].style.backgroundColor = '#f35656';
                        elements[i].style.color = '#ffffff';
                    }
                }
            },
            deleteToken(){
                localStorage.removeItem('auth_token');
                this.checkStorage();
                window.location.href = '/'
            },
            checkStorage(){
                if(localStorage.getItem('auth_token')){
                    this.enterShow = false;
                    this.outShow = true;
                }else {
                    this.enterShow = true;
                    this.outShow = false;
                }
            },
            defaultMenuAnimation: function () {
                //функция меняющая свойтво position у меню
                if (document.documentElement.clientWidth > 812) {
                    let ST = document.documentElement.scrollTop;
                    let ST2 = document.getElementById('splinter').offsetTop;
                    if (ST <= ST2) {
                        document.getElementById('menu').style.position = 'relative';
                        document.getElementById('fake').style.display = 'none';
                    } else {
                        document.getElementById('menu').style.position = 'fixed';
                        document.getElementById('menu').style.top = '0';
                        document.getElementById('fake').style.display = 'block';
                    }
                }
            },
            homeScroll: function () {

                function autoScroll() {
                    let ST = document.documentElement.scrollTop;
                    if (document.getElementById('price-head-home').offsetTop < ST + document.documentElement.clientHeight / 2) {
                        let element = document.getElementById('price-head-home');
                        element.classList.add('homeAnimation')

                    }

                    if (document.getElementById('navigation').offsetTop < ST + document.documentElement.clientHeight / 2) {
                        let elements = document.getElementsByClassName('navigation');
                        for (let i = 0; i < elements.length; i++) {
                            elements[i].classList.add('homeAnimation')
                        }
                    }

                    if (document.getElementById('reviews_home').offsetTop < ST + document.documentElement.clientHeight) {
                        document.getElementById('reviews_home').classList.add('homeAnimation');
                    }
                }
                setTimeout(autoScroll, 10)
            }
        },
        created() {
            this.checkStorage();
            window.addEventListener('scroll', this.defaultMenuAnimation);
        },
        mounted() {
            this.menuButtonActive(); //подсветить выбранную ссылку в меню
            let elements = document.getElementsByClassName('menu_button_up');
            //так как при переключении страница не обновляется, необходимо добавить её событием на каждую ссылку
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', this.menuButtonActive);
            }
            elements[0].addEventListener('click', this.homeScroll);//задать свойства opacity = 1 для homecomponent
        },
        destroyed() {
            window.removeEventListener('scroll', this.defaultMenuAnimation);
        }
    }
</script>

<style scoped>
    #menu {
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

    .menu_wrapped {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 78%;
        list-style: none;
        z-index: 100;
    }

    .menu-link {
        opacity: 1 !important;
        cursor: pointer;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        height: 100%;
        color: #ffffff;
    }

    .menu_wrapped div {
        opacity: 1 !important;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 28px;
    }

    .menu-link:hover {
        transition: .4s;
        background-color: #ffffff !important;
        color: #f35656 !important;
    }

    .fixed {
        position: fixed;
        top: 0;
    }

    #fake {
        display: none;
        height: 15vh;
        max-height: 160px;
        min-height: 120px;
    }

    @media screen and (max-width: 1300px) {
        .menu_wrapped {
            width: 100%;
        }

        .menu-link {
            width: 100%;
            font-size: 26px;
        }
    }
</style>
