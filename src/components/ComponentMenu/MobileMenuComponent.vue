<template>
    <section>
        <div id="menu_for_mobile">
            <router-link to="/"><a @click="homeScroll()"><img src="../../assets/img/home-interface.png" alt=""></a>
            </router-link>
            <a href="https://yandex.ru/maps/?z=17&ll=45.37873199999998,50.086487000004986&l=map&rtext=~50.08657,45.3787&origin=jsapi_2_1_72&from=api-maps"><img
                src="../../assets/img/placeholder.png" alt=""></a>
            <router-link to="/profile"><img @click="closeSideMenu()" src="../../assets/img/profile-user.png" alt="">
            </router-link>
            <button id="menu_button" @click="openCloseSideMenu()"><img src="../../assets/img/menu-button.png" alt="">
            </button>
        </div>
        <img style="display: none" src="../../assets/img/ImgForTopTemplate/FourthForTopImgMobile.jpg" alt="">
        <img style="display: none" src="../../assets/img/ImgForTopTemplate/SecondForTopImgMobile.jpg" alt="">
        <img style="display: none" src="../../assets/img/ImgForTopTemplate/ThirdForTopImgMobile.jpg" alt="">
        <img style="display: none" src="../../assets/img/ImgForTopTemplate/FirstForTopImgMobile.jpg" alt="">
        <transition name="menu">
            <div v-if="show" id="menu_side">
                <ul>
                    <li>
                        <router-link class="sideMenu" @click="homeScroll()" to="/"><img class="move_arrow"
                                                                  src="../../assets/img/move_arrow.png">Домашняя
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sideMenu" to="/about"><img class="move_arrow"
                                                                       src="../../assets/img/move_arrow.png">О нас
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sideMenu" to="/price"><img class="move_arrow"
                                                                       src="../../assets/img/move_arrow.png">Цены
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sideMenu" to="/profile"><img class="move_arrow"
                                                                         src="../../assets/img/move_arrow.png">Профиль
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sideMenu" to="/reviews"><img class="move_arrow"
                                                                         src="../../assets/img/move_arrow.png">Отзывы
                        </router-link>
                    </li>
                    <li>
                        <router-link v-if="enterShow" class="sideMenu" to="/enter"><img class="move_arrow"
                                                                                        src="../../assets/img/move_arrow.png">Войти
                        </router-link>
                        <button v-if="outShow" class="sideMenu" @click="deleteToken()"><img class="move_arrow"
                                                                                            src="../../assets/img/move_arrow.png">Выйти
                        </button>
                    </li>
                </ul>
            </div>
        </transition>
    </section>
</template>

<script>

    export default {
        name: "mobile-menu-component",
        data() {
            return {
                show: false,
                enterShow: true,
                outShow: true,
            }
        },
        methods: {
            openCloseSideMenu: function () {
                this.checkStorage();
                var that = this;
                this.show = !this.show;
                let elem = document.getElementById('menu_button');
                let elements = document.getElementsByClassName('blur');
                if (this.show === true) {
                    elem.style.transform = 'rotate(-90deg)';
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.filter = 'blur(3px)';
                        elements[i].addEventListener('click', this.closeSideMenu)
                    }
                } else {
                    elem.style.transform = 'rotate(0)';
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.filter = 'none'
                    }
                }
            },
            deleteToken() {
                localStorage.removeItem('auth_token');
                window.location.href = '/'
            },
            checkStorage() {
                if (localStorage.getItem('auth_token')) {
                    this.enterShow = false;
                    this.outShow = true;
                } else {
                    this.enterShow = true;
                    this.outShow = false;
                }
            },
            closeSideMenu: function () {
                if (this.show === true) {
                    this.show = false;
                    document.getElementById('menu_button').style.transform = 'rotate(0)';
                    let elements = document.getElementsByClassName('blur');
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.filter = 'none';
                        elements[i].removeEventListener('click', this.closeSideMenu )
                    }
                }
            },
            homeScroll: function () {
                if (this.show === true) {
                    this.show = false;
                    document.getElementById('menu_button').style.transform = 'rotate(0)';
                    let elements = document.getElementsByClassName('blur');
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].style.filter = 'none'
                    }
                }

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
            this.checkStorage()
        },
        updated() {
            if (this.show) {
                let elements = document.getElementsByClassName('sideMenu');
                for (let i = 1; i < elements.length; i++) {
                    elements[i].addEventListener('click', this.closeSideMenu);
                }
                elements[0].addEventListener('click', this.homeScroll);//задать свойства opacity для homecomponent
            }
        }
    }
</script>

<style lang="scss" scoped>
    $pink: #f35656;
    $black: #1b1a20;
    $grey: dimgrey;

    #menu_for_mobile {
        position: fixed;
        display: flex;
        justify-content: space-around;
        align-items: center;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: $black;
        z-index: 10;
        border-bottom: solid 1px $grey;
    }

    #menu_side {
        position: fixed;
        z-index: 5;
        bottom: 0;
        opacity: .95;
        left: 0;
        height: calc(100% - 51px);
        width: 70%;
        max-width: 300px;
        background-color: $black;
    }

    #menu_side ul {
        height: 100%;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

    }

    #menu_side li {
        display: flex;
        align-items: center;
        border-top: solid $grey 1px;
        font-size: 18px;
        height: calc(100% / 6 - 1px);
        width: 100%;

    }

    .move_arrow {
        height: 18px;
        width: 18px;
        margin: 0 5px 0 0;
    }

    .sideMenu {
        font-size: 18px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 0 0 20px;
        height: 100%;
        color: white;

    }

    #menu_side li:last-child {
        border-bottom: solid $grey 1px;

    }

    #menu_side li:first-child {
        border: none;

    }

    .menu-enter-active, .menu-leave-active {
        transition: ease-in-out .3s;
    }

    .menu-enter {
        transform: translateX(-100%);
    }

    .menu-leave-to {
        transform: translateX(-100%);
    }

    #menu_button {
        transition: ease .3s;
    }
</style>
