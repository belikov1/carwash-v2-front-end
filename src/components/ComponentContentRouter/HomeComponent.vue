<template>
    <div>
        <navigation-bar-home></navigation-bar-home>
        <News-home></News-home>
        <price-home></price-home>
        <iframe v-if="map" class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A139dc2a8eb8a9d890562ecc4657349da8342379554ae62a574e58a129693ecda&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        <a v-if="mapMobile" class="map" href="https://yandex.ru/maps/?z=17&ll=45.37873199999998,50.086487000004986&l=map&rtext=~50.08657,45.3787&origin=jsapi_2_1_72&from=api-maps"><div id="map"></div></a>
    </div>
</template>

<script>
    import NavigationBarHome from '../ComponentHome/NavigitionBarHome.vue'
    import NewsHome from '../ComponentHome/NewsHome.vue'
    import PriceHome from '../ComponentHome/PriceHome.vue'

    export default {
        components: {
            NavigationBarHome: NavigationBarHome,
            NewsHome: NewsHome,
            PriceHome: PriceHome,
        },
        data(){
          return{
              map : false,
              mapMobile: false
          }
        },
        name: "home-component",
        methods: {
            homeAnimation: function () {
                let ST = document.documentElement.scrollTop;
                let href = window.location.href.split('/').splice(-1)[0];
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
        },
        created() {
            window.addEventListener('scroll', this.homeAnimation);
            if(document.documentElement.clientWidth < 813){
                this.mapMobile = true;
            } else {
                this.map = true;
            }

        },
        destroyed() {
            window.removeEventListener('scroll', this.homeAnimation);
        }
    }
</script>

<style lang="scss" scoped>
    .map{
        margin-bottom: -2px;
    }
    #map{
        background: url("../../assets/img/map.png") center center;
        width: 100%;
        height: 300px;
        @media screen and (max-width: 812px) and (max-height: 400px) {
            height: 250px;

        }
    }
</style>
