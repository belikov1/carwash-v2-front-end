<template>
    <div>
        <div id="base"></div>

        <div id="price">
            <h2 class="head-caption-price">Кликните на интересующую Вас категорию или используйте прокрутку.</h2>
            <div class="price-head1">
                <div class="price-head">

                    <div class="price-head-one"><a data-scroll-to="moyka" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/Moyka.jpg" alt=""
                        class="price-head-img">Мойка кузова</a></div>
                    <div class="price-head-one"><a data-scroll-to="himch" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/himchistka.jpg" alt=""
                        class="price-head-img">Химчистка</a></div>


                    <div class="price-head-one"><a data-scroll-to="polir" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/polirovka.jpg" alt=""
                        class="price-head-img">Полировка</a></div>
                    <div class="price-head-one"><a data-scroll-to="dop" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/dop.jpg" alt=""
                        class="price-head-img">Доп. услги</a></div>

                </div>
                <div class="price-head">

                    <div class="price-head-one"><a data-scroll-to="zash" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/ZashitnoePokr.jpg" alt=""
                        class="price-head-img">Защитное покрытие</a>
                    </div>
                    <div class="price-head-one"><a data-scroll-to="kovry" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/kovry.jpg" alt=""
                        class="price-head-img">Химчистка ковров</a>
                    </div>

                    <div class="price-head-one"><a data-scroll-to="nlenka" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/nlenka.jpg" alt=""
                        class="price-head-img">Антигравийная
                        пленка</a></div>
                    <div class="price-head-one"><a data-scroll-to="winom" class="linkTo"><img
                        src="../../assets/img/ImgForPriceTemplateAndHomePrice/winom.jpg" alt=""
                        class="price-head-img">Шиномантаж</a></div>

                </div>
            </div>
        </div>
        <div class="groups">
            <div class="group"><span>Класс А</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/cooper.png'>Авто&shyмобили
                малого
                класса
            </div>
            <div class="group"><span>Класс B</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/sedan.png'>Авто&shyмобили
                среднего
                класса
            </div>
            <div class="group"><span>Класс C</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/biznes.png'>Авто&shyмобили
                бизнес
                класса
            </div>
            <div class="group"><span>Класс D</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/hunter.png'>Внедо&shyрож&shyники
            </div>
            <div class="group"><span>Класс E</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/microbus.png'>Микро&shyавто&shyбусы
            </div>

        </div>

        <transition name="img_up_price">
            <div v-if="show" id="fixed_price_img">
                <a href="#base"><img alt="" class="img_price_arrow" src="../../assets/img/arrow_price.png"></a>
            </div>
        </transition>

        <div id="table_all">
            <div class="table-head">
                <div id="moyka"></div>
                Мойка кузова
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">А</td>
                    <td class="table-td">B</td>
                    <td class="table-td">C</td>
                    <td class="table-td">D</td>
                    <td class="table-td">E</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Экспресс №1.</span> <br> (только кузов)</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">120</td>
                    <td class="table-td">120</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Экспресс №2.</span> <br> (кузов, коврики, пороги,
                        арки колёс)
                    </td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">230</td>
                    <td class="table-td">230</td>
                    <td class="table-td">250</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Бесконтактная мойка кузова.</span> <br> (кузов,
                        коврики, пороги, арки колёс, кузов и
                        стёкла протираются перф&shyориро&shyван&shyными салфетками, щели продуваются воздухом)
                    </td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                    <td class="table-td">300</td>
                    <td class="table-td">350</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чиска салона.</span> <br>(чистка салона
                        пылесосом)
                    </td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Бесконтактная мойка кузова + чистка салона.</span> <br>(2 услуги вместе -
                        дешевле)
                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">400</td>
                    <td class="table-td">450</td>
                    <td class="table-td">500</td>
                    <td class="table-td">550</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чистка багажника.</span></td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Бесконтактная мойка двигателя.</span></td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Бесконтактная мойка днища.</span></td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Двухфазная нано-мойка.</span><br>Первая фаза:
                        бесконтактная мойка, замачивание
                        дисков очистителем. <br>Вторая
                        фаза: бережное удаление остатков мух, мошкары, с которыми не справляется
                        бесконтактная химия и высокое давление воды.
                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">400</td>
                    <td class="table-td">450</td>
                    <td class="table-td">500</td>
                    <td class="table-td">550</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Трехфазная нано-мойка.</span><br>(Предназначена
                        для удаления с кузова нефтепродуктов,
                        свежих смол, битумных пятен, следов резины, других дорожно- нефтяных загрязнений, а также пятен
                        жира, чернил, граффити, маркера, остатков жевательной резинки)
                    </td>
                    <td class="table-td">450</td>
                    <td class="table-td">550</td>
                    <td class="table-td">650</td>
                    <td class="table-td">750</td>
                    <td class="table-td">750</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Предворительная очистка кузова.</span><br>Производиться
                        перед началом абразивной
                        полировки кузова
                    </td>
                    <td class="table-td">650</td>
                    <td class="table-td">750</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1100</td>
                </tr>
            </table>
            <div class="table-head">
                <div id="polir"></div>
                Полировка автомобиля
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">А</td>
                    <td class="table-td">B</td>
                    <td class="table-td">C</td>
                    <td class="table-td">D</td>
                    <td class="table-td">E</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Поверхнастная абразивная полировка.</span><br>

                    </td>
                    <td class="table-td">2700</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4000</td>
                    <td class="table-td">5000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Мягкая абразивная полировка.</span><br>

                    </td>
                    <td class="table-td">5000</td>
                    <td class="table-td">6000</td>
                    <td class="table-td">7000</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">10&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Вос&shyстано&shyви&shyтельная абразивная полировка.</span>
                    </td>
                    <td class="table-td">7500</td>
                    <td class="table-td">9000</td>
                    <td class="table-td">11&shy000</td>
                    <td class="table-td">12&shy000</td>
                    <td class="table-td">15&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Удаление налёта краски без полировки.</span> <br>(чистка
                        салона пылесосом)
                    </td>
                    <td class="table-td">1650</td>
                    <td class="table-td">2000</td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4000</td>
                    <td class="table-td">5000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Удаление налёта краски c поверхностной полировкой.</span>
                        <br></td>
                    <td class="table-td">3650</td>
                    <td class="table-td">4250</td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7000</td>
                    <td class="table-td">8800</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Удаление налёта краски c мягкой полировкой.</span></td>
                    <td class="table-td">6000</td>
                    <td class="table-td">7350</td>
                    <td class="table-td">9600</td>
                    <td class="table-td">11&shy000</td>
                    <td class="table-td">13&shy100</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Удаление налёта краски c восстановительной полировкой.</span>
                    </td>
                    <td class="table-td">8150</td>
                    <td class="table-td">10&shy000</td>
                    <td class="table-td">13&shy000</td>
                    <td class="table-td">14&shy500</td>
                    <td class="table-td">18&shy500</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Удаление краски дорожной разметки плюс мягкая полировка.</span><br>
                        (стоимость за 3 -
                        4 детали)
                    </td>
                    <td class="table-td">2000</td>
                    <td class="table-td">2500</td>
                    <td class="table-td">2500</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3500</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Восстановительная абразивная
                        полировка.</span>
                    </td>
                    <td class="table-td">8150</td>
                    <td class="table-td">10&shy000</td>
                    <td class="table-td">13&shy000</td>
                    <td class="table-td">14&shy500</td>
                    <td class="table-td">18&shy500</td>
                </tr>
            </table>
            <div class="table-head">
                <div id="dop"></div>
                Дополнительные услуги
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">А</td>
                    <td class="table-td">B</td>
                    <td class="table-td">C</td>
                    <td class="table-td">D</td>
                    <td class="table-td">E</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Жидкий воск.</span></td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Твердый воск, глейз.</span>

                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">450</td>
                    <td class="table-td">550</td>
                    <td class="table-td">600</td>
                    <td class="table-td">750</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Тефлон (зеленый воск), цветная полироль.</span>
                    </td>
                    <td class="table-td">600</td>
                    <td class="table-td">700</td>
                    <td class="table-td">800</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Нано-шампунь.</span></td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чистка пластика салона торнадором.</span> <br>(торпеда
                        и под ней)
                    </td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Полироль торпеды.</span></td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">70</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Полироль пластика салона.</span></td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Кондиционер кожи одного ряда сидений.</span></td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чистка стёкол очистителем.</span><br>(внутри -
                        снаружи)
                    </td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чернение шин.</span></td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">125</td>
                    <td class="table-td">125</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Озонирование салона автомобиля.</span><br>(дезинфекция
                        систем кондиционера)
                    </td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Антидождь для лобового стекла.</span></td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
            </table>
            <div class="table-head">
                <div id="himch"></div>
                Химчистка салона
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">А</td>
                    <td class="table-td">B</td>
                    <td class="table-td">C</td>
                    <td class="table-td">D</td>
                    <td class="table-td">E</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Потолок.</span></td>
                    <td class="table-td">800</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                    <td class="table-td">1400</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Полы.</span></td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Сидения за 1 шт.</span></td>
                    <td class="table-td">800</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                    <td class="table-td">1400</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Обшивка дверей за 1 шт .</span></td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Багажник.</span></td>
                    <td class="table-td">500</td>
                    <td class="table-td">500</td>
                    <td class="table-td">600</td>
                    <td class="table-td">600</td>
                    <td class="table-td">600</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Чистка дверных проёмов за 1 шт.</span></td>
                    <td class="table-td">25</td>
                    <td class="table-td">30</td>
                    <td class="table-td">35</td>
                    <td class="table-td">40</td>
                    <td class="table-td">50</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Обработка уплотнителей стёкол, дверей и багажника.</span>
                    </td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Цена на комплекс.</span></td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4500</td>
                    <td class="table-td">5000</td>
                </tr>

            </table>
            <div class="table-head">
                <div id="zash"></div>
                Защитное покрытие
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">А</td>
                    <td class="table-td">B</td>
                    <td class="table-td">C</td>
                    <td class="table-td">D</td>
                    <td class="table-td">E</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Ceramic 9Н 61 без полировки.</span></td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3750</td>
                    <td class="table-td">4350</td>
                    <td class="table-td">4850</td>
                    <td class="table-td">5640</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Поверхностная полировка + Ceramic 9Н 61.</span>
                    </td>
                    <td class="table-td">5700</td>
                    <td class="table-td">6750</td>
                    <td class="table-td">7850</td>
                    <td class="table-td">8850</td>
                    <td class="table-td">10&shy650</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Мягкая полировка + Ceramic 9Н 61.</span></td>
                    <td class="table-td">8000</td>
                    <td class="table-td">9750</td>
                    <td class="table-td">11&shy350</td>
                    <td class="table-td">12&shy850</td>
                    <td class="table-td">15&shy650</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Восстановительная полировка + Ceramic 9Н 61.</span></td>
                    <td class="table-td">10&shy500</td>
                    <td class="table-td">12&shy750</td>
                    <td class="table-td">15&shy350</td>
                    <td class="table-td">16&shy850</td>
                    <td class="table-td">20&shy650</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Дополнительный слой Ceramic 9H 61.</span><br>(Каждый
                        дополнительный слой Ceramic 9H
                        61 увеличивает степень защиты и срок службы.)
                    </td>
                    <td class="table-td">2150</td>
                    <td class="table-td">2800</td>
                    <td class="table-td">3200</td>
                    <td class="table-td">3600</td>
                    <td class="table-td">4250</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Ceramic 9Н 95 без полировки.</span></td>
                    <td class="table-td">4150</td>
                    <td class="table-td">4950</td>
                    <td class="table-td">5700</td>
                    <td class="table-td">6500</td>
                    <td class="table-td">8100</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Поверхностная полировка + Ceramic 9Н 95.</span>
                    </td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7200</td>
                    <td class="table-td">8300</td>
                    <td class="table-td">9500</td>
                    <td class="table-td">12&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Мягкая полировка + Ceramic 9Н 95.</span></td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10&shy200</td>
                    <td class="table-td">11&shy800</td>
                    <td class="table-td">13&shy500</td>
                    <td class="table-td">17&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Восстановительная полировка + Ceramic 9Н 95.</span></td>
                    <td class="table-td">11&shy000</td>
                    <td class="table-td">13&shy200</td>
                    <td class="table-td">15&shy800</td>
                    <td class="table-td">17&shy500</td>
                    <td class="table-td">22&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Дополнительный слой Ceramic Coating 9Н 95.</span>
                    </td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7200</td>
                    <td class="table-td">8300</td>
                    <td class="table-td">9500</td>
                    <td class="table-td">12&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Поверхностная полировка + Ceramic 9Н 95.</span>
                    </td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10&shy200</td>
                    <td class="table-td">11&shy800</td>
                    <td class="table-td">13&shy500</td>
                    <td class="table-td">17&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Мягкая полировка + Ceramic 9Н 95.</span></td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10&shy200</td>
                    <td class="table-td">11&shy800</td>
                    <td class="table-td">13&shy500</td>
                    <td class="table-td">17&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Восстановительная полировка + Ceramic 9Н 95.</span></td>
                    <td class="table-td">11&shy000</td>
                    <td class="table-td">13&shy200</td>
                    <td class="table-td">15&shy800</td>
                    <td class="table-td">17&shy500</td>
                    <td class="table-td">22&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Дополнительный слой Ceramic Coating 9Н 95.</span><br>(Дополнительный
                        слой Ceramic
                        Coating 9Н 95 увеличивает степень защиты и срок службы)
                    </td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4200</td>
                    <td class="table-td">4800</td>
                    <td class="table-td">5500</td>
                    <td class="table-td">7000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Финальный слой Сталинит.</span><br>(По акции в
                        подарок, при покупке защитного
                        покрытия)
                    </td>
                    <td class="table-td">1500</td>
                    <td class="table-td">1600</td>
                    <td class="table-td">1700</td>
                    <td class="table-td">1900</td>
                    <td class="table-td">2150</td>
                </tr>
                <tr>
                    <td class="table-td2"><span class="table-td2-head">Жидкое стекло для новых машин.</span></td>
                    <td class="table-td">8000</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">10&shy000</td>
                    <td class="table-td">12&shy000</td>
                    <td class="table-td">12&shy000</td>
                </tr>
                <tr>
                    <td class="table-td2"><span
                        class="table-td2-head">Восстановительная полировка + жидкое стекло.</span></td>
                    <td class="table-td">13&shy500</td>
                    <td class="table-td">13&shy500</td>
                    <td class="table-td">18&shy000</td>
                    <td class="table-td">22&shy000</td>
                    <td class="table-td">22&shy000</td>
                </tr>
            </table>
            <div class="table-head">
                <div id="kovry"></div>
                Химчистка ковров
            </div>
            <div class="noTable">Стоимость химчистки ковров зависит от размеров ковра.
                Стоимость 1 квадратного метра - 60 рублей.
            </div>
            <div class="table-head">
                <div id="nlenka"></div>
                Защитная пленка
            </div>
            <div class="noTable">Стоимость химчистки ковров зависит от размеров ковра.
                Стоимость 1 квадратного метра - 60 рублей.
            </div>
            <div class="table-head">
                <div id="winom"></div>
                Шиномонтаж
            </div>
            <table class="table_one">
                <tr>
                    <td class="table-tdw2">Наименование операции:</td>
                    <td class="table-tdw">R 13</td>
                    <td class="table-tdw">R 15</td>
                    <td class="table-tdw">R 17</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Съём.</span></td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">50</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Монтаж.</span></td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">70</td>
                    <td class="table-tdw">80</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Балансировка.</span></td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Жгут.</span></td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Латка.</span></td>
                    <td class="table-tdw">От 50</td>
                    <td class="table-tdw">От 50</td>
                    <td class="table-tdw">От 50</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Латка кордовая.</span></td>
                    <td class="table-tdw">От 70</td>
                    <td class="table-tdw">От 70</td>
                    <td class="table-tdw">От 70</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Переобувка.</span></td>
                    <td class="table-tdw">1000</td>
                    <td class="table-tdw">1100</td>
                    <td class="table-tdw">1300</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Подкачка.</span></td>
                    <td class="table-tdw">5</td>
                    <td class="table-tdw">5</td>
                    <td class="table-tdw">5</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Боковой порез.</span></td>
                    <td class="table-tdw">Зависит от тяжести</td>
                    <td class="table-tdw">Зависит от тяжести</td>
                    <td class="table-tdw">Зависит от тяжести</td>
                </tr>
                <tr>
                    <td class="table-tdw2"><span class="table-td2-head">Бортовой герметик с монтажем.</span></td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "price-component",
        data() {
            return {
                show: false
            }
        },
        methods: {
            checkImgUp: function () {
                //Функция проверяет высоту скролла и если она больше расстояния от верха окна до меню
                //То стрелка в нижнем правом экране изменяет свойство opacity с 0 до 0.5
                this.show = (document.getElementById('splinter').offsetTop < window.pageYOffset
                    && window.pageYOffset < document.getElementById('footer').offsetTop - document.documentElement.clientHeight);
            },
            scrollToSlow: function (elemAttribute, heightSub) {
                let heightScroll = document.getElementById(elemAttribute).offsetTop + document.documentElement.clientHeight - heightSub; // высота елемента + высота окна - 50
                window.scrollTo({
                    top: heightScroll,
                    behavior: "smooth" // режим плавной прокрутки
                });
            }
        },
        created() {
            window.addEventListener('scroll', this.checkImgUp);
        },
        mounted() {
            let elements = document.getElementsByClassName('linkTo');
            for (let i = 0; i < elements.length; i++) {
                let that = this;
                let element = elements[i];
                let elementAttr = element.getAttribute('data-scroll-to');
                element.addEventListener('click', (function (e) {
                        e.preventDefault();  // запрет перехода по ссылке
                        let heightSub = (document.documentElement.clientWidth < 813) ? 62 : 50;//для широких экранов нужно вычесть 50px (из-за фиксированного меню)
                        //для экранов смартфонов нужно вычесть 62 px (бордер ярлыка 2px и меню 50 px и padding 10 px)
                        that.scrollToSlow(elementAttr, heightSub);//вместо привычного события, самовызывающаяся функция
                    }
                ));
            }
        },
        updated() {
            document.getElementById('fixed_price_img').addEventListener('click', function (e) {
                e.preventDefault();  // запрет перехода по ссылке
                (function () { //вместо привычного события самовызывающаяся функции
                    let heightSub = (document.documentElement.clientWidth < 813) ? 50 : 0;//см PriceComponent
                    let heightScroll = document.getElementById('splinter').offsetTop - heightSub; // высота елемента + высота окна
                    window.scrollTo({
                        top: heightScroll,
                        behavior: "smooth" // режим плавной прокрутки
                    });
                }())
            });
        },
        destroyed() {
            window.removeEventListener('scroll', this.checkImgUp)
        }
    }
</script>

<style lang="scss" scoped>

    #price {
        background: #1b1a20;
        z-index: 5;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .head-caption-price {
        border-bottom: solid 1px grey;
        padding: 50px 20px;
        margin: 0 0 30px;
    }

    .price-head1 {
        height: 100%;
        margin: 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }

    .price-head {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        @media screen and (max-width: 1599px) and (min-width: 1000px) {
            width: 80%;
        }
        @media screen and (max-width: 799px) and (min-width: 600px) {
            width: 70%;
        }
    }

    .price-head-one {
        cursor: pointer;
        display: flex;
        overflow: hidden;
        width: 180px;
        height: 100%;
        margin: 10px 10px;
        text-align: center;
        @media screen and (max-width: 1599px) and (min-width: 1100px) {
            width: 200px;
        }
    }

    .price-head-one a {
        height: 100%;
        font-size: 20px;
        color: white;
    }

    .price-head-one:hover {
        transform: scale(1.1);
    }

    .price-head-one a:hover {
        color: #f35656;
    }

    .price-head-img {
        margin: 0 0 10px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .groups {
        font-size: 22px;
        margin: 5%;
        border: solid 4px white;
        border-radius: 15px;
        padding: 2% 5%;
        display: flex;
        justify-content: space-around;
    }

    .group {
        width: 13%;
        max-width: 140px;
        text-align: center;
    }

    .group_photo {
        width: 100%;
    }

    #table_all {
        background: #1b1a20;
        padding: 0 10% 3%;
    }

    .table_one {
        width: 100%;
        margin: 0 0 2%;
    }

    .table-td {
        padding: 1% 0;
        text-align: center;
        vertical-align: middle;
        font-size: 18px;
        border: solid 2px;
        width: 7%;
        height: 100%;
    }

    .table-tdw {
        padding: 1% 0;
        text-align: center;
        vertical-align: middle;
        font-size: 18px;
        border: solid 3px;
        min-width: 12%;
        max-width: 12%;
        height: 100%;
    }

    .table-td2 {
        width: 65%;
        vertical-align: middle;
        padding: 1% 0;
        text-align: center;
        font-size: 18px;
        border: solid 2px;
    }

    .table-td2-head {
        font-size: 20px;
    }

    .table-tdw2 {
        vertical-align: middle;
        padding: 1% 0;
        text-align: center;
        font-size: 18px;
        border: solid 3px;
    }

    .table-head {
        border: solid 1px;
        margin: 5% -12.5%;
        background: #f35656;
        padding: 1%;
        display: flex;
        justify-content: center;
        font-size: 24px;
    }

    .table-head:first-child {
        margin: 0 -12.5% 5%;
    }

    .upload-price a {
        width: 5%;
        height: 5%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .upload-price a:hover {
        transition: .4s;
        transform: scale(1.2);

    }

    .noTable {
        text-align: center;
        font-size: 16px;
        margin: 0 0 2%;
    }

    .img_price_arrow {
        width: 100%;
        height: 100%;
        padding: 20px;
        opacity: .5;
        background-color: #1b1a20;
        border-radius: 50%;
        border: solid 1px white;
    }

    #fixed_price_img {
        width: 60px;
        height: 60px;
        position: fixed;
        bottom: 70px;
        right: 70px;

    }

    .img_up_price-enter-active, .img_up_price-leave-active {
        transition: opacity .5s;
    }

    .img_up_price-enter, .img_up_price-leave-to {
        opacity: 0;
    }

    .img_price_arrow:hover {
        opacity: 1;
    }

    @media screen and (max-width: 813px) {

        .groups {
            font-size: 14px;
            margin: 7.5% 2.5%;
            border: solid 1px white;
            border-radius: 15px;
            padding: 2% 0;
        }
        .head-caption-price {
            font-size: 20px;
            border-bottom: solid 1px grey;
            padding: 50px 20px;
            margin: 0 0 30px;
        }
        .group {
            overflow: hidden;
            width: 18%;
            margin: 0 0.5%;
            text-align: center;
        }
        .group_photo {
            width: 80%;
        }

        #table_all {
            background: #1b1a20;
            padding: 0 0 2%;
        }

        .table-td {
            padding: 0;
            font-size: 14px;
            border: solid 1px;
            min-width: 7%;

        }
        .table-head {
            margin: 5% 0;
            padding: 10px 0;
            font-size: 24px;
        }
        .table-head:first-child {
            margin: 0 0 5%;
            font-size: 24px;
        }
        .table-tdw {

            font-size: 16px;
            border: solid 1px;
            min-width: 12%;
            max-width: 12%;
            height: 100%;
        }
        .table-td2-head {
            font-size: 16px;
        }
        .table-td2 {
            width: 30%;
            font-size: 14px;
            border: solid 1px;
        }
        .table-tdw2 {
            padding: 1% 0;
            text-align: center;
            font-size: 16px;
            border: solid 1px;
        }

        #fixed_price_img {
            max-width: 50px;
            max-height: 50px;
            bottom: 30px;
            right: 30px;
        }

        .img_price_arrow {
            padding: 10px;
        }
    }
</style>
