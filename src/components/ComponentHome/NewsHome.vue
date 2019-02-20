<template>
    <div id="reviews_home">
        <span>Новая система скидок:</span>
        <section class="reviews_home_head">
            <div class="reviews_home">
                <div><p>Дорогие друзья, мы с Вами уже 15 лет! И поэтому рады сообщить Вам, что совсем скоро состоится запуск новой
                    Бонусной программы. Теперь за каждую услугу, которой Вы воспользуетесь у нас, Вам будут начисляться
                    бонусные баллы! А именно...</p></div>
                <div>
                    <router-link @click="menuButtonActive()" to="/about">Читать больше</router-link>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
    export default {
        name: "reviews-home",
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
            }
        }

    }
</script>

<style lang="scss">


    #reviews_home {
        z-index: 20;
        padding: 0 10%;
        margin: 2% 0;
        opacity: 1;
        text-align: center;
        @media screen and (max-width: 812px) {
            padding: 0 2%;
        }
        span{
            font-size: 26px;
        }
        .reviews_home_head {
            padding: 3%;
            border: solid 3px white;
            border-radius: 15px;
            margin: 3% 0 1% 0;
            line-height: 1.3em;
            text-align: center;
            font-size: 18px;
            @media screen and (max-width: 812px) {
                line-height: 1.2em;
            }

            a {
                color: #f35656;
                font-style: oblique;
            }

            a:hover {
                color: #f35656;
            }
        }
    }

</style>
