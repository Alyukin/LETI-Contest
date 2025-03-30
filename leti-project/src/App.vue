<script setup></script>

<template>
  <tour-entry>
    <head-background class="bg-[#D1FDFF]">
      <header class="flex items-center justify-around">
        <div class="mt-6 flex-shrink-0 w-49">
          <img class="pointer-events-none h-40 object-contain" src="/logo.png" alt="Logo" />
        </div>
        <div class="mb-10 border-t-2 border-blue-300">
          <div class="flex space-x-20 mx-5">
            <div class="button-container">
              <ul>
                <li class="button-text cursor-pointer my-1">Оглавление</li>
              </ul>
            </div>

            <div class="button-container">
              <ul>
                <li class="button-text cursor-pointer my-1">Путешествие по факультетам</li>
              </ul>
            </div>
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
          <img class="h-10 object-contain mt-15" src="/arrow.png" alt="arrow" />
        </div>
      </div>
    </head-background>

    <quote-display class="flex justify-center px-6 py-10 font-sans">
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
          <h1 class="ml-[25%] text-2xl leading-tight text-gray-700">От первых шагов в <br />электротехнике до <br />прорывов в цифровой эре.</h1>
        </div>
      </div>
    </quote-display>
  </tour-entry>

  <div class="content-block content-header-bg">
    <div class="content-header rectangle-1">
      <h1 class="content-header-text-h1">Оглавление</h1>
      <div class="content-text-sections">
        <h2 class="content-header-text-h2"><span class="large-bullet">•</span> &nbsp; Основание университета</h2>
        <h2 class="content-header-text-h2"><span class="large-bullet">•</span> &nbsp;Становление советского образования</h2>
        <h2 class="content-header-text-h2"><span class="large-bullet">•</span> &nbsp;Развитие в советский период</h2>
        <h2 class="content-header-text-h2"><span class="large-bullet">•</span> &nbsp;Современный период</h2>
        <h2 class="content-header-text-h2" style="color: #a54410"><span class="large-bullet">•</span> &nbsp;Путешествие по факультетам</h2>
      </div>
    </div>
  </div>
</template>
