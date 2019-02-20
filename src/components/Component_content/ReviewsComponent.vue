<template>
    <section id="review">
        <h2 class="reviewHead">Здесь вы можете оставить свой отзыв, пожелания или рекомендации.</h2>
        <section class="reviewContent">
            <div id="reviewLink">
                <router-link class="reviewLink" to="/newReview">Оставить отзыв</router-link>
            </div>
            <article class="review" v-for="post in posts">
                <div class="review-head">
                    <div>{{post.name}}</div>
                    <div>{{post.date}}</div>
                </div>
                <hr>
                <div class="review-text">
                    <div>{{ post.text }}</div>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "reviews-component",
        data() {
            return {
                posts: [],
                errors: []
            }
        },
        created() {
            axios.get('http://88.212.253.142/api/reviews/')
                .then(response => {
                    this.posts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style lang="scss" scoped>

    #review {
        min-height: 1000px;
        padding: 0 0 50px;
        height: 100%;
        background-color: #1b1a20;

        .reviewHead {
            padding: 50px 0;
            text-align: center;
            border-bottom: solid 1px grey;
        }

        .reviewContent {
            text-align: center;
            padding: 0 10%;
            height: 100%;

            #reviewLink {
                margin: 50px 0 0;

                .reviewLink {
                    padding: 10px 26px;
                    transition: .3s;
                    font-size: 24px;
                    border: none;
                    border-radius: 3px;
                    background-color: #f35656;
                    color: #fff;
                    cursor: pointer;
                }
            }

            .reviewLink:hover {
                color: #f35656;
                background-color: #fff;
            }

            .review {
                background-color: #fff;
                color: black;
                margin: 50px 0 0;
                border-radius: 3px;

                .review-head {
                    display: flex;
                    justify-content: space-between;
                    padding: 1% 3%;
                    font-size: 20px;
                }

                .review-text {
                    line-height: 1.5em;
                    padding: 2%;
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
    }
</style>
