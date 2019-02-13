<template>
    <div>
        <div id="base"></div>

        <div id="price">
            <h2 class="head-caption-price">Кликните на интересующую Вас категорию или используйте прокрутку.</h2>
            <div class="price-head1">
                <div class="price-head">
                    <div class="price-head">
                        <div class="price-head-one"><a id="tomoyka"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/Moyka.jpg" alt=""
                                                                         class="price-head-img">Мойка кузова</a></div>
                        <div class="price-head-one"><a id="tohimch"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/himchistka.jpg" alt=""
                                                                         class="price-head-img">Химчистка</a></div>
                    </div>
                    <div class="price-head">
                        <div class="price-head-one"><a id="topolir"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/polirovka.jpg" alt=""
                                                                         class="price-head-img">Полировка</a></div>
                        <div class="price-head-one"><a id="todop"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/dop.jpg" alt=""
                                                                       class="price-head-img">Доп. услги</a></div>
                    </div>
                </div>
                <div class="price-head">
                    <div class="price-head">
                        <div class="price-head-one"><a id="tozash"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/ZashitnoePokr.jpg" alt=""
                                                                        class="price-head-img">Защитное покрытие</a>
                        </div>
                        <div class="price-head-one"><a id="tokovry"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/kovry.jpg" alt=""
                                                                         class="price-head-img">Химчистка ковров</a>
                        </div>
                    </div>
                    <div class="price-head">
                        <div class="price-head-one"><a id="tonlenka"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/nlenka.jpg" alt=""
                                                                          class="price-head-img">Антигравийная
                            пленка</a></div>
                        <div class="price-head-one"><a id="towinom"><img src="../../assets/img/ImgForPriceTemplateAndHomePrice/winom.jpg" alt=""
                                                                         class="price-head-img">Шиномантаж</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="groups">
            <div class="group"><span>Класс А</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/cooper.png'>Автомобили малого
                класса
            </div>
            <div class="group"><span>Класс B</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/sedan.png'>Автомобили среднего
                класса
            </div>
            <div class="group"><span>Класс C</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/biznes.png'>Автомобили бизнес
                класса
            </div>
            <div class="group"><span>Класс D</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/hunter.png'>Внедорожники
            </div>
            <div class="group"><span>Класс E</span><img class="group_photo"
                                                        src='../../assets/img/GroupsPriceComponent/microbus.png'>Микроавтобусы
            </div>

        </div>

        <transition name="img_up_price">
            <div v-if="show" id="fixed_price_img">
                <a href="#base"><img alt="" class="img_price_arrow" src="../../assets/img/arrow_price.png"></a>
            </div>
        </transition>

        <div id="table_all">

            <div class="table-head">Мойка кузова</div>
            <div id="moyka"></div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">Класс А</td>
                    <td class="table-td">Класс B</td>
                    <td class="table-td">Класс C</td>
                    <td class="table-td">Класс D</td>
                    <td class="table-td">Класс E</td>
                </tr>
                <tr>
                    <td class="table-td2">Экспресс №1. <br> (только кузов)</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">120</td>
                    <td class="table-td">120</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2">Экспресс №2. <br> (кузов, коврики, пороги, арки колёс)</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">230</td>
                    <td class="table-td">230</td>
                    <td class="table-td">250</td>
                </tr>
                <tr>
                    <td class="table-td2">Бесконтактная мойка кузова. <br> (кузов, коврики, пороги, арки колёс, кузов и
                        стёкла протираются перфорированными салфетками, щели продуваются воздухом)
                    </td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                    <td class="table-td">300</td>
                    <td class="table-td">350</td>
                </tr>
                <tr>
                    <td class="table-td2">Чиска салона. <br>(чистка салона пылесосом)</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Бесконтактная мойка кузова + чистка салона. <br>(2 услуги вместе - дешевле)
                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">400</td>
                    <td class="table-td">450</td>
                    <td class="table-td">500</td>
                    <td class="table-td">550</td>
                </tr>
                <tr>
                    <td class="table-td2">Чистка багажника.</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2">Бесконтактная мойка двигателя.</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2">Бесконтактная мойка днища.</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2">Двухфазная нано-мойка.<br>(Первая фаза: бесконтактная мойка, замачивание
                        дисков очистителем, в случае необходимости применяется очиститель остатков мошкары. <br>Вторая
                        фаза: бережное удаление при помощи губки иловых остатков с кузова, тонкого налёта растительного
                        происхождения в период распускания почек, остатков мух, мошкары, с которыми не справляется
                        бесконтактная химия и высокое давление воды. )
                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">400</td>
                    <td class="table-td">450</td>
                    <td class="table-td">500</td>
                    <td class="table-td">550</td>
                </tr>
                <tr>
                    <td class="table-td2">Трехфазная нано-мойка.<br>(Предназначена для удаления с кузова нефтепродуктов,
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
                    <td class="table-td2">Предворительная очистка кузова.<br>Производиться перед:<br>-началом абразивной
                        полировки кузова<br>-нанесением защитных покрытий.<br>(В обязательном порядке, необходимо
                        удалить с кузова: дорожно-нефтяные загрязнения, свежие смолы, битумные пятна, следы резины,
                        чернил, граффити. Очистить кузов от тормозной, индустриальной пыли, песка, налёта капель
                        присохшей древесной смолы, въевшихся в лакокрасочное покрытие)
                    </td>
                    <td class="table-td">650</td>
                    <td class="table-td">750</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1100</td>
                </tr>
            </table>
            <div id="polir"></div>
            <div class="table-head">Полировка автомобиля</div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">Класс А</td>
                    <td class="table-td">Класс B</td>
                    <td class="table-td">Класс C</td>
                    <td class="table-td">Класс D</td>
                    <td class="table-td">Класс E</td>
                </tr>
                <tr>
                    <td class="table-td2">Поверхнастная абразивная полировка.<br> Поверхностная абразивная полировка,
                        рекомендуется для новых машин. Поверхнастная полировка кузова позволяет устранить:<br><br>-голограммы,
                        образовавшиеся в следствии проведения абразивных полировок в автосалоне<br>- свежую тонкую
                        "паутинку" от мойки машины в автосалоне<br>- свежие водяные пятна, приобретённые на открытых
                        стоянках автосалонов
                    </td>
                    <td class="table-td">2700</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4000</td>
                    <td class="table-td">5000</td>
                </tr>
                <tr>
                    <td class="table-td2">Мягкая абразивная полировка.<br> (Позволяет устранить "паутинку" от
                        бесконтактных моек, следы притиров с твёрдыми предметами, другими машинами, окись ЛКП, пятна
                        кислотного дождя, следы саранчи; загладить или устранить небольшие и отдельные глубокие
                        царапины. Восстанавливает цвет, прозрачность и блеск ЛКП, обеспечивает 3D глянец, зеркальное
                        отражение на поверхности. Чтобы предварительно определить, какие глубокие царапины удаляются, а
                        какие нет, намочите это место водой и осмотрите его. Если цвет кузова в месте царапины
                        восстанавливается, то царапина устраняется или заглаживается. Царапины, которые чувствуются
                        ногтем на ощупь не желательно полностью устранять, достаточно загладить. При такой полировке
                        снимается 5 – 7 мкн лака, что абсолютно безопасно для вашего автомобиля.<br>Процесс работы 3-х
                        этапный. На первом и втором этапе применяются одношаговые, средние пасты. Последний этап
                        финишная полировка.)
                    </td>
                    <td class="table-td">5000</td>
                    <td class="table-td">6000</td>
                    <td class="table-td">7000</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">10000</td>
                </tr>
                <tr>
                    <td class="table-td2">Восстановительная абразивная полировка. <br> (Предназначена для ЛКП, если оно
                        очень сильно затёрто, содержит множество сколов; множество глубоких царапин от веток, ручной и
                        механической мойки; пятна птичьего помёта; остатки саранчи, глубоко въевшиеся в лак и другие
                        дефекты. Глубокая полировка гарантирует удаление порядка 80% - 90% глубоких царапин, пятен
                        кислотного дождя; 50% пятен птичьего помёта. Капли древесной смолы удалятся только те, которые
                        проникли в ЛКП поверхностно. При такой полировке может удалиться слой лака в 10 - 20 микрон.
                        Такую полировку не стоит делать часто.

                        <br>Процесс работы – многоэтапный. Применяются грубые, одношаговые, средние пасты. Локально
                        используется наждачная бумага 1500 -2500 для удаления капель древесной смолы и пятен птичьего
                        помёта. Последний этап – финишная полировка.)
                    </td>
                    <td class="table-td">7500</td>
                    <td class="table-td">9000</td>
                    <td class="table-td">11000</td>
                    <td class="table-td">12000</td>
                    <td class="table-td">15000</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление налёта краски без полировки. <br>(чистка салона пылесосом)</td>
                    <td class="table-td">1650</td>
                    <td class="table-td">2000</td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4000</td>
                    <td class="table-td">5000</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление налёта краски c поверхностной полировкой. <br></td>
                    <td class="table-td">3650</td>
                    <td class="table-td">4250</td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7000</td>
                    <td class="table-td">8800</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление налёта краски c мягкой полировкой.</td>
                    <td class="table-td">6000</td>
                    <td class="table-td">7350</td>
                    <td class="table-td">9600</td>
                    <td class="table-td">11000</td>
                    <td class="table-td">13100</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление налёта краски c восстановительной полировкой.</td>
                    <td class="table-td">8150</td>
                    <td class="table-td">10000</td>
                    <td class="table-td">13000</td>
                    <td class="table-td">14500</td>
                    <td class="table-td">18500</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление краски дорожной разметки плюс мягкая полировка.<br> (стоимость за 3 -
                        4 детали)
                    </td>
                    <td class="table-td">2000</td>
                    <td class="table-td">2500</td>
                    <td class="table-td">2500</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3500</td>
                </tr>
                <tr>
                    <td class="table-td2">Удаление окалин болгарки, сварки, пятен ржавчины, восстановительная абразивная
                        полировка.
                    </td>
                    <td class="table-td">8150</td>
                    <td class="table-td">10000</td>
                    <td class="table-td">13000</td>
                    <td class="table-td">14500</td>
                    <td class="table-td">18500</td>
                </tr>
            </table>
            <div id="dop"></div>
            <div class="table-head">Дополнительные услуги</div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">Класс А</td>
                    <td class="table-td">Класс B</td>
                    <td class="table-td">Класс C</td>
                    <td class="table-td">Класс D</td>
                    <td class="table-td">Класс E</td>
                </tr>
                <tr>
                    <td class="table-td2">Жидкий воск.</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2">Твердый воск, глейз.<br>- Придаёт неповторимый зеркальный блеск<br>-
                        Обеспечивает яркий цвет<br>- Обладает водоотталкивающим эффектом<br>- Защищает кузов от
                        негативных факторов<br>- Продолжительность эффекта — до 3 месяцев
                    </td>
                    <td class="table-td">350</td>
                    <td class="table-td">450</td>
                    <td class="table-td">550</td>
                    <td class="table-td">600</td>
                    <td class="table-td">750</td>
                </tr>
                <tr>
                    <td class="table-td2">Тефлон (зеленый воск), цветная полироль.</td>
                    <td class="table-td">600</td>
                    <td class="table-td">700</td>
                    <td class="table-td">800</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                </tr>
                <tr>
                    <td class="table-td2">Нано-шампунь.</td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Чистка пластика салона торнадором. <br>(торпеда и под ней)</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                    <td class="table-td">450</td>
                </tr>
                <tr>
                    <td class="table-td2">Полироль торпеды.</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">70</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2">Полироль пластика салона.</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Кондиционер кожи одного ряда сидений.</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                </tr>
                <tr>
                    <td class="table-td2">Чистка стёкол очистителем.<br>(внутри - снаружи)</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Чернение шин.</td>
                    <td class="table-td">100</td>
                    <td class="table-td">100</td>
                    <td class="table-td">125</td>
                    <td class="table-td">125</td>
                    <td class="table-td">150</td>
                </tr>
                <tr>
                    <td class="table-td2">Озонирование салона автомобиля.<br>(дезинфекция систем кондиционера)</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
                <tr>
                    <td class="table-td2">Антидождь для лобового стекла.</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">250</td>
                    <td class="table-td">250</td>
                    <td class="table-td">300</td>
                </tr>
            </table>
            <div id="himch"></div>
            <div class="table-head">Химчистка салона</div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">Класс А</td>
                    <td class="table-td">Класс B</td>
                    <td class="table-td">Класс C</td>
                    <td class="table-td">Класс D</td>
                    <td class="table-td">Класс E</td>
                </tr>
                <tr>
                    <td class="table-td2">Потолок.</td>
                    <td class="table-td">800</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                    <td class="table-td">1400</td>
                </tr>
                <tr>
                    <td class="table-td2">Полы.</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Сидения за 1 шт.</td>
                    <td class="table-td">800</td>
                    <td class="table-td">900</td>
                    <td class="table-td">1000</td>
                    <td class="table-td">1200</td>
                    <td class="table-td">1400</td>
                </tr>
                <tr>
                    <td class="table-td2">Обшивка дверей за 1 шт .</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">150</td>
                    <td class="table-td">200</td>
                    <td class="table-td">200</td>
                </tr>
                <tr>
                    <td class="table-td2">Багажник.</td>
                    <td class="table-td">500</td>
                    <td class="table-td">500</td>
                    <td class="table-td">600</td>
                    <td class="table-td">600</td>
                    <td class="table-td">600</td>
                </tr>
                <tr>
                    <td class="table-td2">Чистка дверных проёмов за 1 шт.</td>
                    <td class="table-td">25</td>
                    <td class="table-td">30</td>
                    <td class="table-td">35</td>
                    <td class="table-td">40</td>
                    <td class="table-td">50</td>
                </tr>
                <tr>
                    <td class="table-td2">Обработка уплотнителей стёкол, дверей и багажника.</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                    <td class="table-td">50</td>
                </tr>
                <tr>
                    <td class="table-td2">Цена на комплекс.</td>
                    <td class="table-td">3000<br>Скидка (850)</td>
                    <td class="table-td">3000<br>Скидка (970)</td>
                    <td class="table-td">3500<br>Скидка (890)</td>
                    <td class="table-td">4500<br>Скидка (460)</td>
                    <td class="table-td">5000<br>Скидка (450)</td>
                </tr>

            </table>
            <div id="zash"></div>
            <div class="table-head">Защитное покрытие</div>
            <table class="table_one">
                <tr>
                    <td class="table-td2">Наименование операции:</td>
                    <td class="table-td">Класс А</td>
                    <td class="table-td">Класс B</td>
                    <td class="table-td">Класс C</td>
                    <td class="table-td">Класс D</td>
                    <td class="table-td">Класс E</td>
                </tr>
                <tr>
                    <td class="table-td2">Ceramic 9Н 61 без полировки.</td>
                    <td class="table-td">3000</td>
                    <td class="table-td">3750</td>
                    <td class="table-td">4350</td>
                    <td class="table-td">4850</td>
                    <td class="table-td">5640</td>
                </tr>
                <tr>
                    <td class="table-td2">Поверхностная полировка + Ceramic 9Н 61.</td>
                    <td class="table-td">5700</td>
                    <td class="table-td">6750</td>
                    <td class="table-td">7850</td>
                    <td class="table-td">8850</td>
                    <td class="table-td">10650</td>
                </tr>
                <tr>
                    <td class="table-td2">Мягкая полировка + Ceramic 9Н 61.</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">9750</td>
                    <td class="table-td">11350</td>
                    <td class="table-td">12850</td>
                    <td class="table-td">15650</td>
                </tr>
                <tr>
                    <td class="table-td2">Восстановительная полировка + Ceramic 9Н 61.</td>
                    <td class="table-td">10500</td>
                    <td class="table-td">12750</td>
                    <td class="table-td">15350</td>
                    <td class="table-td">16850</td>
                    <td class="table-td">20650</td>
                </tr>
                <tr>
                    <td class="table-td2">Дополнительный слой Ceramic 9H 61.<br>(Каждый дополнительный слой Ceramic 9H
                        61 увеличивает степень защиты и срок службы.)
                    </td>
                    <td class="table-td">2150</td>
                    <td class="table-td">2800</td>
                    <td class="table-td">3200</td>
                    <td class="table-td">3600</td>
                    <td class="table-td">4250</td>
                </tr>
                <tr>
                    <td class="table-td2">Ceramic 9Н 95 без полировки.</td>
                    <td class="table-td">4150</td>
                    <td class="table-td">4950</td>
                    <td class="table-td">5700</td>
                    <td class="table-td">6500</td>
                    <td class="table-td">8100</td>
                </tr>
                <tr>
                    <td class="table-td2">Поверхностная полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7200</td>
                    <td class="table-td">8300</td>
                    <td class="table-td">9500</td>
                    <td class="table-td">12000</td>
                </tr>
                <tr>
                    <td class="table-td2">Мягкая полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10200</td>
                    <td class="table-td">11800</td>
                    <td class="table-td">13500</td>
                    <td class="table-td">17000</td>
                </tr>
                <tr>
                    <td class="table-td2">Восстановительная полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">11000</td>
                    <td class="table-td">13200</td>
                    <td class="table-td">15800</td>
                    <td class="table-td">17500</td>
                    <td class="table-td">22000</td>
                </tr>
                <tr>
                    <td class="table-td2">Дополнительный слой Ceramic Coating 9Н 95.</td>
                    <td class="table-td">6200</td>
                    <td class="table-td">7200</td>
                    <td class="table-td">8300</td>
                    <td class="table-td">9500</td>
                    <td class="table-td">12000</td>
                </tr>
                <tr>
                    <td class="table-td2">Поверхностная полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10200</td>
                    <td class="table-td">11800</td>
                    <td class="table-td">13500</td>
                    <td class="table-td">17000</td>
                </tr>
                <tr>
                    <td class="table-td2">Мягкая полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">8500</td>
                    <td class="table-td">10200</td>
                    <td class="table-td">11800</td>
                    <td class="table-td">13500</td>
                    <td class="table-td">17000</td>
                </tr>
                <tr>
                    <td class="table-td2">Восстановительная полировка + Ceramic 9Н 95.</td>
                    <td class="table-td">11000</td>
                    <td class="table-td">13200</td>
                    <td class="table-td">15800</td>
                    <td class="table-td">17500</td>
                    <td class="table-td">22000</td>
                </tr>
                <tr>
                    <td class="table-td2">Дополнительный слой Ceramic Coating 9Н 95.<br>(Дополнительный слой Ceramic
                        Coating 9Н 95 увеличивает степень защиты и срок службы)
                    </td>
                    <td class="table-td">3500</td>
                    <td class="table-td">4200</td>
                    <td class="table-td">4800</td>
                    <td class="table-td">5500</td>
                    <td class="table-td">7000</td>
                </tr>
                <tr>
                    <td class="table-td2">Финальный слой Сталинит.<br>(По акции в подарок, при покупке защитного
                        покрытия)
                    </td>
                    <td class="table-td">1500</td>
                    <td class="table-td">1600</td>
                    <td class="table-td">1700</td>
                    <td class="table-td">1900</td>
                    <td class="table-td">2150</td>
                </tr>
                <tr>
                    <td class="table-td2">Жидкое стекло для новых машин.</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">8000</td>
                    <td class="table-td">10000</td>
                    <td class="table-td">12000</td>
                    <td class="table-td">12000</td>
                </tr>
                <tr>
                    <td class="table-td2">Восстановительная полировка + жидкое стекло.</td>
                    <td class="table-td">13500</td>
                    <td class="table-td">13500</td>
                    <td class="table-td">18000</td>
                    <td class="table-td">22000</td>
                    <td class="table-td">22000</td>
                </tr>
            </table>
            <div id="kovry"></div>
            <div class="table-head">Химчистка ковров</div>
            <div style="text-align: center; margin: 0 0 2%">Стоимость химчистки ковров зависит от размеров ковра.
                Стоимость 1 квадратного метра - 60 рублей.
            </div>
            <div id="nlenka"></div>
            <div class="table-head">Защитная пленка</div>
            <div style="text-align: center; margin: 0 0 2%">Стоимость химчистки ковров зависит от размеров ковра.
                Стоимость 1 квадратного метра - 60 рублей.
            </div>
            <div id="winom"></div>
            <div class="table-head">Шиномонтаж</div>
            <table class="table_one">
                <tr>
                    <td class="table-tdw2">Наименование операции:</td>
                    <td class="table-tdw">R 13</td>
                    <td class="table-tdw">R 15</td>
                    <td class="table-tdw">R 17</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Съём.</td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">50</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Монтаж.</td>
                    <td class="table-tdw">50</td>
                    <td class="table-tdw">70</td>
                    <td class="table-tdw">80</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Балансировка.</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Жгут.</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                    <td class="table-tdw">100</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Латка.</td>
                    <td class="table-tdw">От 50</td>
                    <td class="table-tdw">От 50</td>
                    <td class="table-tdw">От 50</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Латка кордовая.</td>
                    <td class="table-tdw">От 70</td>
                    <td class="table-tdw">От 70</td>
                    <td class="table-tdw">От 70</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Переобувка.</td>
                    <td class="table-tdw">1000</td>
                    <td class="table-tdw">1100</td>
                    <td class="table-tdw">1300</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Подкачка.</td>
                    <td class="table-tdw">5</td>
                    <td class="table-tdw">5</td>
                    <td class="table-tdw">5</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Боковой порез.</td>
                    <td class="table-tdw">Зависит от тяжести</td>
                    <td class="table-tdw">Зависит от тяжести</td>
                    <td class="table-tdw">Зависит от тяжести</td>
                </tr>
                <tr>
                    <td class="table-tdw2">Бортовой герметик с монтажем.</td>
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
                let elemHeight = document.getElementById('splinter').offsetTop;
                if (elemHeight < window.pageYOffset) {
                    this.show = true;
                } else {
                    this.show = false;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.checkImgUp);
        },
        mounted() {
            document.getElementById('topolir').addEventListener('click', function (e) {
                e.preventDefault();  // запрет перехода по ссылке
                (function slowScroll() { //вместо привычного события, самовызывающаяся функция
                    window.scrollBy(0, 40); // чем больше значение (цифра 40), тем выше скорость перемещения
                    if (window.pageYOffset < document.getElementById('polir').offsetTop + document.documentElement.clientHeight) { // если значение прокрутки больше нуля, то функция повториться
                        requestAnimationFrame(slowScroll); //Можно было осуществить через обычную рекурсию, но данный способ выполняется быстрее
                    }
                }())
            });
            document.getElementById('todop').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 50);
                    if (window.pageYOffset + 70 < document.getElementById('dop').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

            document.getElementById('tomoyka').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 20);
                    if (window.pageYOffset + 70 < document.getElementById('moyka').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

            document.getElementById('tohimch').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 70);
                    if (window.pageYOffset + 70 < document.getElementById('himch').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            }, false);

            document.getElementById('tozash').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 90);
                    if (window.pageYOffset + 70 < document.getElementById('zash').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

            document.getElementById('tokovry').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 100);
                    if (window.pageYOffset + 70 < document.getElementById('kovry').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

            document.getElementById('tonlenka').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 110);
                    if (window.pageYOffset + 70 < document.getElementById('nlenka').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

            document.getElementById('towinom').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, 120);
                    if (window.pageYOffset + 70 < document.getElementById('winom').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            });

        },
        updated() {
            document.getElementById('fixed_price_img').addEventListener('click', function (e) {
                e.preventDefault();
                (function slowScroll() {
                    window.scrollBy(0, -70);
                    if (window.pageYOffset > document.getElementById('base').offsetTop + document.documentElement.clientHeight) {
                        requestAnimationFrame(slowScroll);
                    }
                }())
            }, false);
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
        font-size: 26px;
        border-bottom: solid 1px grey;
        padding: 50px 20px;
        margin: 0 0 30px;
    }

    .price-head {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
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

    .price-head-one {
        cursor: pointer;
        display: flex;
        overflow: hidden;
        width: 180px;
        height: 100%;
        margin: 10px 10px;
        text-align: center;
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
        font-size: 26px;
        margin: 5%;
        border: solid 4px white;
        border-radius: 15px;
        padding: 2% 5%;
        display: flex;
        justify-content: space-around;
    }

    .group {
        width: 13%;
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
        font-size: 2vh;
        border: solid 3px;
        min-width: 7%;
        max-width: 7%;
        height: 100%;
    }

    .table-tdw {
        padding: 1% 0;
        text-align: center;
        vertical-align: middle;
        font-size: 2vh;
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
        font-size: 2vh;
        border: solid 3px;
    }

    .table-tdw2 {
        vertical-align: middle;
        padding: 1% 0;
        text-align: center;
        font-size: 2vh;
        border: solid 3px;
    }

    .table-head {
        border: solid 1px;
        margin: 12% -12.5% 5%;
        background: #f35656;
        padding: 1%;
        display: flex;
        justify-content: center;
        font-size: 3vh;
    }

    .table-head:first-child {
        border: solid 1px;
        margin: 0 -12.5% 5%;
        background: #f35656;
        padding: 1%;
        display: flex;
        justify-content: center;
        font-size: 3vh;
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

    .img_price_arrow {
        width: 100%;
        height: 100%;
        padding: 20px;
        opacity: .5;
        background-color: #1b1a20;
        border-radius: 15px;
        border: solid 1px white;
    }

    #fixed_price_img {
        width: 80px;
        height: 80px;
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

    @media screen and (max-width: 1000px) {

        .groups {
            font-size: 12px;
            margin: 2.5%;
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
            max-width: 10%;

        }
        .table-head {
            margin: 12% 0 5%;
            font-size: 24px;
        }
        .table-head:first-child {
            margin: 0 0 5%;
            font-size: 24px;
        }
        .table-tdw {

            font-size: 18px;
            border: solid 1px;
            min-width: 12%;
            max-width: 12%;
            height: 100%;
        }
        .table-td2 {
            width: 50%;
            font-size: 14px;
            border: solid 1px;
        }
        .table-tdw2 {
            padding: 1% 0;
            text-align: center;
            font-size: 18px;
            border: solid 1px;
        }

        #fixed_price_img {
            max-width: 50px;
            max-height: 50px;
            bottom: 80px;
            right: 30px;
        }

        .img_price_arrow {
            padding: 10px;
        }
    }

    @media screen and (max-width: 321px) {
        .table-td {
            padding: 0;
            font-size: 12px;
            border: solid 1px;
            min-width: 7%;
            max-width: 10%;

        }
        .table-tdw2 {
            font-size: 16px;
        }
        .table-tdw {

            font-size: 16px;

        }
    }
</style>
