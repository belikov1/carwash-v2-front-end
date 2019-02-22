<template>
    <form id="firstForm" @submit.prevent="signUp()">
        <p class="aboutSign"><img class="move_arrow2" src="../../assets/img/move_arrow.png">Логин - это номер автомобиля.</p>
        <p class="aboutSign"><img class="move_arrow2" src="../../assets/img/move_arrow.png">Пароль должен быть не менее 10 символов.</p>
        <p class="aboutSign"><img class="move_arrow2" src="../../assets/img/move_arrow.png">Пароль должен состоять из латинских букв и цифр.</p>
        <input spellcheck="false" @change="checkBorderUserChange('user')"
               pattern="^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$" required title="А777АА134"
               @input="checkBorderUserInput('user')" class="user" type="text" v-model="user"
               placeholder="Логин (номер автомобиля)"/>

        <input spellcheck="false" @change="checkPasswordBorderChange('password')" pattern="[a-zA-Z0-9]{9,}"
               type="text" required
               title="Пароль должен содержать хотя бы 1 букву и 1 цифру и буквы должны быть латинские, а длина пароля не менее 10 символов!"
               placeholder="Пароль" @input="checkPasswordBorderInput('password')" class="password" v-model="password"
        />
        <input spellcheck="false" @change="checkPasswordChange()" v-bind:pattern="password"
               type="text" required id="checkPassword"
               title="Пароли должен совпадать!"
               placeholder="Повторите пароль" @input="checkPasswordInput()"  v-model="checkPassword"
        />

        <input spellcheck="false"
               title="Email должен быть кореетным" type="text"
               id="email" placeholder="Введите ваш Email" v-model="email"/>

        <button type="submit" class="reviewLink">Зарегистрироваться</button>

    </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "EnterSignInComponent",
        data() {
            return {
                user: '',
                password: '',
                checkPassword: '',
                email: ''
            }
        },
        methods: {

            checkBorderUserInput: function (user) {
                document.getElementsByClassName(user)[0].style.border = 'solid 2px yellow';
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementsByClassName(user)[0].style.border = 'solid 2px #01FA00';
                }
            },
            checkBorderUserChange: function (user) {
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementsByClassName(user)[0].style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementsByClassName(user)[0].style.border = 'solid 2px red';
                }
            },

            checkPasswordBorderInput: function (password) {
                document.getElementsByClassName(password)[0].style.border = 'solid 2px yellow';
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementsByClassName(password)[0].style.border = 'solid 2px #01FA00';
                }
            },
            checkPasswordBorderChange: function (password) {
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementsByClassName(password)[0].style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementsByClassName(password)[0].style.border = 'solid 2px red';
                }
            },

            checkPasswordChange: function () {
                if (this.password === this.checkPassword) {
                    document.getElementById('checkPassword').style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById('checkPassword').style.border = 'solid 2px red';
                }
            },
            checkPasswordInput: function () {
                if (this.password === this.checkPassword) {
                    document.getElementById('checkPassword').style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementById('checkPassword').style.border = 'solid 2px yellow';
                }
            },
            signUp() {
                let that = this;
                axios.post('http://88.212.253.142/auth/users/create/', {
                    username: this.user.toUpperCase(),
                    password: this.password,
                    email: this.email,
                })
                    .then(response => {
                        axios.post('http://88.212.253.142/auth/token/create/', {
                            username: this.user.toUpperCase(),
                            password: this.password
                        })
                            .then(response => {
                                localStorage.setItem('auth_token', response.data.auth_token);
                                window.location.href = '/';
                            })
                    })
                    .catch(response => {
                        alert('Данный логин уже занят другим пользователем')
                    });
            }
        }
    }
</script>

<style>
    /*стили находятся в шаблоне EnterComponent  cd ../ComponentContentRouter/EnterComponent*/
    .move_arrow2 {
        height: 16px;
        width: 16px;
        margin: 0 2px 0 0;
    }
    .aboutSign{
        margin: 10px 0;
    }
</style>
