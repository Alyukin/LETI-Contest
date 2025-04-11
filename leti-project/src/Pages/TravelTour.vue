<template>
  <section class="bg-[#F0F69B] h-[2000px]">
    <div class="flex mb-[50px]">
      <div class="mt-7 ml-26 flex-shrink-0 w-49">
        <router-link to="/">
          <img class="pointer-events-none h-40 object-contain" src="/logo.png" alt="Logo" />
        </router-link>
      </div>
      <div class="border-b-2 h-17 mt-8 ml-92 px-6 mr-auto">
        <p class="cormorant-500 text-[40px]">Путешествие по факультетам</p>
      </div>
    </div>

    <div class="tabs">
      <div class="tab-titles inter-text-h2 text-[30px]">
        <span v-for="(tab, index) in tabs" :key="index" :class="['tab-title', { active: index === activeTab }]" @click="activeTab = index">
          {{ tab.title }}
        </span>
      </div>

      <div class="tab-content">
        <!-- Вкладка ИНПРОТЕХ -->
        <div v-show="activeTab === 0">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ИНПРОТЕХ</h2>
                </div>
              </div>
              <img src="/inprotech-logo.png" alt="Импротех-лого" class="mb-2 ml-30 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/inprotech.png" alt="Инпротех" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[0].questions[0].question"
                    :answers="tabs[0].questions[0].answers"
                    :correct-answer="tabs[0].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                ИНПРОТЕХ был создан в 2019 году на основе факультета экономики и менеджмента (ФЭМ), который был организован в 1999 году. Новый
                институт возник в ответ на кадровый запрос предприятий из высокотехнологичных отраслей экономики. <br /><br />Направления подготовки:
                ИНПРОТЕХ предлагает подготовку по направлениям «Инноватика», «Управление качеством» и «Менеджмент». <br /><br />ИНПРОТЕХ развивает
                «гибкие» компетенции и системный подход к подготовке специалистов, что позволяет будущим инженерам проектировать решения, учитывая не
                только технические, но и экологические и социальные аспекты
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ФРТ -->
        <div v-show="activeTab === 1">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ФРТ</h2>
                </div>
              </div>
              <img src="/frt-logo.png" alt="ФРТ-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/frt.jpg" alt="ФРТ" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[1].questions[0].question"
                    :answers="tabs[1].questions[0].answers"
                    :correct-answer="tabs[1].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Факультет радиотехники и телекоммуникаций является старейшим радиотехническим факультетом России. ФРТ продолжает и развивает научные
                традиции создателя отечественной школы радиотехники, изобретателя радио профессора А.С. Попова. <br /><br />Выпускники работают в
                таких сферах деятельности, как космическая и наземная локация, навигация и управление всеми видами транспорта, спутниковая и сотовая
                связь, персональный телекоммуникационный сервис, системы компьютерного сбора и обработки информации, средства мобильной связи,
                аудиовизуальная, высокочастотная и микроволновая техника, компьютерное проектирование радиоэлектронных средств, аналоговая и цифровая
                микросхемотехника.
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ФЭЛ -->
        <div v-show="activeTab === 2">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ФЭЛ</h2>
                </div>
              </div>
              <img src="/fel-logo.png" alt="ФЭЛ-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/fel.jpg" alt="ФЭЛ" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[2].questions[0].question"
                    :answers="tabs[2].questions[0].answers"
                    :correct-answer="tabs[2].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Факультет электроники СПбГЭТУ «ЛЭТИ» - это один из ведущих научно-образовательных центров Европы в области наукоемких технологий
                современной электроники.<br /><br />ФЭЛ готовит конкурентноспособных специалистов, обладающих совокупностью естественнонаучных и
                инженерных компетенций, обеспечивающих генерацию, распространение и применение новых знаний с ориентацией на мультидисциплинарные
                научные исследования, разработку, внедрение и применение прогрессивных наукоемких технологий в области электроники, микро- и
                наноэлектроники, фотоники, нанотехнологии и микро- и наносистемной техники.
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ФКТИ -->
        <div v-show="activeTab === 3">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ФКТИ</h2>
                </div>
              </div>
              <img src="/fkti-logo.png" alt="ФКТИ-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/fkti.jpg" alt="ФКТИ" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[3].questions[0].question"
                    :answers="tabs[3].questions[0].answers"
                    :correct-answer="tabs[3].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Основной образовательной деятельностью факультета является подготовка IT-специалистов (специалистов в области компьютерных
                технологий), соответствующих мировому уровню, для высокотехнологических отраслей инновационной экономики Российской Федерации.
                <br /><br />Факультет, опираясь на обширные связи с отечественными и зарубежными предприятиями и фирмами, обладая высококлассными
                специалистами и современными научными и учебными лабораториями, постоянно совершенствует образовательный процесс, гарантируя
                выпускникам востребованность на рынке труда и успешную карьеру в жизни.
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ФЭА -->
        <div v-show="activeTab === 4">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ФЭА</h2>
                </div>
              </div>
              <img src="/fea-logo.png" alt="Импротех-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/fea.jpg" alt="Инпротех" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[4].questions[0].question"
                    :answers="tabs[4].questions[0].answers"
                    :correct-answer="tabs[4].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Факультет электротехники и автоматики – один из старейших факультетов ЛЭТИ. Его история берет начало с 1920 года.
                <br /><br />Факультет всегда сочетал традиционно высокий уровень теоретической подготовки и современную лабораторно-техническую базу,
                выпуская востребованных специалистов для высокотехнологичных отраслей промышленности. Студенты ФЭА осваивают силовой электропривод,
                программирование микроконтроллеров и программируемых логических контроллеров, проектирование систем управления подвижными объектами,
                моделирование и работу в CAD-системах, судовую и наземную электротехнику, проектирование источников питания, термическую обработку
                металлов, схемотехнику, робототехнику, нейтронные сети и многое другое.
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ФИБС -->
        <div v-show="activeTab === 5">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ФИБС</h2>
                </div>
              </div>
              <img src="/fibs-logo.png" alt="ФИБС-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/fibs.jpg" alt="ФИБС" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[5].questions[0].question"
                    :answers="tabs[5].questions[0].answers"
                    :correct-answer="tabs[5].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Факультет информационно-измерительных и биотехнических систем (ФИБС) ЛЭТИ — это инновационная среда на стыке науки и технологий.
                <br /><br />Здесь готовят специалистов, ориентированных на практику и исследования, в тесном сотрудничестве с ведущими работодателями
                и международными партнёрами. Обучение включает участие в реальных проектах, освоение инженерных навыков в современных лабораториях,
                возможность получения дополнительной квалификации и карьерный рост в высокотехнологичных отраслях. <br /><br />Англоязычные программы
                открыты как для российских, так и для иностранных студентов. Выпускники ФИБС конкурентоспособны и востребованы — это результат
                системной работы с индустрией и акцента на «обучение через исследование».
              </div>
            </div>
          </div>
        </div>

        <!-- Вкладка ГФ -->
        <div v-show="activeTab === 6">
          <div class="mx-15">
            <div class="flex flex-row my-[20px] mb-[30px]">
              <div>
                <div class="border-b-1 ml-10 px-8">
                  <h2 class="cormorant-500 mx-auto text-center text-[55px]">ГФ</h2>
                </div>
              </div>
              <img src="/gf-logo.png" alt="Импротех-лого" class="mb-2 ml-80 h-30" />
            </div>
            <div class="flex">
              <div>
                <img src="/gf.jpg" alt="Инпротех" class="object-cover mb-2 rounded-[50px] shadow-md" />
                <div>
                  <QuestionElem
                    class="w-[100%] max-w-[1100px] mx-[8px] my-9"
                    :question="tabs[6].questions[0].question"
                    :answers="tabs[6].questions[0].answers"
                    :correct-answer="tabs[6].questions[0].correctAnswer"
                  />
                </div>
              </div>
              <div class="ml-18 mr-10 w-3/4 inter text-[30px]">
                Гуманитарный факультет ЛЭТИ — это центр гуманитарного знания и межкультурного диалога, объединяющий пять кафедр: иностранных языков,
                истории культуры, государства и права, связей с общественностью, социологии и политологии, а также философии. <br /><br />Здесь
                обучаются свыше 1000 студентов, а диплом получили уже более 2500 специалистов. Факультет активно развивает научную и культурную жизнь:
                ежегодно проводятся всероссийская конференция «Информация. Коммуникация. Общество» (с 1999 года), фестиваль «PR — профессия третьего
                тысячелетия» (с 2000), межвузовский форум «Палитра языков и культур» (с 2008), а также конференция «Актуальные проблемы языкознания»
                (с 2012).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import QuestionElem from '../components/QuestionElem.vue'
export default {
  components: {
    QuestionElem,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'ИНПРОТЕХ',
          questions: [
            {
              question: 'Что такое менеджмент?',
              answers: [
                'Управление финансами',
                'Процесс планирования, организации, мотивации и контроля',
                'Разработка маркетинговых стратегий',
                'Создание новых продуктов',
              ],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: 'ФРТ',
          questions: [
            {
              question: 'Какой компонент используется для усиления электрического сигнала в радиотехнике?',
              answers: ['Диод', 'Резистор', 'Трансформатор', 'Транзистор'],
              correctAnswer: 3,
            },
          ],
        },
        {
          title: 'ФЭЛ',
          questions: [
            {
              question: 'Как называется элемент, способный накапливать электрический заряд?',
              answers: ['Конденсатор', 'Диод', 'Резистор', 'Индуктор'],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: 'ФКТИ',
          questions: [
            {
              question: 'Сколько бит в одном байте?',
              answers: ['8 бит', '10 бит', '1 бит', '256 бит'],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: 'ФЭА',
          questions: [
            {
              question: 'Как называется устройство, которое сравнивает заданное значение с текущим и формирует управляющее воздействие?',
              answers: ['Датчик', 'Исполнительный механизм', 'Регулятор', 'Усилитель'],
              correctAnswer: 2,
            },
          ],
        },
        {
          title: 'ФИБС',
          questions: [
            {
              question: 'Какой орган человеческого тела отвечает за выработку инсулина?',
              answers: ['Печень', 'Поджелудочная железа', 'Щитовидная железа', 'Надпочечники'],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: 'ГФ',
          questions: [
            {
              question: 'В каком году Александр Сергеевич Пушкин написал повесть «Капитанская дочка»?',
              answers: ['1825', '1836', '1841', '1831'],
              correctAnswer: 1,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
section-block {
  background-color: #deffcc;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: 5525px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.cormorant-500 {
  font-family: 'Cormorant', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.tabs {
  border: 1px solid #ccc;
  background-color: #f0f5b3;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

.tab-titles {
  display: flex;
  border-bottom: 1px solid #ccc;
}

.tab-title {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  text-align: center;
}

.tab-title.active {
  background-color: #f0f0f0;
  font-weight: bold;
}

.tab-content {
  padding: 20px;
}
</style>
