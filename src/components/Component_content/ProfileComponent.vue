<template>
    <div id="profile">
        <h2 id="profileHead">Добро пожаловать в Ваш личный кабинет!</h2>
        <div id="profileData">
            <img title="Ваш номер подтвержден!" id="imgUser" src="../../assets/img/usershadow.png"/>
            <section>
                <p><img class="move_arrow" src="../../assets/img/move_arrow.png">Ваш номер: {{user.username}} подтвержден!</p>
                <p><img class="move_arrow" src="../../assets/img/move_arrow.png">На данный момент на вашем аккаунте {{user.points}} баллов, которые вы можете использовать. <span>( бальная система скоро вступит в силу )</span></p>
            </section>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "profile-component",
        data() {
            return {
                user: {
                    username: '',
                    points: 100
                }
            }
        },
        created() {
            let that = this;
            axios.get('http://www.moykanp.ru/auth/users/me/', {headers: {Authorization: 'token ' + localStorage.getItem('auth_token')}})
                .then(response => {
                    that.user.username = response.data.username
                })
                .catch(e => {
                });
        }
    }
</script>

<style lang="scss" scoped>

    $pink: #f35656;
    $black: #1b1a20;
    $grey: dimgrey;

    #profile {
        background-color: $black;
        width: 100%;
        min-height: 460px;
        text-align: center;

        #profileHead {
            border-bottom: solid 1px $grey;
            padding: 50px 20px;
        }

        #profileData {
            @media screen and (min-width: 1024px) {
                width: 70%;
                padding: 5% 15%;
            }
            width: 90%;
            padding: 5%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            @media screen and (max-width: 476px) {
                justify-content: center;
            }

            #imgUser {
                max-width: 40%;
                border: solid 2px greenyellow;
                padding: 20px;
                border-radius: 50%;
                @media screen and (max-width: 476px) {
                    max-width: 90%;
                    margin-bottom: 20px;

                }
            }

            section {
                max-width: 60%;
                @media screen and (max-width: 476px) {
                    max-width: 90%;
                }

                p {
                    text-align: start;
                    margin-bottom: 20px;
                    font-size: 20px;
                    span{
                        font-style: italic;
                        font-size: 16px;
                    }
                    .move_arrow {
                        height: 16px;
                        width: 16px;
                        margin: 0 2px 0 0;
                    }
                }

            }

        }
    }
</style>
