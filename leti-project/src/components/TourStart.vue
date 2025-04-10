<script>
export default {
  methods: {
    scrollToBlock(id) {
      const block = document.getElementById(id)
      if (block) {
        block.scrollIntoView({ behavior: 'smooth' }) // Плавный скролл
      }
    },
  },
}
</script>

<template>
  <tour-entry>
    <head-background class="bg-[#D1FDFF]">
      <header class="flex items-center justify-around">
        <div class="mt-6 flex-shrink-0 w-49">
          <img class="pointer-events-none h-40 object-contain" src="/logo.png" alt="Logo" />
        </div>
        <div class="mb-10 border-t-2 border-blue-300">
          <div class="flex space-x-20 mx-5">
            <button @click="scrollToBlock('content-link')" class="button-container cursor-pointer">
              <p class="button-text my-1">Оглавление</p>
            </button>
            <router-link to="/travel">
              <div class="button-container">
                <p class="button-text my-1">Путешествие по факультетам</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="flex items-center space-x-2 w-49 mb-25 mt-8">
          <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
          <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
          <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        </div>
      </header>
      <div class="tour-box">
        <h1 class="tour-box-h1">Виртуальный <br />тур <br />по истории ЛЭТИ</h1>
        <p class="text-[#333333] font-light text-[48px]">Узнай новое!</p>
      </div>
      <div class="flex justify-center">
        <div class="flex-shrink-0">
          <img @click="scrollToBlock('content-link')" class="h-10 object-contain mt-15" src="/arrow.png" alt="arrow" />
        </div>
      </div>
    </head-background>

    <quote-display id="content-link" class="flex justify-center px-6 py-10 font-sans">
      <div class="w-full flex flex-row items-center">
        <!-- Quote 1 -->
        <div class="flex-1 border-b-0 border-r border-gray-400 pr-8">
          <h1 class="ml-[25%] text-2xl font-semibold text-gray-700 leading-tight">
            История ЛЭТИ — это <br />история технологической <br />революции.
          </h1>
        </div>

        <!-- Quote 2 -->
        <div class="flex-1 border-b-0 border-r border-gray-400 pr-8 pl-2">
          <h1 class="ml-[25%] text-2xl text-amber-600 font-semibold italic leading-tight">
            С 1886 года — заря <br />инноваций, свет знаний, <br />энергия прогресса!
          </h1>
        </div>

        <!-- Quote 3 -->
        <div class="flex-1 pl-2">
          <h1 class="ml-[25%] text-2xl leading-tight text-gray-700 appear-animation">
            От первых шагов в <br />электротехнике до <br />прорывов в цифровой эре.
          </h1>
        </div>
      </div>
    </quote-display>
  </tour-entry>
</template>

<style scoped>
.tour-box-h1 {
  font-family: 'Jost', sans-serif;
  font-optical-sizing: auto;
  color: #333333;
  font-style: normal;
  font-weight: 500;
  font-size: 68px;
  line-height: 1.27;
}
head-background {
  background-image: url('Group1.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  height: auto;
  min-height: 124vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
quote-display {
  background-color: #d1fdff;
}
.tour-box {
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 72px;
  padding-right: 72px;
  padding-top: 20px;
  margin-top: 40px;
  width: 770px;
  height: 359px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
}
.button-container {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  padding: 4px 20px;
  margin-top: 15px;
  transition: background-color 0.3s;
}
.button-container:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
.button-container:hover .button-text {
  color: #a36642;
}
.button-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #49628b;
  transition: color 0.3s;
}
</style>
