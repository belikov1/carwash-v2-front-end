<template>
    <div id="back">
        <div id="post">Автомойка на Партизанской</div>
        <transition name="fade">
            <component :is="currentView">
            </component>
        </transition>
    </div>
</template>

<script>
    import show1 from './ComponentTopImg/showOne.vue'
    import show2 from './ComponentTopImg/showSecond.vue'
    import show3 from './ComponentTopImg/showThird.vue'
    import show4 from './ComponentTopImg/showFourth.vue'

    export default {
        name: "vue-top",
        components: {
            show1: show1,
            show2: show2,
            show3: show3,
            show4: show4
        },
        data() {
            return {
                currentView: 'show1',
                i: 1,
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
            }
        },
        created() {
            this.changeView()


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
