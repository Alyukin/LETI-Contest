<script setup></script>

<template>
  <div class="bg-[#B7FBFE] pb-200">
    <header class="flex items-center justify-around">
      <div class="mt-6 flex-shrink-0 w-49">
        <img class="pointer-events-none h-40 object-contain" src="/logo.png" alt="Logo" />
      </div>
      <div class="mb-10 border-t-2 border-blue-300">
        <div class="flex space-x-20 mx-5">
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-red-500 mt-2">История</li>
          </ul>
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-blue-500 mt-2">Университет</li>
          </ul>
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-green-500 mt-2">Викторины</li>
          </ul>
        </div>
      </div>
      <div class="flex items-center space-x-2 w-49 mb-25 mt-8">
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
      </div>
    </header>
    <img class="pointer-events-none" src="/Vector.svg" alt="Line" />
    <div
      class="box-border relative mx-auto px-18 pt-5 mt-10 w-[770px] h-[359px] bg-[#ffffff80] rounded-[50px]"
    >
      <h1 class="text-[#333333] font-medium text-[68px] leading-[127%]">
        Виртуальный <br />тур <br />по истории ЛЭТИ
      </h1>
      <p class="text-[#333333] font-light text-[48px]">Узнай новое!</p>
    </div>
  </div>
</template>
