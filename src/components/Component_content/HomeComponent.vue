<template>
    <div>
        <navigation-bar-home> </navigation-bar-home>
        <reviews-home> </reviews-home>
        <price-home> </price-home>
        <map-component> </map-component>
    </div>
</template>

<script>
    import NavigationBarHome from '../ComponentHome/NavigitionBarHome.vue'
    import ReviewsHome from '../ComponentHome/ReviewsHome.vue'
    import PriceHome from '../ComponentHome/PriceHome.vue'
    import MapComponent from '../ComponentHome/MapComponent.vue'
    export default {
        components : {
            NavigationBarHome : NavigationBarHome,
            ReviewsHome : ReviewsHome,
            PriceHome : PriceHome,
            MapComponent : MapComponent
        },
        name: "home-component",
        methods : {
            homeAnimation : function () {
                let ST = document.documentElement.scrollTop;
                let href = window.location.href.split('/').splice(-1)[0];
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
        },
        created(){
            window.addEventListener('scroll', this.homeAnimation );
        },
        destroyed(){
            window.removeEventListener('scroll', this.homeAnimation );
        }
    }
</script>

<style scoped>

</style>
