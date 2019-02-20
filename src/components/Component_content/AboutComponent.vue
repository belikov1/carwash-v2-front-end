<template>
    <div>
        <div id="aboutAll">
            <h2 class="head-about">Автомойка на партизанской!</h2>
            <div id="about">

                <div> Наш современный автомоечный комплекс на Партизанской - это высокий уровень обслуживания, гарантия
                    качественных работ, связанных с мойкой, химчисткой и полировкой автомобилей любого класса. Нашими
                    отличительными особенностями являются: квалифицированный персонал, качественные моющие и косметические
                    средства ведущих мировых брендов в области ухода за автомобилем, высокотехнологичное оборудование.
                </div>
                <div>
                    На территории автомойки имеется уютная комната для клиентов, где вы можете выпить чашечку кофе, посмотреть
                    TV и ознакомиться с последними выпусками профессиональных автомобильных журналов, в то время как вашим
                    автомобилем будет заниматься команда специалистов.Мы работаем более 15-ти лет и нас знают многие, как
                    частные, так и корпоративные клиенты.
                </div>
                <div> Дорогие друзья, мы с Вами уже 15 лет! И поэтому рады сообщить Вам, что совсем скоро состоится запуск новой
                    Бонусной программы. Теперь за каждую услугу, которой Вы воспользуетесь у нас, Вам будут начисляться
                    бонусные баллы (1балл=1рубль)! А именно - 10% от суммы ЛЮБОЙ услуги на нашей автомойке.
                    Что для этого нужно сделать? Все очень просто!
                    <p><img class="move_arrow2" src="../../assets/img/move_arrow.png">Шаг 1: Зарегистрируйтесь на нашем сайте avtopart.ru</p>
                    <p><img class="move_arrow2" src="../../assets/img/move_arrow.png">Шаг 2: При посещении автомойки оповестите менеджера, что вы участвуете в нашей бонусной программе</p>
                    <p><img class="move_arrow2" src="../../assets/img/move_arrow.png">Шаг 3: Накапливайте баллы, и уже после 5-ого посещения Вы сможете начать пользоваться ими!</p>
                </div>
            </div>
        </div>
        <div id="history">
            <div class="navigation_history">История автомойки по годам:</div>
            <input type="radio" checked="checked" id="history1" name="history">
            <label id="history1l" for="history1">2001</label>
            <input type="radio" id="history2" name="history">
            <label id="history2l" for="history2">2004</label>
            <input type="radio" id="history3" name="history">
            <label id="history3l" for="history3">2007</label>
            <input type="radio" id="history4" name="history">
            <label id="history4l" for="history4">2012</label>
            <input type="radio" id="history5" name="history">
            <label id="history5l" for="history5">2018</label>
            <div id="historyLabel">

                <div class="history_about">
                    <div id="history1label" rel="label1"><p>«Автомойка на Партизанской» на рынке обслуживания
                        автомобилей существует c 2001 года. За это время была сформирована рабочая база, на основе
                        которой шло дальнейшее развитие компании.</p></div>
                    <div id="history2label" rel="label2"><p>В 2004 году, для удобства наших клиентов, была создана зона
                        для отдыха. Теперь пока мы работаем с вашим автомобилем или мотоциклом, вы можете насладиться
                        чашечкой кофе в нашей комнате ожидания.</p></div>
                    <div id="history3label" rel="label3"><p>В связи с большим наплывом клиентов в 2007 году, было решено открыть 3 дополнительных бокса и построить на территории автомойки замечательную летнюю веранду для посетителей.</p></div>
                    <div id="history4label" rel="label4"><p>Уже к 2012 году мы предоставляли высококачественные услуги
                        премиум детейлинга по самым привлекательным ценам и придавали автомобилям любого класса
                        безупречный внешний вид.</p></div>
                    <div id="history5label" rel="label5"><p>На сегодняшний день мы вошли в доверие тысячи клиентов своим
                        профессионализмом и высоким уровнем обслуживания.Мы оказываем все виды услуг, связанные с
                        мойкой, химчисткой и полировкой автомобилей.</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about-component"
    }
</script>

<style lang="scss" scoped>


    #aboutAll {
        background-color: #1b1a20;
        text-align: center;
    }
    .head-about {
         border-bottom: solid 1px grey;
         padding: 50px 20px;
         margin: 0 0 30px;
     }
    #about {
        z-index: 2;
        padding: 20px 10%;
        font-size: 22px;
        line-height: 1.5em;
        text-align: left;
        @media screen and (max-width: 812px) {
            font-size: 18px;
        }
    }
    #about div {
        margin-bottom: 20px;
    }

    #history {
        margin: 40px 0;
        text-align: center;
    }
    #historyLabel{
        border: solid 3px white;
        margin: 3% 10%;
        border-radius: 15px;
        @media screen and (max-width: 812px) {
            margin: 20px 10px;
        }
    }
    #history input {
        display: none;
        outline: none;
        cursor: pointer;
    }

    #history label {
        margin: 0 1% 0;
        padding: 0.8%;
        font-size: 18px;
        cursor: pointer;
        @media screen and (max-width: 812px) {
            font-size: 22px;
            padding: 0;
        }

    }

    .navigation_history {
        font-size: 28px;
        margin: 0 0 2%;
        @media screen and (max-width: 812px) {
            font-size: 22px;
        }
    }

    .history_about {
        padding: 0 10%;
        margin: 3% 0 0;
        @media screen and (max-width: 812px) {
            padding: 1%;
            margin: 3%  0;
        }

    }

    .history_about p {
        margin: 2% 0 4%;
        line-height: 1.8em;
        text-align: center;
        font-size: 24px;
        @media screen and (max-width: 812px) {
            font-size: 18px;
            line-height: 1.2em;
            margin: 0;
        }
    }
    .move_arrow2 {
        height: 18px;
        width: 18px;
        margin: 0 2px 0 0;
    }

    #history1label {
        color: white;
        display: none;
    }

    #history2label {
        color: white;
        display: none;
    }

    #history3label {
        color: white;
        display: none;
    }

    #history4label {
        color: white;
        display: none;
    }

    #history5label {
        color: white;
        display: none;
    }

    #history1:checked ~ #history1l {
        background-color: #f35656;
    }

    #history2:checked ~ #history2l {
        background-color: #f35656;
    }

    #history3:checked ~ #history3l {
        background-color: #f35656;
    }

    #history4:checked ~ #history4l {
        background-color: #f35656;
    }

    #history5:checked ~ #history5l {
        background-color: #f35656;
    }


    #history1:checked ~ div #history1label {
        display: block;
    }

    #history2:checked ~ div #history2label {
        display: block;
    }

    #history3:checked ~ div #history3label {
        display: block;
    }

    #history4:checked ~ div #history4label {
        display: block;
    }

    #history5:checked ~ div #history5label {
        display: block;
    }
</style>
