<template>
    <div id="navigation">
            <ul class="navigation">
                <li class="navigation_capture">Автомойка</li>
                <li class="navigation_content hyphenate">Мы предо&shyстав&shyля&shyем весь стан&shyдарт&shyный ком&shyплекс услуг, необ&shyхо&shyди&shyмых для до&shyсти&shyже&shyния чи&shyсто&shyты ав&shyто&shyмо&shyби&shyлей лю&shyбо&shyго клас&shyса.На&shyши&shyми от&shyли&shyчи&shyтель&shyны&shyми осо&shyбен&shyно&shyстя&shyми яв&shyля&shyют&shyся ка&shyче&shyствен&shyные мо&shyю&shyщие и кос&shyме&shyти&shyче&shyские сред&shyства ве&shyду&shyщих ми&shyро&shyвых брен&shyдов в об&shyла&shyсти ухода за ав&shyто&shyмо&shyби&shyлем, таких как: Geyon, Ceramic Pro,Koch Chemie...</li>
        </ul>
        <span class="border1"></span>
        <ul class="navigation">
            <li class="navigation_capture">Детейлинг</li>
            <li class="navigation_content hyphenate">Со&shyвре&shyмен&shyный, про&shyфес&shyси&shyо&shyналь&shyный де&shyтей&shyлинг, ко&shyто&shyрый мы пред&shyла&shyга&shyем, вклю&shyча&shyет в себя такие опе&shyра&shyции как: вос&shyста&shyнов&shyле&shyние ЛКП,на&shyне&shyсе&shyние за&shyщит&shyных по&shyкры&shyтий ,ан&shyти&shyгра&shyвий&shyная плен&shyка на ав&shyто&shyмо&shyбиль,по&shyли&shyров&shyка и об&shyра&shyбот&shyка ан&shyти&shyдож&shyде&shyвы&shyми по&shyкры&shyти&shyя&shyми, хим&shyчист&shyка и за&shyщи&shyта са&shyло&shyна эко&shyло­ги&shyче&shyски чи&shyсты&shyми со&shyста&shyва&shyми и т.п.</li>
        </ul>
        <span class="border1"></span>
        <ul class="navigation">
            <li class="navigation_capture">Шиномонтаж</li>
            <li class="navigation_content hyphenate">Ши&shyно&shyмон&shyтаж вы&shyпол&shyня&shyет&shyся ква&shyли&shyфи&shyци&shyро&shyван&shyны&shyми спе&shyци&shyа&shyли&shyста&shyми на обо&shyру&shyдо&shyва&shyнии,ко&shyто&shyрое предот&shyвра&shyща&shyет по&shyвре&shyжде&shyния диска ав&shyто&shyмо&shyби&shyля. В про&shyцес&shyсе ра&shyбо&shyты оце&shyни&shyва&shyет&shyся со&shyсто&shyя&shyние по&shyкры&shyшек и дис&shyков, услу&shyги ши&shyно&shyмон&shyта&shyжа обя&shyза&shyтель&shyно вклю&shyча&shyют в себя ба&shyлан&shyси&shyров&shyку с ис&shyполь&shyзо&shyва&shyни&shyем спе&shyци&shyаль&shyных гру&shyзи&shyков.</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "navigition-bar-home"
    }
</script>

<style lang="scss">
  #navigation {
      z-index: 2;
      position: relative;
      display: flex;
      justify-content: center;
      background: #1b1a20;
      @media screen and (max-width: 980px){
          z-index: 2;
          position: relative;
          display: block;
          justify-content: center;
          background: #1b1a20;
      }

      .border1 {
          width: 1px!important;
          background-color: dimgrey;
      }
      .navigation {
          overflow: hidden;
          opacity: 0;
          width: 26%;
          @media screen and (max-width: 980px){
              overflow: hidden;
              opacity: 0;
              width: 100%;
          }

          @media screen and (min-width: 980px) and (max-width: 1300px){
              width: calc(100% / 3) ;
          }
          .navigation_capture {
              padding: 50px 0;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              font-size: 24px;
              font-weight: 500;
              width: 100%;
              border-bottom: solid 1px dimgrey;
              @media screen and (max-width: 980px){
                  padding: 30px 0 30px;
                  border-bottom: solid 1px dimgrey;
                  border-top: solid 1px dimgrey;
                  font-size: 28px;
              }
          }

          .navigation_content {
              color: #b2b2b2;
              text-align: justify;
              font-size: 18px;
              font-style: italic;
              line-height: 2em;
              padding: 7%;
              width: 86%;
              @media screen and (max-width: 980px){
                  color: white;
                  font-size: 18px;
                  line-height: 1.6em;
                  padding: 5%;
                  width: 90% ;
              }
          }
      }
  }

</style>
