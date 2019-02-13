<template>
    <section class="new_review_navigation">
        <div class="editor">
            <div v-if="errors[0]" >
                <p style="color:red">Мы приносим свои извинения, но в данный момент сервер лежит</p>
            </div>
            <h3>Мы ждем от вас только аргументированные пожелания или отзывы. Отзывы включающие оскобления или нецензурную лексику, будут сразу же удалены!</h3>
            <form @submit.prevent="savePost()">
                <input spellcheck="false" required placeholder="Имя пользователя" v-model="post.name"/>
                <textarea spellcheck="false" required  placeholder="Текст отзыва" v-model="post.text"></textarea>
                <button>Отправить отзыв</button>
            </form>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "new-review-component",
        data(){
            return{
                post : {},
                errors : []
            }
        },
        methods: {
            savePost: function () {
                axios.post('http://zhek1996.pythonanywhere.com/api/reviews/', {
                    text: this.post.text,
                    name: this.post.name,
                })
                    .then(response => {
                    })
                    .catch(e => {
                        this.errors.push(e)
                    });
                window.location.href = '/reviews#splinter'
            }
        }
    }
</script>

<style lang="scss" scoped>
  .new_review_navigation {
      font-size: 26px;
      z-index: 2;
      padding: 0 0 30px;
      background-color: #1b1a20;
      text-align: center;
      display: flex;
      justify-content: center;

      .editor {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 700px;

          div {
              font-size: 26px;
              padding: 0 5%;
              width: 90%;
          }
          h3{
              border-bottom: solid 1px grey;
              padding: 50px 0;
          }
          form {
              padding: 20px 5% 0;
              width: 90%;
          }

          input {
              color: black;
              border-radius: 3px;
              padding: 0 2%;
              width: 96%;
              height: 50px;
              font-size: 18px;
              margin-bottom: 12px;
              outline: none;
              border: none;
          }
          textarea {
              border-radius: 3px;
              color: black;
              width: 96%;
              height: 125px;
              font-size: 18px;
              margin-bottom: 12px;
              padding: 2%;
              border: none;
              outline: none;
              resize: none;
          }
          button {
              width: 96%;
              transition: .3s;
              height: 32px;
              padding: 10px 2%;
              font-size: 22px;
              border: none;
              border-radius: 3px;
              background-color: #f35656;
              color: #fff;
              cursor: pointer;
          }
          button:hover {
              transition: .3s;
              background-color: #fff;
              color: #f35656;
          }
      }
  }
</style>
