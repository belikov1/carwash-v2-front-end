<template>
    <div id="navigation">
        <ul class="navigation">
            <li class="navigation_capture">Автомойка</li>
            <li class="navigation_content">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</li>
        </ul>
        <span class="border1"></span>
        <ul class="navigation">
            <li class="navigation_capture">Детейлинг</li>
            <li class="navigation_content">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</li>
        </ul>
        <span class="border1"></span>
        <ul class="navigation">
            <li class="navigation_capture">Шиномонтаж</li>
            <li class="navigation_content">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</li>
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
              padding: 15% 0 5%;
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
                  text-align: justify;
                  font-size: 18px;
                  font-style: italic;
                  line-height: 1.6em;
                  padding: 5%;
                  width: 90% ;
              }
          }
      }
  }

</style>
