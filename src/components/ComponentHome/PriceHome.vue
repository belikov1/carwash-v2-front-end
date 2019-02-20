<template>
    <div id="price_home">
        <div id="price-head-home">
            <div class="price-head1">
                <div class="price-head">

                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="moyka"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/Moyka.jpg" alt=""
                        class="price-head-img" >Мойка кузова</a></div>
                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="himch"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/himchistka.jpg" alt=""
                        class="price-head-img">Химчистка</a></div>


                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="polir"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/polirovka.jpg" alt=""
                        class="price-head-img">Полировка</a></div>
                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="dop"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/dop.jpg" alt=""
                        class="price-head-img">Доп. услги</a></div>

                </div>
                <div class="price-head">

                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="zash"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/ZashitnoePokr.jpg" alt=""
                        class="price-head-img" @click.prevent="pageTo()">Защитное покрытие</a>
                    </div>
                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="kovry"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/kovry.jpg" alt=""
                        class="price-head-img">Химчистка ковров</a>
                    </div>

                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="nlenka"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/nlenka.jpg" alt=""
                        class="price-head-img">Антигравийная
                        пленка</a></div>
                    <div class="price-head-one" @click.prevent="pageTo()"><a data-scroll-to="winom"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/winom.jpg" alt=""
                        class="price-head-img">Шиномантаж</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "price-home",
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
            pageTo() {
                this.$router.push('/price');
                this.menuButtonActive()
            }
        }
    }
</script>

<style lang="scss">


    .price-head1 {
        height: 100%;
        margin: 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
    .price-head {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        @media screen and (max-width: 1599px) and (min-width: 1000px) {
            width: 80%;
        }
        @media screen and (max-width: 799px) and (min-width: 600px) {
            width: 70%;
        }
    }
    .price-head-one {
        cursor: pointer;
        display: flex;
        overflow: hidden;
        width: 180px;
        height: 100%;
        margin: 10px 10px;
        text-align: center;
        @media screen and (max-width: 1599px) and (min-width: 1100px) {
            width: 200px;
        }
    }

    .price-head-one a {
        height: 100%;
        font-size: 20px;
        color: white;
    }

    .price-head-one:hover {
        transform: scale(1.1);
    }

    .price-head-one a:hover {
        color: #f35656;
    }

    .price-head-img {
        margin: 0 0 10px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    #price_home {
        z-index: 2;
        position: relative;
        margin: 0 0 -1px 0;
        background: #1b1a20;
        padding: 2% 0;
    }

</style>
