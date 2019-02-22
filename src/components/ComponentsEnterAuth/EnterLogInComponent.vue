<template>
    <form @submit.prevent="logIn()" id="secondForm">
        <input spellcheck="false" required title="Введите логин в формате: А777АА134" pattern="^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$" @input="checkBorderUserInput('user')"
               @change="checkBorderUserChange('user')" type="text" class="user" placeholder="Логин (номер автомобиля)" v-model="user"/>
        <input spellcheck="false" id="test" type="password" required placeholder="Пароль" pattern="[a-zA-Z0-9]{9,}" title="Введите правильный пароль"
               v-model="password" class="password" @input="checkPasswordBorderInput('password')" @change="checkPasswordBorderChange('password')" />
        <button type="submit" class="reviewLink">Войти</button>
    </form>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "EnterLogInComponent",
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods : {
            logIn() {
                let that = this;
                axios.post('http://88.212.253.142/auth/token/create/', {
                    username : this.user.toUpperCase(),
                    password : this.password
                })
                    .then(response => {
                        localStorage.setItem('auth_token', response.data.auth_token);
                        window.location.href = '/';
                    })
                    .catch(e => {
                        alert('Не верно введен логин или пароль')
                    });
            },

            checkBorderUserInput: function (user) {
                document.getElementsByClassName(user)[1].style.border = 'solid 2px yellow';
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementsByClassName(user)[1].style.border = 'solid 2px #01FA00';
                }
            },
            checkBorderUserChange: function (user) {
                if (/^[а-яА-Я]\d{3}[а-яА-Я]{2}\d{2,3}$/.test(this.user)) {
                    document.getElementsByClassName(user)[1].style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementsByClassName(user)[1].style.border = 'solid 2px red';
                }
            },

            checkPasswordBorderInput: function (password) {
                document.getElementsByClassName(password)[1].style.border = 'solid 2px yellow';
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementsByClassName(password)[1].style.border = 'solid 2px #01FA00';
                }
            },
            checkPasswordBorderChange: function (password) {
                if ((/[a-zA-Z]/).test(this.password) && (/[0-9]/).test(this.password) && this.password.length > 9 && !(/[а-яА-Я]/).test(this.password)) {
                    document.getElementsByClassName(password)[1].style.border = 'solid 2px #01FA00';
                } else {
                    document.getElementsByClassName(password)[1].style.border = 'solid 2px red';
                }
            },
        }
    }
</script>

<style>
    /*стили находятся в шаблоне EnterComponent  cd ../ComponentContentRouter/EnterComponent*/
</style>
