<template>
    <div id="enter">
        <section id="enterText">
            <h2>Плюсы зарегестрированных пользователей:</h2>
            <p><img class="move_arrow" src="../../assets/img/move_arrow.png"> Только зарегестрированные
            пользователи могут зарабатывать и тратить баллы.</p>
            <p><img class="move_arrow" src="../../assets/img/move_arrow.png"> На Ваш аккаунт сразу же начисляются 100
                баллов, которыми Вы можете рассплачиваться за наши услуги. Подробнее о системе баллов можете прочитать
                перейдя по ссылке, а отслеживать их количество в личном кабинете.</p>

            <p><img class="move_arrow" src="../../assets/img/move_arrow.png"> Будучи зарегестрированным - вы можете
                оставить свой отзыв, пожелание или предложение.</p>
        </section>

        <section id="enterForm">
            <div class="checked">
                <a id="signButton" @click="buttonSignUp()">Регистрация</a>
                <span>/</span>
                <a @click="buttonLogIn()" id="logButton">Вход</a>
            </div>

            <EnterSignInComponent v-show="showSignUp">

            </EnterSignInComponent>

            <EnterLogInComponent v-show="showLogIn">
            </EnterLogInComponent>

        </section>
    </div>
</template>

<script>
    import EnterLogInComponent from '../ComponentsEnterAuth/EnterLogInComponent.vue'
    import EnterSignInComponent from '../ComponentsEnterAuth/EnterSignInComponent.vue'


    export default {
        name: "enter-component",
        components : {
            EnterLogInComponent : EnterLogInComponent,
            EnterSignInComponent : EnterSignInComponent
        },
        data() {
            return {
                showSignUp: false,
                showLogIn: true,
            }
        },
        methods : {
            buttonSignUp: function () {
                this.showSignUp = true;
                this.showLogIn = false;
                document.getElementById('signButton').style.color = '#f35656';
                document.getElementById('logButton').style.color = '#fff';
            },
            buttonLogIn: function () {
                this.showSignUp = false;
                this.showLogIn = true;
                document.getElementById('signButton').style.color = '#fff';
                document.getElementById('logButton').style.color = '#f35656';
            }
        },
        mounted() {
            if (this.showSignUp === true) {
                document.getElementById('signButton').style.color = '#f35656';
            } else {
                document.getElementById('logButton').style.color = '#f35656';
            }

            let elements = document.getElementsByTagName('input');
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('input', function () {
                    elements[i].style.backgroundColor = '#FBFFBD';
                    elements[i].style.height = '46px';
                })
            }
        }
    }
</script>

<style lang="scss">
    #enter {
        @media screen and (max-width: 812px) {
            display: flex;
            justify-content: center;
            width: 90%;
            padding: 3% 5%;
            background-color: #1b1a20;
        }
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-wrap: wrap;
        width: 80%;
        min-height: 350px;
        padding: 3% 10%;
        background-color: #1b1a20;


        #enterText {
            @media screen and (max-width: 812px) {
                width: 100%;
                h2 {
                    width: 100%;
                    text-align: center;
                }
            }
            width: 50%;

            p {
                width: 85%;
                font-size: 18px;
                line-height: 1.4em;
                margin-bottom: 15px;
                @media screen and (max-width: 812px) {
                    width: 100%;
                    font-size: 18px;
                    line-height: 1.4em;
                    margin-bottom: 15px;
                }
            }

            h2 {
                margin-bottom: 15px;
            }

            .move_arrow {
                height: 16px;
                width: 16px;
                margin: 0 2px 0 0;
            }
        }


        #enterForm {
            @media screen and (max-width: 812px) {
                width: 100%;
                margin: 30px 0 20px;

                form {
                    width: 100%;
                }
            }
            width: 40%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .checked {
                @media screen and (max-width: 1024px) {
                    padding: 0 0 20px;
                    font-size: 24px;
                    margin-bottom: 20px;
                    border-bottom: solid 1px grey;
                    letter-spacing: normal;
                }
                text-align: center;
                width: 100%;
                padding: 0 0 40px;
                font-size: 28px;
                margin-bottom: 30px;
                border-bottom: solid 1px grey;
                letter-spacing: 1.6px;

                span {
                    color: #f35656;
                    margin: 0 10px;
                }

                a {
                    cursor: pointer;
                    color: #fff;
                    outline: 0 !important;
                    text-decoration: none;
                    border: none;

                }

                a:hover {
                    color: #f35656;
                }
            }

            input {
                width: calc(100% - 20px);
                height: 50px;
                margin: 10px 0 10px;
                padding: 0 10px;
                font-size: 16px;
                border-radius: 3px;
                border: none;
                outline: none;
            }
            #firstForm input:nth-child(7){
                margin: 10px 0 20px;
            }
            #secondForm input:nth-child(2) {
                margin: 10px 0 20px;
            }

            button:active, button:focus {
                outline: none;
            }

            button::-moz-focus-inner {
                border: 0;
            }

            .user {
                text-transform: uppercase;
                margin: 0 0 10px;
            }

            input::-webkit-input-placeholder {
                text-transform: none !important;
            }

            input:-moz-placeholder {
                text-transform: none !important;
            }

            .reviewLink {
                width: calc(100% - 20px);
                text-align: center;
                transition: .3s;
                height: 50px;
                padding: 0 10px;
                font-size: 24px;
                border: none;
                border-radius: 3px;
                background-color: #f35656;
                color: #fff;
                cursor: pointer;
            }

            .reviewLink:hover {
                color: #f35656;
                background-color: #fff;
            }
        }
    }
</style>
