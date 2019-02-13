<template>
    <div id="enter">
        <section id="enterText">
            <h2>Плюсы зарегестрированных пользователей:</h2>
            <p><img class="move_arrow" src="/src/assets/img/move_arrow.png"> На Ваш аккаунт сразу же начисляются 100
                баллов, которыми Вы можете рассплачиваться за наши услуги. Подробнее о системе баллов можете прочитать
                перейдя по ссылке, а отслеживать их количество в личном кабинете.</p>
            <p><img class="move_arrow" src="/src/assets/img/move_arrow.png"> Кроме того, только зарегестрированные
                пользователи могут зарабатывать и тратить баллы.</p>
            <p><img class="move_arrow" src="/src/assets/img/move_arrow.png"> Будучи зарегестрированным - вы можете
                оставить свой отзыв, пожелание или предложение.</p>
        </section>
        <section id="enterForm">
            <div class="checked">
                <button id="signButton" @click="buttonSignUp()">Регистрация</button>
                <span>/</span>
                <button @click="buttonLogIn()" id="logButton">Вход</button>
            </div>
            <form v-show="showSignUp">
                <span>Например A777AA134</span>
                <input spellcheck="false" @change="checkBorderUserChange('user')"
                       pattern="^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$" required title="А777АА134"
                       @input="checkBorderUserInput('user')" id="user" type="text"
                       placeholder="Логин (номер автомобиля)" v-model="user"/>
                <span>Пароль должен быть не менее 10 символов.</span>
                <p>Пароль должен состоять из латинских букв и цифр.</p>
                <input spellcheck="false" @change="checkPasswordBorderChange('password')" pattern="[a-zA-Z0-9]{9,}"
                       type="password" required
                       title="Пароль должен содержать хотя бы 1 букву и 1 цифру и буквы должны быть латинские, а длина пароля не менее 10 символов!"
                       placeholder="Пароль" @input="checkPasswordBorderInput('password')" id="password"
                       v-model="password"/>
                <span>Пароли должны совпадать.</span>
                <input spellcheck="false" @input="checkPasswordInput()" @change="checkPasswordChange()"
                       v-bind:pattern="password" required title="Должен совпадать с верхнем полем" type="password"
                       id="twoPassword" placeholder="Повторите пароль" v-model="twoPassword"/>
                <button type="submit" class="reviewLink">Зарегистрироваться</button>
            </form>
            <form id="secondForm" v-show="showLogIn">
                <input spellcheck="false" pattern="^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$" required title="А777АА134"
                       type="text" placeholder="Логин (номер автомобиля)" v-model="user"/>
                <input spellcheck="false" pattern="[a-zA-Z0-9]{9,}" type="password" required placeholder="Пароль"
                       v-model="password"/>
                <button type="submit" class="reviewLink">Войти</button>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "enter-component",
        data() {
            return {
                user: '',
                password: '',
                twoPassword: '',
                showSignUp: true,
                showLogIn: false,
            }
        },
        methods: {
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
            },

            checkBorderUserInput: function (user) {
                document.getElementById(user).style.border = 'solid 2px yellow';
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementById(user).style.border = 'solid 2px #01FA00';
                }
            },
            checkBorderUserChange: function (user) {
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementById(user).style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById(user).style.border = 'solid 2px red';
                }
            },

            checkPasswordBorderInput: function (password) {
                document.getElementById(password).style.border = 'solid 2px yellow';
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementById(password).style.border = 'solid 2px #01FA00';
                }
            },
            checkPasswordBorderChange: function (password) {
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementById(password).style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById(password).style.border = 'solid 2px red';
                }
            },

            checkPasswordChange: function () {
                if (this.password === this.twoPassword) {
                    document.getElementById('twoPassword').style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById('twoPassword').style.border = 'solid 2px red';
                }
            },
            checkPasswordInput: function () {
                if (this.password === this.twoPassword) {
                    document.getElementById('twoPassword').style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById('twoPassword').style.border = 'solid 2px yellow';
                }
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

<style lang="scss" scoped>
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
        align-items: center;
        flex-wrap: wrap;
        width: 80%;
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
                margin-bottom: 40px;
                border-bottom: solid 1px grey;
                letter-spacing: 1.6px;

                span {
                    color: #f35656;
                    margin: 0 10px;
                }

                button {
                    cursor: pointer;
                    color: #fff;
                    outline: 0 !important;
                    text-decoration: none;
                    border: none;

                }

                button:hover {
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

            #secondForm input:nth-child(2) {
                margin: 10px 0 20px;
            }

            button:active, button:focus {
                outline: none;
            }

            button::-moz-focus-inner {
                border: 0;
            }

            #user {
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
