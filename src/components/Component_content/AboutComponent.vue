<template>
    <div>
      <div id="about">
        <p> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
        <p> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
        <p> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
      </div>
      <div id="history">
        <div class="navigation_history">История автомойки по годам:</div>
        <input type="radio" checked="checked" id="history1" name="history">
        <label id="history1l" for="history1">2001</label>
        <input type="radio"  id="history2" name="history">
        <label id="history2l" for="history2">2004</label>
        <input type="radio"  id="history3" name="history">
        <label id="history3l" for="history3">2007</label>
        <input type="radio"  id="history4" name="history">
        <label id="history4l" for="history4">2012</label>
        <input type="radio"  id="history5" name="history">
        <label id="history5l" for="history5">2018</label>
        <div style="border: solid 3px white; margin: 3% 10%; border-radius: 15px">

          <div class="history_about">
            <div id="history1label" rel="label1"><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p></div>
            <div id="history2label" rel="label2"><p>Lorem Ipsum2 - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p></div>
            <div id="history3label" rel="label3"><p>Lorem Ipsum3 - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p></div>
            <div id="history4label" rel="label4"><p>Lorem Ipsum4 - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p></div>
            <div id="history5label" rel="label5"><p>Lorem Ipsum5 - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p></div>
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

<style scoped>


  #about
  {
    z-index: 2;
    background-color: #1b1a20;
    padding: 7% 10% 5%;
    font-size: 2.4vh;
    line-height: 1.5em;
  }

  #history
  {
    margin: 5% 0 ;
    text-align: center;
  }
  #history label img
  {

  }
  #history input
  {
    display: none;
    outline: none;
    cursor: pointer;
  }
  #history label
  {
    margin: 0 1% 0;
    padding: 0.8%;
    cursor: pointer;

  }
  .navigation_history
  {
    font-size: 4.5vh;
    margin: 0 0 2%;
  }

  .history_about
  {
    padding: 0 10%;
    margin: 3% 0 0;
  }
  .history_about div {

    font-size: 3vh;
  }
  .history_about p {
    margin: 2% 0 4% ;
    line-height: 100%;
    text-align: center;
    font-weight: 100;
    font-size: 4vh;
  }

  #history1label{
    color: white;
    display: none;
  }
  #history2label{
    color: white;
    display: none;
  }
  #history3label{
    color: white;
    display: none;
  }
  #history4label{
    color: white;
    display: none;
  }
  #history5label{
    color: white;
    display: none;
  }

  #history1:checked ~ #history1l{
    background-color: #f35656;
  }
  #history2:checked ~ #history2l{
    background-color: #f35656;
  }
  #history3:checked ~ #history3l{
    background-color: #f35656;
  }
  #history4:checked ~ #history4l{
    background-color: #f35656;
  }
  #history5:checked ~ #history5l{
    background-color: #f35656;
  }



  #history1:checked ~ div #history1label{
    display: block;
  }
  #history2:checked ~ div #history2label{
    display: block;
  }
  #history3:checked ~ div #history3label{
    display: block;
  }
  #history4:checked ~ div #history4label{
    display: block;
  }
  #history5:checked ~ div #history5label{
    display: block;
  }
</style>
