<template>
    <div id="back">
        <div id="post">Автомойка на Партизанской</div>
        <transition name="fade">
            <component v-if="this.showsDesktop" :is="currentView">
            </component>
        </transition>

        <transition name="fade">
            <component v-if="this.showsMobile" :is="currentViewMobile">
            </component>
        </transition>
    </div>
</template>

<script>
    import show1 from './ComponentTopImg/showOne.vue'
    import show2 from './ComponentTopImg/showSecond.vue'
    import show3 from './ComponentTopImg/showThird.vue'
    import show4 from './ComponentTopImg/showFourth.vue'
    import showMobile1 from './ComponentTopImg/showOneMobile.vue'
    import showMobile2 from './ComponentTopImg/showSecondMobile.vue'
    import showMobile3 from './ComponentTopImg/showThirdMobile.vue'
    import showMobile4 from './ComponentTopImg/showFourthMobile.vue'

    export default {
        name: "vue-top",
        components: {
            show1: show1,
            show2: show2,
            show3: show3,
            show4: show4,
            showMobile1: showMobile1,
            showMobile2: showMobile2,
            showMobile3: showMobile3,
            showMobile4: showMobile4
        },
        data() {
            return {
                currentView: 'show1',
                currentViewMobile: 'showMobile1',
                i: 1,
                showsDesktop: false,
                showsMobile: false,
            }
        },
        methods: {
            changeView: function () {
                this.currentView = 'show' + this.i;
                if (this.i > 3) {
                    this.i = 1;
                } else {
                    this.i++;
                }
                setTimeout(this.changeView, 4000)
            },
            changeViewMobile: function () {
                this.currentViewMobile = 'showMobile' + this.i;
                if (this.i > 3) {
                    this.i = 1;
                } else {
                    this.i++;
                }
                setTimeout(this.changeViewMobile, 4000)
            }
        },
        created() {
            if (document.documentElement.clientWidth < 813) {
                this.showsMobile = true;
                this.changeViewMobile()
            } else {
                this.showsDesktop = true;
                this.changeView()
            }

        }
    }
</script>

<style lang="scss" scoped>

    #back {
        width: 100vw;
        height: 100vh;

        #post {
            width: 100vw;
            color: white;
            text-align: center;
            top: 40%;
            position: absolute;
            z-index: 4;
            font-size: 88px;
            @media screen and (max-width: 812px) {
                font-size: 46px;
            }
            @media screen and (min-width: 812px) and (max-width: 1300px) {
                font-size: 72px;
            }


        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: 1s;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-leave-to {
        opacity: 0;
    }
</style>
